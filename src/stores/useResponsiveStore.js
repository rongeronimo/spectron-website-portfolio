import { create } from 'zustand';

export const useResponsiveStore = create((set) => ({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,

    // Breakpoints
    isMobile: window.innerWidth <= 768,
    isLaptop: window.innerWidth > 768 && window.innerWidth <= 1600,

    updateDimensions: () =>
        set({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,

            isMobile: window.innerWidth <= 768,
            isLaptop: window.innerWidth > 768 && window.innerWidth <= 1600,
        }),
}));