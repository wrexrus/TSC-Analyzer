// cd client -> npm run start

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './Home';
import Learn from './components/Learn';
import Analyze from './components/Analyze';
import Chatbot from './components/Chatbot';
function App() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div style={styles.wrapper}>
      <Navbar onBotClick={() => setChatOpen(true)} />
      <Home />
      <Learn />
      <Analyze />
      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '60px',  
  },
};

export default App;
