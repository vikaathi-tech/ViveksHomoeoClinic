import React from 'react'
import Prescription from './Prescription'
import { CRow, CForm, CFormTextarea, CFormLabel,CButton,CTable } from '@coreui/react'

const FollowUp = () => {
  const columns = [
            {
                key: 'Date',
                label: 'Date',
                _props: { scope: 'col' },
            },
            {
                key: 'FollowUp',
                label: 'Follow Up',
                _props: { scope: 'col' },
            },
            {
                key: 'Prescription',
                label: 'Prescription',
                _props: { scope: 'col' },
            }
        ]
        const items = [
            {
                Date: '12/12/2025',
                FollowUp: 'First Prescription',
                Prescription:'Prescription',
                _cellProps: { ReportDate: { scope: 'row' } },
            }
        ]
    
    
        return (
            <>
                <CForm>
                  <CRow className='mb-3'>
                        <Prescription></Prescription>
                    </CRow>
                    <CRow className='mb-3'>
                        <CForm>
                            <div className="form-floating mb-3">
                                <CFormTextarea
                                    id="followup"
                                    placeholder="Follow Up"
                                    style={{ height: '8rem' }}
                                />
                                <CFormLabel htmlFor="followup">Follow Up</CFormLabel>
                            </div>
                        </CForm>
                    </CRow>
                    <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }} />
                </CForm>
            </>
        )
}

export default FollowUp