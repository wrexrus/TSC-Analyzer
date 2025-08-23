import React, { useState } from 'react';
import API_BASE_URL from "./config";


const Analyze = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!code.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
      const data = await res.json();
      setResult(data);
      setShowResult(true);
    } catch (err) {
      alert('Server error. Check console.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCode('');
    setResult(null);
    setShowResult(false);
  };

  return (
    <section id="analyze" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Analyze Code</h1>
        {!showResult ? (
          <div style={styles.inputWrapper}>
            <textarea
              style={styles.textarea}
              placeholder="Drop your code!"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button style={styles.analyzeBtn} onClick={handleAnalyze}>
              {loading ? 'Analyzing…' : 'Analyze'}
            </button>
          </div>
        ) : (
          <div style={styles.resultWrapper}>
            <div style={styles.codeBox}>
              <h4 style={styles.panelTitle}>💻 Your Code</h4>
              <pre style={styles.codePreview}>{code}</pre>
            </div>

            <div style={styles.graphBox}>
              <h4 style={styles.panelTitle}>📊 Complexity Explanation</h4>
              <p style={styles.explanation}>{result?.explanation}</p>
            </div>

            <button style={styles.resetBtn} onClick={handleReset}>
              Test New Code
            </button>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '60px',
    padding: '20px',
    fontFamily: 'Inter, sans-serif',
    color: '#222',
  },
  card: {
    width: '100%',
    maxWidth: '900px',
    background: '#4f494996',
    borderRadius: '12px',
    padding: '40px 30px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#ffffffff',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  textarea: {
    width: '100%',
    maxWidth: '800px',
    height: '280px',
    padding: '16px',
    fontSize: '15px',
    fontFamily: 'monospace',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#f1f5f9',
    color: '#000',
    resize: 'vertical',
    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.05)',
  },
  analyzeBtn: {
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: '600',
    border: 'none',
    backgroundColor: '#000000ff',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.2s ease',
  },
  analyzeBtnHover: {
    backgroundColor: "#f1f5f9"
  },
  resultWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  codeBox: {
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '20px',
    background: '#f1f5f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  graphBox: {
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '20px',
    background: '#f1f5f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  panelTitle: {
    marginBottom: '12px',
    fontWeight: '600',
    fontSize: '1rem',
    color: '#34495e',
  },
  codePreview: {
    whiteSpace: 'pre-wrap',
    backgroundColor: '#f1f5f9',
    padding: '12px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '14px',
    overflowX: 'auto',
  },
  explanation: {
    whiteSpace: 'pre-wrap',
    lineHeight: '1.6',
    fontSize: '15px',
    color: '#2c3e50',
  },
  resetBtn: {
    padding: '10px 22px',
    fontSize: '14px',
    fontWeight: '600',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.2s ease',
  },
};

export default Analyze;
