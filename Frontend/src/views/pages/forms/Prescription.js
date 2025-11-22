import React from 'react'
import { CRow, CForm, CFormTextarea, CFormLabel } from '@coreui/react'

const Prescription = () => {

    return (
        <>
            <CForm>
                <CRow className='mb-3'>
                    <CForm>
                        <div className="form-floating mb-3">
                            <CFormTextarea
                                id="prescription"
                                placeholder="Prescription"
                                style={{ height: '8rem' }}
                            />
                            <CFormLabel htmlFor="prescription">Prescription</CFormLabel>
                        </div>
                    </CForm>
                </CRow>
            </CForm>
        </>
    )
}

export default Prescription