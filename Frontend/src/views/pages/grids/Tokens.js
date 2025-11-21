import React from 'react'
import { CTable,CButton } from '@coreui/react'
import { useNavigate } from "react-router-dom";

const Tokens = () => {

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/forms/CaseDetails/${id}`);      // Navigate with ID
  };
  const columns = [
    {
      key: 'TokenNo',
      label: 'Token Number',
      _props: { scope: 'col' },
    },
    {
      key: 'OPNumber',
      label: 'OP Number',
      _props: { scope: 'col' },
    },
    
    {
      key: 'EntryTime',
      label: 'Entry Time',
      _props: { scope: 'col' },
    },
    {
      key: 'PatientName',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'LastVisit',
      label: 'Last Visit',
      _props: { scope: 'col' },
    },
    {
      key: 'Action',
      label: '',
      _props: { scope: 'col' },
    }
  ]
  const items = [
    {
      TokenNo: 1,
      OPNumber:123,
      EntryTime: 'Otto',
      PatientName: '@mdo',
      LastVisit: '@mdo',
      Action: (
              <CButton size="sm" color="primary"  onClick={() => handleRowClick(1)}>
                Case Details
              </CButton>
            ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      TokenNo: 1,
      OPNumber:123,
      EntryTime: 'Otto',
      PatientName: '@mdo',
      LastVisit: '@mdo',
      Action: (
              <CButton size="sm" color="primary"  onClick={() => navigate("forms/CaseDetails")}>
                Case Details
              </CButton>
            ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
     TokenNo: 1,
     OPNumber:123,
      EntryTime: 'Otto',
      PatientName: '@mdo',
      LastVisit: '@mdo',
      Action: (
              <CButton size="sm" color="primary" onClick={() => navigate("forms/CaseDetails")}>
                Case Details
              </CButton>
            ),
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }}/>
}

export default Tokens