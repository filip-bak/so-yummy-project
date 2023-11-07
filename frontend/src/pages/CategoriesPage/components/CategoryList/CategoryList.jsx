import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesCategoryList } from "redux/recipes/actions";
import { selectCategories } from "redux/recipes/selectors";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";

export const CategoryList = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const { categoryName } = useParams();
  const recipes = useSelector(selectCategories);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRecipesCategoryList());
  }, [dispatch]);

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
    <>
      <Box
        sx={{
          pt: "100px",
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
          {recipes.items.map(categ => (
            <Tab
              sx={{
                pb: { xs: "32px", md: "28px" },
                "&.Mui-selected": {
                  borderBottom: "1",
                  borderColor: "var(--accent-color-darker)",
                  color: "var(--accent-color-darker)",
                  backgroundColor: "transparent",
                },

                color: "#E0E0E0",
                fontWeight: "400",
                lineHeight: "1",
                fontFamily: "Poppins",
                fontSize: { xs: "14px", md: "18px" },
              }}
              key={categ}
              value={categ.toLowerCase()}
              label={categ}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
};
