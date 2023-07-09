export type NewPatientProps = {
    externalId: string,
    description: string,
    fileScan?: object
}

export type PatientProps = NewPatientProps & {
    id: number,
    angle_bifurcation?: number,
    angle_BCA?: number,
    angle_HCA?: number,
    diameter_OCA?: number,
    diameter_bulb?: number,
    diameter_ВСА?: number,
    calc_delta_OCA_bulb?: number, 
    calc_delta_bulb_ВСА?: number,
    calc_delta_OCA_ВСА?: number,
    calc_ratio_bulb_ВСА?: number,
    classifier?: string,
    treatment?: string,
    doctor?: string,
};

export type PatientsStoreProps = {
    patients: PatientProps[]
    isLoading: boolean,
    errors?: unknown,
    newPatient: NewPatientProps,
    currentPatient: PatientProps,
    isCurrentPatientReadOnly: boolean,
    isModalPatientAddOpen: boolean,
    isModalPatientDetailOpen: boolean,
    
    actions: {
        setCurrentPatient: (patient: PatientProps) => void,

        setCurrentPatientReadOnly: (readOnly: boolean) => void,

        setModalPatientAddOpen: (open: boolean) => void,

        setModalPatientDetailOpen: (open: boolean) => void,

        fetchPatients: () => void,

        addPatient: ( newPatient: NewPatientProps ) => void,

        updatePatient: ( patient: PatientProps ) => void,
    }
};