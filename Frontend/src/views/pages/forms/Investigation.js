import React from 'react'
import { CButton, CRow, CTable, CInputGroup, CInputGroupText, CForm, CFormTextarea, CFormLabel } from '@coreui/react'


const Investigation = () => {

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
            Reports: (
                <CButton size="sm" color="primary">
                    Download
                </CButton>
            ),
            _cellProps: { ReportDate: { scope: 'row' } },
        }
    ]


    return (
        <>
            <CForm>
                <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }} />
                <CRow className='mb-3'>
                    <CForm>
                        <div className="form-floating mb-3">
                            <CFormTextarea
                                id="investigation"
                                placeholder="investigation"
                                style={{ height: '8rem' }}
                            />
                            <CFormLabel htmlFor="investigation">Investigation</CFormLabel>
                        </div>
                    </CForm>
                </CRow>

            </CForm>
        </>
    )
}

export default Investigation