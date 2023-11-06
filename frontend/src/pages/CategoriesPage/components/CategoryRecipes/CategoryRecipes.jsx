import { Box, Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { Pagination } from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchRecipesByCategory } from "redux/recipes/actions";
import {
  selectCategories,
  selectRecipes,
  selectResultsPerPage,
  selectTotalPages,
} from "redux/recipes/selectors";
import { CardMeal } from "../CardMeal/CardMeal";
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

const toCapitalCase = str => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const CategoryRecipes = () => {
  const [searchParams] = useSearchParams();
  const { categoryName } = useParams();

  const [flag, setFlag] = useState(false);
  const totalCount = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const resultsPerPage = useSelector(selectResultsPerPage);
  const categoryList = useSelector(selectCategories);
  const items = useSelector(selectRecipes);
  const navigate = useNavigate();
  const currentPage = searchParams.get("currentPage") ?? 1;

  useEffect(() => {
    dispatch(
      fetchRecipesByCategory({
        category: categoryName,
        currentPage: currentPage,
      })
    );
  }, [dispatch, currentPage, categoryName]);

  useEffect(() => {
    if (
      categoryList.length > 0 &&
      !categoryList.includes(toCapitalCase(categoryName))
    ) {
      return navigate(`/categories/beef`);
    }
  }, [categoryName, categoryList, navigate]);

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
            value={categoryName.toLowerCase()}
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
