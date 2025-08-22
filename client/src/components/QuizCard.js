import React, { useState } from 'react';
import questions from './QuizData';

const QuizCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (index) => {
    if (!submitted) {
      setSelected(index);
      setSubmitted(true);
      if (index === currentQuestion.correctIndex) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div style={styles.card}>
      {!showScore ? (
        <>
          <h3 style={styles.question}>{currentQuestion.text}</h3>
          {currentQuestion.options.map((opt, idx) => {
            let bgColor = '#ede7e7ff';
            if (submitted) {
              if (idx === currentQuestion.correctIndex) bgColor = '#4caf50';
              else if (idx === selected) bgColor = '#c62828';
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                style={{
                  ...styles.option,
                  backgroundColor: bgColor,
                  pointerEvents: submitted ? 'none' : 'auto',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.03)';
                  e.target.style.fontSize = '22px';
                  e.target.style.backgroundColor = '#ffffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.fontSize = '1.25rem';
                  e.target.style.backgroundColor = bgColor;
                }}
              >
                {opt}
              </button>
            );
          })}

          {submitted && (
            <div style={styles.resultBox}>
              <strong style={{ color: selected === currentQuestion.correctIndex ? '#44eb9aff' : '#e67654ff' }}>
                {selected === currentQuestion.correctIndex ? '✅ Correct!' : '❌ Incorrect!'}
              </strong>
              <p style={styles.explanation}>{currentQuestion.explanation}</p>
            </div>
          )}

          {submitted && (
            <button
              onClick={handleNext}
              style={styles.nextBtn}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#ffb74d')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffa726')}
            >
              Next
            </button>
          )}
        </>
      ) : (
        <>
          <h2>Your Score: {score} / {questions.length}</h2>
          <h3 style={{color:'#000000'}}>🧠 Great job! Review and retry if you'd like.</h3>
          <button
            onClick={handleRestart}
            style={styles.nextBtn}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#64dd17')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#76ff03')}
          >
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  card: {
    background: "#f1f5f9",
    borderRadius: "12px",
    border: "1px solid #ddd",
    padding: "30px",
    width: "90%",
    maxWidth: "550px",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  question: {
    fontSize: "1.4rem",
    marginBottom: "20px",
    fontWeight: 600,
  },
  option: {
    padding: "14px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "12px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.2s",
    background: "#ffffffff",
  },
  resultBox: {
    marginTop: "14px",
    background: "#f5f5f5",
    padding: "10px",
    borderRadius: "6px",
  },
  explanation: {
    marginTop: "5px",
    fontFamily: "Courier New, monospace",
    color: "#333",
    fontSize: "1.1rem"
  },
  nextBtn: {
    marginTop: "20px",
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 24px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
    transition: "opacity 0.2s",
  },
};

export default QuizCard;
