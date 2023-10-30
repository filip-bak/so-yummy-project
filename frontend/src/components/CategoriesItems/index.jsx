import { useState } from "react";
import recepiesItems from "../../Data/recipes.json";

const CategoriesItems = () => {
  const [items] = useState(recepiesItems);
  return (
    <div>
      {items.map(val => (
        <li>
          <div>
            <img src={val.preview} alt={val.title} />
          </div>
          <div>
            <p>{val.title}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CategoriesItems;
