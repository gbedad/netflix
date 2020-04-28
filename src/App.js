import React from "react";

import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";
import movies from "./assets/movies.json";

function App() {
  const tabFilms = [movies];
  console.log(tabFilms);
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div>
        {movies.map((cat, index) => {
          return (
            <Section
              key={index}
              className={cat.className}
              category={cat.category}
              films={cat.images}
              /* films={<img src={cat.images[0]} alt="pict" />} */
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
