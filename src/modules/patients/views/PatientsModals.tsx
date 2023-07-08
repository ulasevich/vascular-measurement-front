import React from "react";
import AppModal from "@components/modal/AppModal";
import { usePatientsStore } from "@modules/patients";
import PatientsFormDetail from "@modules/patients/views/form/PatientsFormDetail";


const PatientsModals = (): React.ReactElement => {
    const currentPatient = usePatientsStore(state => state.currentPatient);
    const isCurrentPatientOpen = usePatientsStore(state => state.isCurrentPatientOpen);

    const setCurrentPatientOpen = usePatientsStore(state => state.setCurrentPatientOpen);
    
    return (
        <AppModal
            title={`Пациент (внешний ID: ${currentPatient.externalId})`}
            open={isCurrentPatientOpen}
            handleModalopen={setCurrentPatientOpen}
            maxWidth={"xl"}
        >
            <PatientsFormDetail />
        </AppModal>

    )
}

export default PatientsModals