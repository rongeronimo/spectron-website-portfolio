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
              "This displays a variety of projects that illustrate my abilities in development, design, and problem solving. Each project contains a brief summary, important features, and technology used. You can learn more about them by clicking the GitHub button for the repository/source code or by visiting the project's live website, if one is available. These projects demonstrate my approach to developing interactive, efficient, and user-friendly applications.",
          },
          {
            imageSrc: "/images/Spectron.png",
            title: "Spectron",
            subheader: "React   ·   ThreeJS  ·   GSAP  ·   Zustand   ·   SCSS  ·   Vite",
            content: [
              "Spectron is an interactive 3D web portfolio built using React, Three.js, and GSAP, designed to showcase background, skills, experience, and contact details through an immersive, game-like experience. Users can switch between two different scenes, allowing them to explore the environment from multiple perspectives. Smooth transitions and simple interactions make navigation feel natural and easy to follow. Content is presented through clean and user-friendly panels for better readability and organization. The 3D assets were created and optimized in Blender, ensuring a good balance between visual quality and performance.",
            ],
            buttons: [
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/spectron-website-portfolio",
              },
            ],
          },
          {
            imageSrc: "/images/VietRestaurant.png",
            title: "Nhà Hàng",
            subheader: "React   ·   TypeScript  ·   Next.js  ·   Bootstrap   ·   GLightbox  ·   Swiper",
            content: [
              "A responsive Vietnamese restaurant mock website built with Next.js, React, TypeScript, and Bootstrap, designed to showcase a modern Vietnamese dining experience through an elegant and interactive interface. The project features dedicated sections for the restaurant's menu, specials, events, reviews, gallery, chefs, contact information, and table reservations, with reusable React components and dynamic content handling. Interactive elements such as image galleries, sliders, and lightbox displays were implemented to create a more engaging user experience.",
            ],
            buttons: [
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/vietnamese-restaurant-mock-website",
              },
            ],
          },
          {
            imageSrc: "/images/MythicalAtlas.png",
            title: "Mythical Atlas",
            subheader: "HTML   ·   JavaScript  ·   CSS  ·   GSAP   ·   Scrolltrigger  ·   Lenis   ·   SplitText",
            content: [
              "Mythical Atlas is an interactive frontend concept website developed to showcase modern web development techniques using HTML, CSS, JavaScript, GSAP, ScrollTrigger, Lenis, and SplitText. The project serves as a reusable scroll-driven storytelling template featuring dynamic theme transitions, multilingual text animations, responsive multimedia layouts, and smooth user interactions.",
            ],
            buttons: [
              {
                label: "Website",
                href: "https://mythical-atlas-self.vercel.app/",
              },
              {
                label: "GitHub",
                href: "https://github.com/rongeronimo/mythical-atlas",
              },
            ],
          },
          {
            imageSrc: "/images/EmoWarn.png",
            title: "EmoWarn",
            subheader: "HTML   ·   CSS  ·   Python   ·   Flask",
            content: ["EmoWarn is the first light web application that uses a news article's headline and main content to analyze the probability of it being an article composed for the purpose of spreading misinformation, colloquially known as fake news. It also analyzes the probability of which emotion the reader is likely to feel after reading the article to attempt to warn the user about any emotional biases in the article. The emotions are based on Paul Ekman's basic emotions of Joy, Anger, Fear, Sadness, and Surprise."],
            buttons: [
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
