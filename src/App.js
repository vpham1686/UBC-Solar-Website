import { React, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import ProjectPage from "./components/ProjectPage";

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //Bug Inquiries
  const [contact, setContact] = useState(true);
  function contacts() {
    if (contact) {
      console.log('Hello world! Oh- you found us! We are the developers of this website. Please contact Victordkpham888@gmail.com || Markdeguzman204@gmail.com for any inquiries or bugs on the website.');
      setContact(false);
    }
  }

  return (
    <Routes>
      {/* Bug Inquiries */}
      {contacts()}
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectPage />} />
      {/* Should create an error page (Something simple like an image or something) for any invalid routes */}
      <Route path="*" element={<Home />} />
    </Routes>
  );

}

export default App;
