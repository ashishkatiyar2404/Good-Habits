import React from "react";
import "./styles.css";
import { useState } from "react";

import { bookDB } from "./dataBase";

export default function App() {
  const [selectedGenre, setGenre] = useState("Books");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>💡good_habits 📙 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        <b>
          {" "}
          My recommendations for Meditation🧘,Good books📖 and Podcast🎧 for
          Growth.🕴{" "}
        </b>{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 1rem",
              fontFamily: "Sniglet"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="main1">
        <ul style={{ listStyleType: "none", alignContent: "center" }}>
          {bookDB[selectedGenre].map((habit) => (
            <li
              key={habit.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div className="main2">
                <div style={{ fontSize: "larger" }}> {habit.name} </div>
                <div style={{ fontSize: "smaller" }}> {habit.rating} </div>

                <a href={habit.linkUrl}>
                  <img
                    style={{ width: "250px" }}
                    alt="pics"
                    src={habit.imageUrl}
                  ></img>{" "}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
