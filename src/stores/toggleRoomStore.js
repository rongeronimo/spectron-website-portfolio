import { create } from 'zustand'

export const useToggleRoomStore = create((set) => ({
    isDarkRoom: true,
    panelContent: null,

    setDarkRoom: (booleanValue) => 
        set ({
            isDarkRoom: booleanValue,
        }),


}));