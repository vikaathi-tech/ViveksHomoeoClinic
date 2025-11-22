import React from 'react'
import { CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CInputGroup, CInputGroupText, CRow, CFormFloating, CButton } from '@coreui/react'
import PatientCard from './PatientCard'

const VitalsForm = () => {
  return (

    <CForm>
      <CRow className='mb-3'>
        <CCol md={6}>
          <PatientCard />
        </CCol>
        <CCol md={6}>
          <CRow className='mb-3'>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput                  
                  placeholder="Body Weight"
                />
                <CInputGroupText>Kg</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  placeholder="Body Temperature"
                />
                <CInputGroupText>°F</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  placeholder="Blood Pressure - Sys"
                />
                <CInputGroupText>mmHg</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  placeholder="Blood Pressure - Dia"
                />
                <CInputGroupText>mmHg</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  placeholder="Blood Sugar"
                />
                <CInputGroupText>mg/dL</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  placeholder="Pulse"
                />
                <CInputGroupText>bpm</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
        </CCol>
      </CRow>

    </CForm>
  )
}

export default VitalsForm