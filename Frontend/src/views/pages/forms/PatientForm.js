import React from 'react'
import { CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CInputGroup, CInputGroupText, CRow } from '@coreui/react'
import PatientCard from './PatientCard'

const PatientForm = () => {
  return (

    <CForm>
      <CRow className='mb-3'>
        <CCol md={3}>
          <CFormInput
            type="email"
            id="floatingInput"
            floatingClassName="mb-3"
            floatingLabel="Search By Name / OP No"
            placeholder="name@example.com"
          />
        </CCol>cd
      </CRow>
      <CRow className='mb-3'>
        <CCol md={3}>
          <PatientCard />
        </CCol>
        <CCol md={9}>
          <CRow className='mb-3'>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  floatingClassName="mb-3"
                  floatingLabel="Body Weight"
                  placeholder="Body Weight"
                />
                <CInputGroupText>Kg</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  floatingClassName="mb-3"
                  floatingLabel="Blood Pressure"
                  placeholder="BP"
                />
                <CInputGroupText>mmHg</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  floatingClassName="mb-3"
                  floatingLabel="Pulse"
                  placeholder="Pulse"
                />
                <CInputGroupText>bpm</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  floatingClassName="mb-3"
                  floatingLabel="Body Temperature"
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
                  floatingClassName="mb-3"
                  floatingLabel="Blood Sugar"
                  placeholder="Blood Sugar"
                />
                <CInputGroupText>mg/dL</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup>
                <CFormInput
                  floatingClassName="mb-3"
                  floatingLabel="Weight"
                  placeholder="Weight"
                />
                <CInputGroupText>Kg</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
        </CCol>
      </CRow>

    </CForm>
  )
}

export default PatientForm