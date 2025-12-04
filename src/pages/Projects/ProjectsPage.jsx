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
            content: ["EmoWarn is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
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
            content: ["Flow is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
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
            content: ["This prototype is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
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
            content: ["This prototype is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
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
            content: ["This prototype is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
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
