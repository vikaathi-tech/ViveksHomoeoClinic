import React, { useState } from 'react'
import { CTable, CButton, CModal, CModalHeader, CModalBody, CFormInput, CModalFooter } from '@coreui/react'
import VitalsForm from '../forms/VitalsForm';

const Vitals = () => {

  const [visible, setVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openForm = (id) => {
    const row = items.find(x => x.TokenNo === id);
    setSelectedRow(row);
    setVisible(true);
  };

  const columns = [
    {
      key: 'TokenNo',
      label: 'Token No',
      _props: { scope: 'col' },
    },
    {
      key: 'OPNo',
      label: 'OP Number',
      _props: { scope: 'col' },
    },
    {
      key: 'Name',
      label: 'Name',
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
      OPNo: 'Otto',
      Name: '@mdo',
      _cellProps: { TokenNo: { scope: 'row' } },
      Action: (
        <CButton size="sm" color="primary" onClick={() => openForm(1)}>
          Check Vitals
        </CButton>
      ),
    },
    {
      TokenNo: 2,
      OPNo: 'Thornton',
      Name: '@fat',
      _cellProps: { TokenNo: { scope: 'row' } },
      Action: (
        <CButton size="sm" color="primary" onClick={() => openForm(1)}>
          Check Vitals
        </CButton>
      ),
    },
    {
      TokenNo: 3,
      OPNo: '@twitter',
      Name: '@twitter',
      _cellProps: { TokenNo: { scope: 'row' } },
      Action: (
        <CButton size="sm" color="primary" onClick={() => openForm(1)}>
          Check Vitals
        </CButton>
      ),
    }
  ]

  // return  <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }}/>
  // {/* Modal Form */}
  //     <CModal visible={visible} onClose={() => setVisible(false)}>
  //       <CModalHeader>Enter Vitals</CModalHeader>

  //       <CModalBody>
  //         <VitalsForm></VitalsForm>
  //       </CModalBody>

  //       <CModalFooter>
  //         <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
  //         <CButton color="primary">Save</CButton>
  //       </CModalFooter>
  //     </CModal>

  return (
    <>
      <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }}></CTable>
      <CModal visible={visible} onClose={() => setVisible(false)} size="xl">
        <CModalHeader>Enter Vitals</CModalHeader>

        <CModalBody>
          <VitalsForm></VitalsForm>
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
          <CButton color="primary">Add to Queue</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Vitals