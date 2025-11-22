import React from 'react'
import { CForm, CFormTextarea, CFormLabel } from '@coreui/react'

const ObstetricalHistory = () => {
    return (
        <CForm>
            <div className="form-floating mb-3">
                <CFormTextarea
                    id="obs-history"
                    placeholder="Obstetrical History"
                    style={{ height: '8rem' }}
                />
                <CFormLabel htmlFor="obs-history">Obstetrical History</CFormLabel>
            </div>
        </CForm>
    )
}

export default ObstetricalHistory