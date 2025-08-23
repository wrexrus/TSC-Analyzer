const handleAnalyze = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

    const data = await response.json();
    setAnalysis(data); // Save {time, space, summary}
  } catch (err) {
    console.error("Error:", err);
  }
};
