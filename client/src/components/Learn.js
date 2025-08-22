import React, { useState } from "react";
import QuizCard from "./QuizCard";

const Learn = () => {
  const [activeO, setActiveO] = useState(null);
  const [hoverHeading, setHoverHeading] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const explanations = { "O(1)": 'O(1) -> Constant time : Operation takes the same time regardless of input size. Example: Accessing element in an array.', 'O(log N)': 'O(log N) -> Logarithmic time : Problem size is halved at each step. Example: Binary search on a sorted array.', 'O(√N)': 'O(√N) -> Square root time: Performance grows with the square root of input size. Example: Checking for prime by iterating up to √N.', 'O(N)': 'O(N) -> Linear time: Time grows directly with input size. Example: Finding the maximum value in an array.', 'O(N log N)': 'O(N log N) -> Linearithmic time: Common in efficient sorting algorithms. Example: Merge Sort or Heap Sort.', 'O(N²)': 'O(N²) -> Quadratic time: Operations inside a loop over all elements. Example: Bubble Sort or checking all pairs in a list.', 'O(N³)': 'O(N³) -> Cubic time: triple nested loops or 3D matrix operations. Example: 3 Nested loops.', 'O(2^N)': 'O(2^N) -> Exponential time: Doubles with each additional input. Example: Solving the subset sum problem via recursion.', 'O(N!)': 'O(N!) -> Factorial time: Extremel y slow growth, tries all permutations. Example: Solving the Traveling Salesman Problem with brute-force.', };

  return (
    
    <section id="learn" style={styles.section}>
      {/* ========= LEARN VIDEO ========= */}
      <div style={styles.card}>
        <h1 style={styles.title}>Learn</h1>
        <div style={styles.video}>
          <iframe
            title="learning-video"
            width="680"
            height= "405"
            src="https://www.youtube.com/embed/FPu9Uld7W-E?start=75"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </div>

      {/* ========= BIG-O GROWTH ========= */}
      <div style={styles.card}>
        <h2
          style={styles.heading}
          onMouseEnter={() => setHoverHeading(true)}
          onMouseLeave={() => setHoverHeading(false)}
        >
          {hoverHeading
            ? "The smaller the Big-O, the better the performance"
            : "Growth of Big O"}
        </h2>

        <div style={styles.wrapper}>
          
          {Object.keys(explanations).map((item, index) => {
          const isHovered = hoveredItem === item; // check if THIS item is hovered
          return (
            <span
              key={index}
              onClick={() =>
                setActiveO((prev) => (prev === item ? null : item))
              }
              style={{
                ...styles.o,
                ...(isHovered ? styles.oHover : {}),
                marginRight: "6px",
                fontWeight: activeO === item ? "800" : "500",
                color: activeO === item ? "#000" : "#666",
              }}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item}
              {index !== Object.keys(explanations).length - 1 && (
                <span style={{ margin: "0 6px" }}>{`<`}</span>
              )}
            </span>
          );
        })}

        </div>

        {activeO && (
          <div style={styles.explanation}>{explanations[activeO]}</div>
        )}
      </div>

      {/* ========= PRACTICE QUESTIONS ========= */}
      <div style={styles.card}>
        <h2 style={styles.heading}>Practice Questions</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <QuizCard />
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // centers all cards
    justifyContent: "center",
    padding: "40px 20px",
    // background: "#f8f9fa", // soft background contrast
  },

  card: {
    background: "#4f494996",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    padding: "40px",
    margin: "30px auto",
    width: "85%",
    maxWidth: "950px",
    textAlign: "center",
  },

  title: {
    fontSize: "2.2rem",
    fontWeight: "800",
    marginBottom: "25px",
    color: "#ffffffff", // deep slate color
  },

  heading: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#ffffffff", // nice modern dark-gray
  },

  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
    padding: "20px",
    background: "#f1f5f9",
    borderRadius: "8px",
  },

  o: {
    // gap: "80px",
    fontSize: "1.6rem",     // increased size
    fontWeight: "600",      // more bold
    cursor: "pointer",
    transition: "color 0.2s ease, transform 0.2s ease",
  },
  oHover: {
    color: "#000",
    transform: "scale(1.1)", // slight zoom
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
  explanation: {
    marginTop: "20px",
    padding: "15px",
    fontSize: "1.5rem",
    fontWeight: "500",
    background: "#f8fafc",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
  },

};

export default Learn;
