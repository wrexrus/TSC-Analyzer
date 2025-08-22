const handleAnalyze = async () => {
  try {
    const response = await fetch("http://localhost:5000/analyze", {
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
