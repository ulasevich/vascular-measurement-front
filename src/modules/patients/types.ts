export type PatientProps = {
    id: number,
    externalId: string,
    description?: string | null,
    angle_bifurcation?: number | null,
    angle_BCA?: number | null,
    angle_HCA?: number | null,
    diameter_OCA?: number | null,
    diameter_bulb?: number | null,
    diameter_ВСА?: number | null,
    calc_delta_OCA_bulb?: number | null, 
    calc_delta_bulb_ВСА?: number | null,
    calc_delta_OCA_ВСА?: number | null,
    calc_ratio_bulb_ВСА?: number | null,
    classifier?: string | null,
    treatment?: string | null,
    doctor?: string | null,
}

export type PatientsStoreProps = {
    patients: PatientProps[]
    isLoading: boolean,
    error?: unknown,
    currentPatient: PatientProps,
    isCurrentPatientOpen: boolean,
    isCurrentPatientReadOnly: boolean,

    setCurrentPatient: (patient: PatientProps) => void,
    setCurrentPatientOpen: (open: boolean) => void,
    setCurrentPatientReadOnly: (readOnly: boolean) => void,
    addPatient: (
        id: number, 
        externalId: string, 
        description?: string, 
        //fileScan?: string
    ) => void;
    fetchPatients: () => void
}