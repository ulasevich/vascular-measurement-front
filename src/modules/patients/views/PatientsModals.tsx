import React from "react";
import AppModal from "@components/modal/AppModal";
import { usePatientsStore } from "@modules/patients";
import PatientsFormAdd from "@modules/patients/views/form/PatientsFormAdd";
import PatientsFormDetail from "@modules/patients/views/form/PatientsFormDetail";


const PatientsModals = (): React.ReactElement => {
    const currentPatient = usePatientsStore(state => state.currentPatient);
    const isModalPatientAddOpen = usePatientsStore(state => state.isModalPatientAddOpen);
    const isModalPatientDetailOpen = usePatientsStore(state => state.isModalPatientDetailOpen);

    const setModalPatientAddOpen = usePatientsStore(state => state.actions.setModalPatientAddOpen);
    const setModalPatientDetailOpen = usePatientsStore(state => state.actions.setModalPatientDetailOpen);
    
    return (
        <>
            <AppModal
                title={`Новая запись`}
                open={isModalPatientAddOpen}
                handleModalopen={setModalPatientAddOpen}
                maxWidth={"xs"}
            >
                <PatientsFormAdd />
            </AppModal>

            <AppModal
                title={`Пациент (внешний ID: ${currentPatient.externalId})`}
                open={isModalPatientDetailOpen}
                handleModalopen={setModalPatientDetailOpen}
                maxWidth={"xl"}
            >
                <PatientsFormDetail />
            </AppModal>
        </>
    )
}

export default PatientsModals