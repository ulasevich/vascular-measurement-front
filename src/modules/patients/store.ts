import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//import { appDevtools } from "@utils/development";
import type { PatientsStoreProps, PatientProps } from "./types";


let testId:number = 125137;


export const usePatientsStore = create<PatientsStoreProps>()(devtools(immer(set => ({
    patients: [],
    isLoading: false,
    errors: null,
    currentPatient: {
        id: 0,
        externalId: ""
    },
    isCurrentPatientOpen: false,
    isCurrentPatientReadOnly: false,

    setCurrentPatient: (patient: PatientProps) => {
        set({currentPatient: patient});
    },

    setCurrentPatientOpen: (open: boolean) => {
        set({isCurrentPatientOpen: open});
    },

    setCurrentPatientReadOnly: (readOnly: boolean) => {
        set({isCurrentPatientReadOnly: readOnly});
    },

    addPatient: (
        id: number, 
        externalId: string, 
        description?: string
        //fileScan?: string
    ) => set((state: PatientsStoreProps) => {
        state.patients.push({id: testId++, externalId, description}); // благодаря immer можно использовать push вместо разворачивания всего state
    }),

    fetchPatients: async () => {
        set({ isLoading: true });
        try {
            const result = await fetch('/data/testPatients.json');
            const json = await result.json() as PatientProps[];
            set({ patients: json });
        } catch(e) {
            set({ error: e.message });
            console.log(e);
        } finally {
            set({ isLoading: false });
        }
    }
}))));

