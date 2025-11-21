import React from 'react'
import { CForm,CFormTextarea,CTable,CFormLabel} from '@coreui/react'

const Case = () => {
  const columns = [
        {
          key: 'PastHistory',
          label: 'Past History',
          _props: { scope: 'col' },
        },
        {
          key: 'FamilyHistory',
          label: 'Family History',
          _props: { scope: 'col' },
        },
        {
          key: 'OccupationalHistory',
          label: 'Occupational History',
          _props: { scope: 'col' },
        }
      ]
      const items = [
        {
          PastHistory: 1,
          FamilyHistory: 'Otto',
          OccupationalHistory: '@mdo',
          _cellProps: { PastHistory: { scope: 'row' } }
        },
        {
          PastHistory: 1,
          FamilyHistory: 'Otto',
          OccupationalHistory: '@mdo',
          _cellProps: { PastHistory: { scope: 'row' } }
        },
        {
          PastHistory: 1,
          FamilyHistory: 'Otto',
          OccupationalHistory: '@mdo',
          _cellProps: { PastHistory: { scope: 'row' } }
        }
      ]
  return (
    <CForm>      
      <div className="form-floating mb-3">
      <CFormTextarea
        id="pres-complaints"
        placeholder="Presenting Complaints"
        style={{ height: '8rem' }}
      />
      <CFormLabel htmlFor="presentingcomplaints">Presenting Complaints</CFormLabel>
    </div>
      <CTable className='case-table' columns={columns} items={items} tableHeadProps={{ color: 'dark' }}></CTable>
      
    </CForm>
  )
}

export default Case