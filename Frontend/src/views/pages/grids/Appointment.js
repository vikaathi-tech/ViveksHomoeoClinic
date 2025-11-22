import React from 'react'
import { CTable, CButton } from '@coreui/react'

const Appointment = () => {
  const columns = [
    {
      key: 'Date',
      label: 'Date',
      _props: { scope: 'col' },
    },
    {
      key: 'PatientName',
      label: 'Patient Name',
      _props: { scope: 'col' },
    },
    {
      key: 'ConsultingDoctor',
      label: 'Consulting Doctor',
      _props: { scope: 'col' },
    },
    {
      key: 'Time',
      label: (
        <div className="d-flex justify-content-between align-items-center">
          <span>Time</span>
          <CButton color="primary" size="sm">
            Add
          </CButton>
        </div>
      ),
      _props: { scope: 'col' },
    }
  ]
  const items = [
    {
      Date: '21/11/2025',
      PatientName: 'Mark',
      ConsultingDoctor: 'Otto',
      Time: '4.50 pm',
      _cellProps: { id: { scope: 'row' } },
    }
  ]

  return <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }} />
}

export default Appointment