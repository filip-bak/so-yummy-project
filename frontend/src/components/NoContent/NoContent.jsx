import css from "./NoContent.module.css";
import PropTypes from "prop-types";
import vegetables from "../../images/vegetables-208.jpg";

export const NoContent = ({ infoParagraph }) => {
  return (
    <div className={css.container}>
      <img
        className={css.image}
        src={vegetables}
        alt="vegetables falling out of the basket"
        width="208"
        height="133"
      />
      <p className={css.text_info}>{infoParagraph}</p>
    </div>
  );
};

NoContent.propTypes = {
  infoParagraph: PropTypes.string.isRequired,
};
