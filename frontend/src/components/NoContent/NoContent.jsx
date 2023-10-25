import css from "./NoContent.module.css";
import PropTypes from "prop-types";
import vegetables from "../../images/vegetables-208.jpg";

export const NoContent = ({ infoParagraph }) => {
  return (
    <div>
      <img
        className={css.image}
        src={vegetables}
        // src="images/vegetables-208.jpg"
        alt="vegetables falling out of the basket"
        width="208"
        height="133"
      />
      <p>{infoParagraph}</p>
    </div>
  );
};

NoContent.propTypes = {
  infoParagraph: PropTypes.string.isRequired,
};
