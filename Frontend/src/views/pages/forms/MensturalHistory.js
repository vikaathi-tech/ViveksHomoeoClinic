import React from 'react'
import { CFormInput, CRow, CCol, CInputGroup, CInputGroupText, CForm } from '@coreui/react'

const MensturalHistory = () => {
  return (
    <>
      <CForm>
        <CRow className='mb-3'>

          <CRow className='mb-3'>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="mh-lmp"
                floatingClassName="mb-3"
                floatingLabel="LMP"
                placeholder="LMP"
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="mh-duration"
                floatingClassName="mb-3"
                floatingLabel="Duration"
                placeholder="Duration"
              />
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="mh-flow"
                floatingClassName="mb-3"
                floatingLabel="Flow"
                placeholder="Flow"
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="mh-clots"
                floatingClassName="mb-3"
                floatingLabel="Clots"
                placeholder="Clots"
              />
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="mh-cycle"
                floatingClassName="mb-3"
                floatingLabel="Cycle"
                placeholder="Cycle"
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="mh-others"
                floatingClassName="mb-3"
                floatingLabel="Others"
                placeholder="Others"
              />
            </CCol>
          </CRow>
        </CRow>

      </CForm>
    </>
  )
}

export default MensturalHistory