// AboutPage.jsx
import React from "react";
import PagewithSidePanel from "../PagewithSidePanel.jsx";

const AboutPage = () => {
  return (
    <>
      <div className="title"></div>
      <PagewithSidePanel
        sections={[
            {
              imageSrc: "/src/images/About.png",
              title: "Introduction",
              header: "Ron Cedric B. Geronimo",
              subheader: "Frontend Developer / 3D Web Developer",
              content: [
                "Bachelor of Science in Computer Science | Intelligent Systems",
                "De La Salle University - Dasmariñas | 2021-2025 ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ],
              variant: "profile",
              resumeHref: "/src/data/GeronimoRon_JobResume.pdf",
            },
          ]}
      />
    </>
  );
};

export default AboutPage;
