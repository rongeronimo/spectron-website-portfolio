import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

import { useUiStore } from "../../stores/uiStore";

export default function Model(props) {
  const { openPanel } = useUiStore();
  const { nodes } = useGLTF("/models/darktargets.glb");

  // --- Delay visibility of pulsing circles ---
  const [showPulses, setShowPulses] = useState(false);

  // Refs for pulse groups
  const aboutPulseRef = useRef();
  const skillsPulseRef = useRef();
  const projectsPulseRef = useRef();
  const contactsPulseRef = useRef();

  // Fade-in each group one after another after 15s delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulses(true);

      const pulseGroups = [
        aboutPulseRef,
        skillsPulseRef,
        projectsPulseRef,
        contactsPulseRef,
      ];

      pulseGroups.forEach((ref, i) => {
        if (!ref.current) return;

        // Make visible after a short stagger delay
        setTimeout(() => {
          ref.current.visible = true;
          ref.current.scale.set(0.5, 0.5, 0.5);
          ref.current.children.forEach((ring) => {
            ring.material.opacity = 0;
          });

          // Fade + scale animation
          gsap.to(ref.current.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1.2,
            ease: "power2.out",
          });

          gsap.to(ref.current.children.map((r) => r.material), {
            opacity: 0.15,
            duration: 1.5,
            ease: "power2.out",
          });
        }, i * 1000); // stagger each group by 1s
      });
    }, 15000); // wait 15 seconds before starting the sequence

    return () => clearTimeout(timer);
  }, []);

  // Base materials
  const whiteMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0,
    transparent: false,
    opacity: 1,
  });

  // Helper to create unique pulse materials (prevents shared fade bug)
  const createPulseMaterial = () =>
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

  // Animation refs
  const aboutAnimRef = useRef();
  const skillsAnimRef = useRef();
  const projectsAnimRef = useRef();
  const contactsAnimRef = useRef();

  // Hover tracking
  const hoverState = useRef({
    about: false,
    skills: false,
    projects: false,
    contacts: false,
  });

  // Once faded, don't reappear
  const fadedState = useRef({
    about: false,
    skills: false,
    projects: false,
    contacts: false,
  });

  // Pulse animation loop
  useFrame(({ clock }) => {
    if (!showPulses) return;

    const t = clock.elapsedTime * 2;
    const pulseRefs = [
      { ref: aboutPulseRef, key: "about" },
      { ref: skillsPulseRef, key: "skills" },
      { ref: projectsPulseRef, key: "projects" },
      { ref: contactsPulseRef, key: "contacts" },
    ];

    pulseRefs.forEach(({ ref, key }) => {
      if (!ref.current || fadedState.current[key]) return;
      if (!hoverState.current[key]) {
        ref.current.children.forEach((ring, i) => {
          const delay = i * 0.5;
          const wave = (Math.sin(t - delay) + 1) / 2;
          const scale = 1 + wave * 0.3;
          const opacity = 0.1 + (1 - wave) * 0.1;
          ring.scale.set(scale, scale, scale);
          ring.material.opacity = opacity;
        });
      }
    });
  });

  // Animation group mapping
  const animationPairs = {
    Workstation_Hitbox: { ref: aboutAnimRef, pulse: aboutPulseRef, key: "about" },
    Skills_Hitbox: { ref: skillsAnimRef, pulse: skillsPulseRef, key: "skills" },
    Projects_Hitbox: { ref: projectsAnimRef, pulse: projectsPulseRef, key: "projects" },
    Contacts_Hitbox: { ref: contactsAnimRef, pulse: contactsPulseRef, key: "contacts" },
  };

  // Hover scaling — also fades out pulse circles permanently
  const onHover = (key, isHovering) => {
    const animObject = animationPairs[key];
    if (!animObject?.ref.current) return;

    // Scale animation
    gsap.to(animObject.ref.current.scale, {
      x: isHovering ? 1 : 0,
      y: isHovering ? 1 : 0,
      z: isHovering ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Fade out pulse when scaling in (once only)
    if (isHovering && !fadedState.current[animObject.key]) {
      const pulseGroup = animObject.pulse.current;
      if (pulseGroup) {
        fadedState.current[animObject.key] = true;

        pulseGroup.children.forEach((ring) => {
          gsap.to(ring.material, {
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          });
        });

        gsap.to(pulseGroup.scale, {
          x: 0.8,
          y: 0.8,
          z: 0.8,
          duration: 1.2,
          ease: "power2.out",
          onComplete: () => {
            pulseGroup.visible = false;
          },
        });
      }
    }
  };

  return (
    <group {...props} dispose={null}>
      {/* --- Workstation --- */}
      <mesh
        geometry={nodes.Workstation_Hitbox.geometry}
        material={nodes.Workstation_Hitbox.material}
        visible={false}
        position={[0.956, 0.76, 0.955]}
        scale={[0.951, 0.538, 0.951]}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
          hoverState.current.about = true;
          onHover("Workstation_Hitbox", true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
          hoverState.current.about = false;
          onHover("Workstation_Hitbox", false);
        }}
        onClick={() => openPanel("Workstation_Hitbox")}
      />
      <mesh
        ref={aboutAnimRef}
        geometry={nodes.Workstation_Hitbox_Anim.geometry}
        material={whiteMaterial}
        position={[0.956, 0.76, 0.955]}
        scale={[0, 0, 0]}
      />
      <group
        ref={aboutPulseRef}
        visible={false}
        position={[1.545, 0.99, 1.55]}
        rotation={[0, Math.PI / 4, 0]}
      >
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} material={createPulseMaterial()}>
            <circleGeometry args={[0.03 + i * 0.05, 64]} />
          </mesh>
        ))}
      </group>

      {/* --- Skills --- */}
      <mesh
        geometry={nodes.Skills_Hitbox.geometry}
        material={nodes.Skills_Hitbox.material}
        visible={false}
        position={[1.595, 1.828, -2.211]}
        scale={[0.63, 0.895, 0.1]}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
          hoverState.current.skills = true;
          onHover("Skills_Hitbox", true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
          hoverState.current.skills = false;
          onHover("Skills_Hitbox", false);
        }}
        onClick={() => openPanel("Skills_Hitbox")}
      />
      <mesh
        ref={skillsAnimRef}
        geometry={nodes.Skills_Hitbox_Anim.geometry}
        material={whiteMaterial}
        position={[1.595, 1.828, -2.293]}
        scale={[0, 0, 0]}
      />
      <group
        ref={skillsPulseRef}
        visible={false}
        position={[1.715, 1.688, -2.160]}
        rotation={[0, Math.PI / 4, 0]}
      >
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} material={createPulseMaterial()}>
            <circleGeometry args={[0.03 + i * 0.05, 64]} />
          </mesh>
        ))}
      </group>

      {/* --- Projects --- */}
      <mesh
        geometry={nodes.Projects_Hitbox.geometry}
        material={nodes.Projects_Hitbox.material}
        visible={false}
        position={[-1.428, 1.828, -2.211]}
        scale={[0.63, 0.895, 0.1]}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
          hoverState.current.projects = true;
          onHover("Projects_Hitbox", true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
          hoverState.current.projects = false;
          onHover("Projects_Hitbox", false);
        }}
        onClick={() => openPanel("Projects_Hitbox")}
      />
      <mesh
        ref={projectsAnimRef}
        geometry={nodes.Projects_Hitbox_Anim.geometry}
        material={whiteMaterial}
        position={[-1.429, 1.828, -2.225]}
        scale={[0, 0, 0]}
      />
      <group
        ref={projectsPulseRef}
        visible={false}
        position={[-1.200, 1.688, -2.160]}
        rotation={[0, Math.PI / 4, 0]}
      >
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} material={createPulseMaterial()}>
            <circleGeometry args={[0.03 + i * 0.05, 64]} />
          </mesh>
        ))}
      </group>

      {/* --- Contacts --- */}
      <mesh
        geometry={nodes.Contacts_Hitbox.geometry}
        material={nodes.Contacts_Hitbox.material}
        visible={false}
        position={[-1.776, 0.507, -0.592]}
        scale={[0.396, 0.298, 0.413]}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
          hoverState.current.contacts = true;
          onHover("Contacts_Hitbox", true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
          hoverState.current.contacts = false;
          onHover("Contacts_Hitbox", false);
        }}
        onClick={() => openPanel("Contacts_Hitbox")}
      />
      <mesh
        ref={contactsAnimRef}
        geometry={nodes.Cube.geometry}
        material={whiteMaterial}
        position={[-1.776, 0.507, -0.592]}
        scale={[0, 0, 0]}
      />
      <group
        ref={contactsPulseRef}
        visible={false}
        position={[-1.476, 0.720, -0.270]}
        rotation={[0, Math.PI / 4, 0]}
      >
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} material={createPulseMaterial()}>
            <circleGeometry args={[0.03 + i * 0.05, 64]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

useGLTF.preload("/models/darktargets.glb");
