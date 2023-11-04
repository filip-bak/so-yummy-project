import {
  fetchRecipesByCategory,
  fetchRecipesCategoryList,
} from "redux/recipes/actions";
import {
  selectRecipes,
  selectCategories,
  selectResultsPerPage,
  selectTotalPages,
} from "redux/recipes/selectors";
import { setResultsPerPage } from "redux/recipes/slice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Box, Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { CardMeal } from "../CardMeal/CardMeal";
import { Pagination } from "components/Pagination/Pagination";
import styles from "./CategoryRecipes.module.css";

const localTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 780,
      lg: 1440,
    },
  },
});

export const CategoryRecipes = () => {
  const [searchParams] = useSearchParams();
  const totalCount = useSelector(selectTotalPages);
  const resultsPerPage = useSelector(selectResultsPerPage);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const categoryList = useSelector(selectCategories);
  const items = useSelector(selectRecipes);
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const currentPage = searchParams.get("currentPage") ?? 1;

  useEffect(() => {
    dispatch(fetchRecipesCategoryList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchRecipesByCategory({
        category: categoryName,
        currentPage: currentPage,
      })
    );
    dispatch(setResultsPerPage(8));
  }, [dispatch, currentPage, categoryName]);

  const handleChange = (event, newValue) => {
    navigate(`/categories/${newValue}`);
  };

  const onMouseEnter = () => {
    setFlag(true);
  };
  const onMouseLeave = () => {
    setFlag(false);
  };

  return (
    <div className={styles.container}>
      <ThemeProvider theme={localTheme}>
        <Box
          sx={{
            pt: { xs: "50px", lg: "100px" },
            maxWidth: "100%",
            bgcolor: "transparent",
            borderBottom: 1,
            borderColor: "#E0E0E0",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Tabs
            onChange={handleChange}
            value={categoryName}
            variant="scrollable"
            scrollButtons={true}
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
            sx={{
              "& .MuiTabs-scroller": {
                "& .css-1aquho2-MuiTabs-indicator": {
                  backgroundColor: "var(--accent-color-darker)",
                },
                "& .css-ttwr4n": {
                  backgroundColor: "var(--accent-color-darker)",
                },
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              },
              "& .MuiTabs-flexContainer": {
                gap: { xs: "28px", md: "55px" },
                "& :hover": {
                  color: "var(--accent-color-darker)",
                },
              },
              "& .MuiTab-root": {
                textTransform: "capitalize",
                minWidth: "unset",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "18px",
                borderColor: "var(--accent-color-darker)",
              },

              "& svg": {
                opacity: `${flag ? 1 : 0}`,
                stroke: "var(--accent-color-darker)",
                strokeWidth: "3px",
                transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
              },
            }}
          >
            {categoryList.map(categ => (
              <Tab
                sx={{
                  pb: { xs: "32px", md: "28px" },
                  pt: "10px",
                  "&.Mui-selected": {
                    borderBottom: "1",
                    borderColor: "var(--accent-color-darker)",
                    color: "var(--accent-color-darker)",
                  },

                  color: "#BDBDBD",
                  fontWeight: "400",
                  lineHeight: { xs: "14px", md: "18px" },
                  fontFamily: "Poppins",
                  fontSize: { xs: "14px", md: "18px" },
                  fontStyle: "normal",
                }}
                key={categ}
                value={categ.toLowerCase()}
                label={categ}
              />
            ))}
          </Tabs>
        </Box>
      </ThemeProvider>
      <ul className={styles.results}>
        {items.recipes?.map(meal => (
          <CardMeal meal={meal} key={meal._id} />
        ))}
      </ul>
      {totalCount > resultsPerPage && (
        <Pagination recipesCount={totalCount} resultsPerPage={resultsPerPage} />
      )}
    </div>
  );
};
