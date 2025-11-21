import React from 'react'
import Case from './Case'
import { CTabs,CTabList,CTabPanel,CTabContent,CTab } from '@coreui/react'
import MensturalHistory from './MensturalHistory'
import ObstetricalHistory from './ObstetricalHistory'
import MentalGenerals from './MentalGenerals'
import PhysicalGenerals from './PhysicalGenarals'

const CaseHistory = () => {   
  return (
          <CTabs defaultActiveItemKey={1}>
              <CTabList className='casehistory-tabs' variant="tabs" layout="justified">
                  <CTab aria-controls="case-tab-pane" itemKey={1}>Case</CTab>
                  <CTab aria-controls="mensturalhistory-tab-pane" itemKey={2}>Menstural History</CTab>
                  <CTab aria-controls="obstetricalhistory-tab-pane" itemKey={3}>Obstetrical History</CTab>
                  <CTab aria-controls="physicalgenerals-tab-pane" itemKey={4}>Physical Generals</CTab>
                  <CTab aria-controls="mentalgenerals-tab-pane" itemKey={5}>Mental Generals</CTab>
              </CTabList>
              <CTabContent>
                  <CTabPanel className="py-3" aria-labelledby="case-tab-pane" itemKey={1}>
                      <Case></Case>
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="mensturalhistory-tab-pane" itemKey={2}>
                     <MensturalHistory></MensturalHistory>
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="obstetricalhistory-tab-pane" itemKey={3}>
                      <ObstetricalHistory></ObstetricalHistory>
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="physicalgenerals-tab-pane" itemKey={4}>
                      <PhysicalGenerals></PhysicalGenerals>
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="mentalgenerals-tab-pane" itemKey={5}>
                      <MentalGenerals></MentalGenerals>
                  </CTabPanel>                 
              </CTabContent>
          </CTabs>
      )
}

export default CaseHistory