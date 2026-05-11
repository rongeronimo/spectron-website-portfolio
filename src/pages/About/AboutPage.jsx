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
              imageSrc: "/images/About.png",
              title: "Introduction",
              header: "Ron Cedric B. Geronimo",
              subheader: "Frontend Web Developer / 3D Web Developer",
              content: [
                "Bachelor of Science in Computer Science | Intelligent Systems",
                "De La Salle University - Dasmariñas | 2021-2025 ",
                "I am an aspiring Frontend Web Developer with a strong foundation in core disciplines of frontend web development, including responsive layouts, semantic HTML, CSS architecture, component design, and performance optimization. I also specialize in creating immersive 3D web experiences using modern frontend technologies. I strive to build responsive, interactive interfaces that prioritize performance and user experience.",
                "I develop projects using React, Three.js, HTML, CSS, JavaScript, GSAP, and other frontend technologies. In addition, I have experience in backend development, artificial intelligence, and data science, with proficiency in Python and PHP.",
                "Currently, I am seeking opportunities to enhance my skills further and contribute to projects that push the boundaries of interactive web design. Similarly, I am continuously working towards becoming a developer who values clean code, intuitive design, and meaningful user experiences.",
              ],
              variant: "profile",
              resumeHref: "/Geronimo_Resume.pdf",
            },
            {
              imageSrc: "/images/About2.png",
              content: [
                "Web development is not a one-man job, it requires a collaboration effort to achieve success. That is why, when working in a team, I take an interdependent and active approach, which is contributing ideas while keeping open to feedback and fresh ideas. More importantly, I approach development with a focus on problem-solving, clarity, and continuous improvement. This ensures that each solution I contribute is both efficient and maintainable. When facing challenges such as bugs, tight deadlines, or differing opinions, it is very important for me to remain adaptable and focused on solutions because it allows me to concentrate on resolving issues and keep the team aligned. Through collaboration, I have learned the importance of teamwork, effective communication, and the ability to grow by learning from others' experiences and insights."
              ],
            },
            {
              imageSrc: "/images/About3.png",
              content: [
                "I am exploring 3D web development as a way to build immersive web experiences that blend interactivity with visual storytelling. I aim to design interfaces that go beyond traditional layouts, offering users more engaging and memorable interactions. The use of 3D introduces depth into the browser which includes rotations, zooms, and animations that transform static pages dynamically.",
                "I am particularly inspired by games, cinematic environments, and story-based design, where each element contributes to a larger experience. I combine design and development by creating 3D assets in Blender and integrating them into the web using modern frontend technologies. Through this approach, users feel curious, immersed, and connected to the interface in a more meaningful way. While I have a strong interest in 3D, I remain equally capable of developing clean and responsive traditional interfaces, which adapts my approach based on project needs."
              ],
            },
          ]}
      />
    </>
  );
};

export default AboutPage;
