import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle,CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import { useParams } from "react-router-dom";
import PatientCard from './PatientCard';
import CaseHistory from './CaseHistory';
import PhyExamination from './PhyExamination';
import Investigation from './Investigation';
import Diagnosis from './Diagnosis';
import Prescription from './Prescription';
import FollowUp from './FollowUp';

const CaseDetails = () => {
    const { id } = useParams();
    return (
        <CTabs defaultActiveItemKey={1}>
            <CTabList className='form-tabs' variant="tabs" layout="justified">
                <CTab aria-controls="details-tab-pane" itemKey={1}>Details</CTab>
                <CTab aria-controls="case-tab-pane" itemKey={2}>Case History</CTab>
                <CTab aria-controls="phyexam-tab-pane" itemKey={3}>Physical Examination</CTab>
                <CTab aria-controls="investigation-tab-pane" itemKey={4}>Investigation</CTab>
                <CTab aria-controls="diagnosis-tab-pane" itemKey={5}>Diagnosis</CTab>
                <CTab aria-controls="prescription-tab-pane" itemKey={6}>Prescription & Follow Up</CTab>
            </CTabList>
            <CTabContent>
                <CTabPanel className="py-3" aria-labelledby="details-tab-pane" itemKey={1}>
                    <PatientCard></PatientCard>
                </CTabPanel>
                <CTabPanel className="py-3" aria-labelledby="case-tab-pane" itemKey={2}>
                    <CaseHistory></CaseHistory>
                </CTabPanel>
                <CTabPanel className="py-3" aria-labelledby="phyexam-tab-pane" itemKey={3}>
                    <PhyExamination></PhyExamination>
                </CTabPanel>
                <CTabPanel className="py-3" aria-labelledby="investigation-tab-pane" itemKey={4}>
                    <Investigation></Investigation>
                </CTabPanel>
                <CTabPanel className="py-3" aria-labelledby="diagnosis-tab-pane" itemKey={5}>
                    <Diagnosis></Diagnosis>
                </CTabPanel>
                <CTabPanel className="py-3" aria-labelledby="prescr-followup-tab-pane" itemKey={6}>
                    <FollowUp></FollowUp>
                </CTabPanel>
            </CTabContent>
        </CTabs>
    )
}

export default CaseDetails