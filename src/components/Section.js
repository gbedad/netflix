import React from "react";
/* import Films from "./Films"; */

const Section = (props) => {
  /* console.log(props.category);
  console.log(props.images);
  const film = props.images;
  console.log(film); */

  return (
    <div className="section">
      <div className="category">{props.category}</div>
      <div className="images">
        {props.films.map((cat, index) => {
          return <img src={cat} alt="pict" />;
        })}
      </div>
    </div>
  );
};
export default Section;
