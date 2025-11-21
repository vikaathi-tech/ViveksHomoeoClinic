import React from 'react'
import { CFormInput, CRow, CCol, CInputGroup, CInputGroupText, CForm,CFormTextarea,CFormLabel } from '@coreui/react'

const PhyExamination = () => {
    return (
        <>
            <CForm>
                <CRow className='mb-3'>
                    <CRow className='mb-3'>
                        <CCol md={6}>
                            <CFormInput
                                type="text"
                                id="pe-appearance"
                                floatingClassName="mb-3"
                                floatingLabel="Appearance"
                                placeholder="Appearance"
                            />
                        </CCol>
                        <CCol md={6}>
                            <CFormInput
                                type="text"
                                id="pe-temp"
                                floatingClassName="mb-3"
                                floatingLabel="Temperature"
                                placeholder="Temperature"
                            />
                        </CCol>
                    </CRow>
                    <CRow className='mb-3'>
                        <CCol md={6}>
                            <CFormInput
                                type="text"
                                id="pe-pulse"
                                floatingClassName="mb-3"
                                floatingLabel="Pulse"
                                placeholder="Pulse"
                            />
                        </CCol>
                        <CCol md={6}>
                            <CFormInput
                                type="text"
                                id="pe-chest"
                                floatingClassName="mb-3"
                                floatingLabel="Chest"
                                placeholder="Chest"
                            />
                        </CCol>
                    </CRow>
                    <CRow className='mb-3'>
                        <CCol md={6}>
                            <CFormInput
                                type="text"
                                id="pe-bp"
                                floatingClassName="mb-3"
                                floatingLabel="BP"
                                placeholder="BP"
                            />
                        </CCol>
                        <CCol md={6}>
                            <CFormInput
                                type="text"
                                id="pe-resprate"
                                floatingClassName="mb-3"
                                floatingLabel="Resp.Rate"
                                placeholder="Resp.Rate"
                            />
                        </CCol>
                    </CRow>
                    <CRow className='mb-3'>
                        <CForm>
                            <div className="form-floating mb-3">
                                <CFormTextarea
                                    id="pe-sysexam"
                                    placeholder="Systemic Examination (If Any)"
                                    style={{ height: '8rem' }}
                                />
                                <CFormLabel htmlFor="pe-sysexam">Systemic Examination (If Any)</CFormLabel>
                            </div>
                        </CForm>
                    </CRow>
                </CRow>

            </CForm>
        </>
    )
}

export default PhyExamination