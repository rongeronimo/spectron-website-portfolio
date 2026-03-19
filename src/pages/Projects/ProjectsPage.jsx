// ProjectExperiencePage.jsx
import React from "react";
import PagewithSidePanel from "../PagewithSidePanel.jsx";

const ProjectsPage = () => {
  return (
    <>
      <div className="title"></div>
      <PagewithSidePanel
        sections={[
          {
            imageSrc: "/images/Projects.png",
            title: "Project Experience",
            content:
              "My projects are orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            imageSrc: "/images/Spectron.png",
            title: "Spectron",
            subheader: "React   ·   ThreeJS  ·   GSAP  ·   Zustand   ·   SCSS  ·   Vite",
            content: [
              "Spectron is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ],
            buttons: [
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/spectron-website-portfolio",
              },
            ],
          },
          {
            imageSrc: "/images/EmoWarn.png",
            title: "EmoWarn",
            subheader: "HTML   ·   CSS  ·   Python   ·   Flask",
            content: ["EmoWarn is a light web application that uses a news article's headline and main content to analyze the probability of it being an article composed for the purpose of spreading misinformation, colloquially known as fake news. It also analyzes the probability of which emotion the reader is likely to feel after reading the article to attempt to warn the user about any emotional biases in the article. The emotions are based on Paul Ekman's basic emotions of Joy, Anger, Fear, Sadness, and Surprise."],
            buttons: [
              {
                label: "Website",
                href: "https://emowarn.pythonanywhere.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/EmoWarnV2",
              },
            ],
          },
          {
            imageSrc: "/images/FlowKanban.png",
            title: "Flow",
            subheader: "HTML   ·   Javascript   ·   CSS",
            content: ["Flow is a simple kanban board application to organize your to-dos and track your progress. With flow, you can add, delete, and update your to-dos and categorize them between to-do, ongoing, and done by moving them across each provided column."],
            buttons: [
              {
                label: "Website",
                href: "https://jakeolase.github.io/flow-kanban/",
              },
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/flow-kanban",
              },
            ],
          },
          {
            imageSrc: "/images/Cifake.png",
            title: "AI Image Detector",
            subheader: "Python   ·   Tensorflow   ·   OpenCV",
            content: ["This project developed an attention-based convolutional neural network (CNN) to classify real versus AI-generated synthetic images using the CIFAKE dataset. The model learns to focus on subtle visual artifacts indicative of synthetic image generation, improving classification performance."],
            buttons: [
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/acnn-cifake-app",
              },
            ],
          },
          {
            imageSrc: "/images/RegexWizard.png",
            title: "RegEx Wizard",
            subheader: "HTML   ·   Javascript   ·   CSS   ·   Python",
            content: ["RegEx Wizard is an interactive educational website/tool for validating strings using Regular Expressions and simulating Deterministic Finite Automata (DFA). It visualizes state transitions to explain why a string is accepted or rejected and can generate corresponding Context-Free Grammars (CFG) and Pushdown Automata (PDA) structures. "],
            buttons: [
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/regex-wizard-webapp",
              },
            ],
          },
          {
            imageSrc: "/images/Emoculus.png",
            title: "Emoculus",
            subheader: "Python   ·   DeepFace  ·   OpenCV   ·   Dlib",
            content: ["This prototype is a real-time driver emotion recognition system designed to improve road safety by detecting emotionally compromised driving states such as stress, anger, fatigue, and drowsiness. The system analyzes live facial expressions using computer vision and deep learning techniques to identify risky emotional conditions that may affect driving performance."],
            buttons: [
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/Emoculus",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ProjectsPage;
