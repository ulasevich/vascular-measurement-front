import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//import { appDevtools } from "@utils/development";
import type { PatientsStoreProps, PatientProps, NewPatientProps } from "./types";


let testId:number = 125137;


// благодаря immer можно использовать push вместо разворачивания всего state
export const usePatientsStore = create<PatientsStoreProps>()(devtools(immer((set, get) => ({
    patients: [],
    isLoading: false,
    errors: "",
    newPatient: {
        externalId: "",
        description: "",
        angle_bifurcation: "",
        angle_BCA: "",
        angle_HCA: "",
        diameter_OCA: "",
        diameter_bulb: "",
        diameter_ВСА: "",
        calc_delta_OCA_bulb: "", 
        calc_delta_bulb_ВСА: "",
        calc_delta_OCA_ВСА: "",
        calc_ratio_bulb_ВСА: "",
        classifier: "",
        treatment: "",
        doctor: "",
    },
    currentPatient: {
        id: 0,
        externalId: "",
        description: "",
    },
    isCurrentPatientReadOnly: false,
    isModalPatientAddOpen: false,
    isModalPatientDetailOpen: false,

    actions: {
        setCurrentPatient: (patient: PatientProps) => {
            console.log(patient);
            set({currentPatient: patient});
        },
    
        setCurrentPatientReadOnly: (readOnly: boolean) => {
            set({isCurrentPatientReadOnly: readOnly});
        },

        setModalPatientAddOpen: (open: boolean) => {
            set({isModalPatientAddOpen: open});
        },

        setModalPatientDetailOpen: (open: boolean) => {
            set({isModalPatientDetailOpen: open});
        },

        fetchPatients: async () => {
            set({ isLoading: true });
            try {
                const result = await fetch('/data/testPatients.json');
                const json = await result.json() as PatientProps[];
                set({ patients: json });
            } catch(e) {
                set({ errors: e.message });
                console.log(e);
            } finally {
                set({ isLoading: false });
            }
        },

        addPatient: (newPatient: NewPatientProps) => {
            set((state) => {
                state.patients.push({id: testId++, ...newPatient}); // добавили нового
            });
            get().actions.setCurrentPatient(get().patients[get().patients.length - 1]); // и сразу на него переключаемся
        },

        updatePatient: (updatedPatient: PatientProps) => {
            const update = get().patients.map(patient => {
                return patient.id === updatedPatient.id ? updatedPatient : patient
            });
            set({ patients: update });
        }
    }

}))));

