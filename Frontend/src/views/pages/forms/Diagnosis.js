import React from 'react'
import { CRow, CTable, CInputGroup, CInputGroupText, CForm, CFormTextarea, CFormLabel } from '@coreui/react'

const Diagnosis = () => {
    const columns = [
        {
            key: 'ReportDate',
            label: 'Report Date',
            _props: { scope: 'col' },
        },
        {
            key: 'Reports',
            label: 'Reports',
            _props: { scope: 'col' },
        }
    ]
    const items = [
        {
            ReportDate: '12/12/2025',
            Reports:  '12/12/2025',
            _cellProps: { ReportDate: { scope: 'row' } },
        }
    ]
    return (
        <>
            <CForm>
                <CRow className='mb-3'>
                    <CForm>
                        <div className="form-floating mb-3">
                            <CFormTextarea
                                id="planoftrtmt"
                                placeholder="Plan of Treatment"
                                style={{ height: '8rem' }}
                            />
                            <CFormLabel htmlFor="planoftrtmt">Plan of Treatment</CFormLabel>
                        </div>
                    </CForm>
                </CRow>
                <CRow className='mb-3'>
                    <CForm>
                        <div className="form-floating mb-3">
                            <CFormTextarea
                                id="basisofsel"
                                placeholder="Basis of Selection"
                                style={{ height: '8rem' }}
                            />
                            <CFormLabel htmlFor="basisofsel">Basis of Selection of Medicine & Potency</CFormLabel>
                        </div>
                    </CForm>
                </CRow>

            </CForm>
        </>
    )
}

export default Diagnosis