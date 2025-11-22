import React from 'react'
import { CForm, CFormTextarea, CFormLabel } from '@coreui/react'

const MentalGenerals = () => {
    return (
        <CForm>
            <div className="form-floating mb-3">
                <CFormTextarea
                    id="ment-generals"
                    placeholder="MentalGenerals"
                    style={{ height: '8rem' }}
                />
                <CFormLabel htmlFor="ment-generals">Mental Generals</CFormLabel>
            </div>
        </CForm>
    )
}

export default MentalGenerals