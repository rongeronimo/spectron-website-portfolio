import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import AboutPage from './pages/About/AboutPage.jsx';
import SkillsPage from './pages/Skills/SkillsPage.jsx';
import ProjectsPage from './pages/Projects/ProjectsPage.jsx';
import ContactsPage from './pages/Contacts/ContactsPage.jsx';
import HomePage from './pages/Home/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="project-experience" element={<ProjectsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

