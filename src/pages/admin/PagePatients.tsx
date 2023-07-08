

import PageWrapper from "@components/page/PageWrapper";
import PatientsHeading from "@modules/patients/views/PatientsHeading";
import PatientsTable from "@modules/patients/views/PatientsTable";
import PatientsModals from "@modules/patients/views/PatientsModals";


const PagePatients = () => {
    return (
        <PageWrapper title="Реестр пациентов">
            
            <PatientsHeading />
            <PatientsTable />
            <PatientsModals />

        </PageWrapper>
    )
}

export default PagePatients