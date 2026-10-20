import { useCallback, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import SkillsSection from './components/SkillsSection/SkillsSection.jsx';
import ExperienceSection from './components/ExperienceSection/ExperienceSection.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import ChatWidget from './components/ChatWidget/ChatWidget.jsx';

/**
 * App is the page-level composition component.
 * Individual sections live in their own folders so layout, markup, and styles
 * can be maintained independently without turning this file into a large page.
 */
export default function App() {
  const [chatPrompt, setChatPrompt] = useState('');

  // A project card can ask the shared chatbot to open with a project-specific prompt.
  const askAboutProject = useCallback((prompt) => setChatPrompt(prompt), []);
  const clearChatPrompt = useCallback(() => setChatPrompt(''), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection onAskAboutProject={askAboutProject} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection onAskAboutProject={askAboutProject} />
      </main>
      <Footer />
      <ChatWidget
        initialPrompt={chatPrompt}
        onPromptConsumed={clearChatPrompt}
      />
    </>
  );
}
