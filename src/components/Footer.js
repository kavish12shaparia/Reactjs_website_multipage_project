import React, { useState } from "react";
import "./footer.css";


const Footer = () => {

const categoryListArray = [
  { categoryName: "Facebook", categoryURL:"https://www.facebook.com" },
  { categoryName: "Twitter", categoryURL:"https://www.twitter.com" },
  { categoryName: "Google+", categoryURL:"http://plus.google.com/" },
  { categoryName: "LinkedIn", categoryURL:"https://www.linkedin.com" },
  { categoryName: "Behance", categoryURL:"https://www.behance.net" },
  { categoryName: "Dribble", categoryURL:"https://www.dribble.com" },
  { categoryName: "GitHub", categoryURL:"https://www.github.com" },
]

const [categoryList, setCategoryList] = useState(categoryListArray);

const renderCategoryList = () => {
  return categoryList.map((x, i) => {
    return (
            <a key={i} routerLink={x.categoryURL}> <h6 id="values">{x.categoryName}</h6></a>
    );
  });
}

return (
    <div className="footer">
      <div className='navbar' id='myNavbar'>
        {renderCategoryList()}
      </div>
  </div>
);
};

export default Footer;