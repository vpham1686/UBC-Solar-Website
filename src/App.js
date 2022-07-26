import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ProjectPage from "./components/ProjectPage";
import CompetitionPage from "./components/CompetitionPage";
import TeamRolePage from "./components/TeamRolePage";
import RecruitmentPage from "./components/JoinUsPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/competitions" element={<CompetitionPage />} />
        <Route path="/team-roles" element={<TeamRolePage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        {/* Should create an error page (Something simple like an image or something) for any invalid routes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );

}

export default App;
