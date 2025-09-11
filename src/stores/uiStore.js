import { create } from 'zustand'
import panelContent from "../data/panelContent.json";

export const useUiStore = create((set) => ({
    isPanelOpen: false,
    panelContent: null,

    openPanel:(hitboxkey) => 
        set ({
            isPanelOpen: true,
            panelContent: panelContent[hitboxkey]
        }),

    closePanel:() => 
        set ({
            isPanelOpen: false,
        }),
}));