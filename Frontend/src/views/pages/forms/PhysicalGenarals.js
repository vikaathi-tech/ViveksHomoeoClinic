import React, { useState } from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CTableBody,
  CFormInput,
  CButton,
  CRow,
  CCol
} from "@coreui/react";

const PhysicalGenerals = () => {
  //   const [rows, setRows] = useState([
  //     { id: 1, name: "John", age: 25 },
  //     { id: 2, name: "Mary", age: 30 }
  //   ]);

  //   const handleChange = (id, key, value) => {
  //     setRows(rows.map(r => r.id === id ? { ...r, [key]: value } : r));
  //   };

  //   const columns = [

  //   {
  //     key: 'heading_1',
  //     label: 'Heading',
  //     _props: { scope: 'col' },
  //   },
  //   {
  //     key: 'heading_1',
  //     label: 'Heaing',
  //     _props: { scope: 'col' },
  //   }
  // ]
  // const items = [
  //   {
  //     id: 1,
  //     class: 'Mark',
  //     heading_1: 'Otto',
  //     heading_2: '@mdo',
  //     _props: { active: true },
  //     _cellProps: { id: { scope: 'row' } },
  //   },
  //   {
  //     id: 2,
  //     class: 'Jacob',
  //     heading_1: 'Thornton',
  //     heading_2: '@fat',
  //     _cellProps: { id: { scope: 'row' } },
  //   },
  //   {
  //     id: 1,
  //     class: 'Mark',
  //     heading_1: 'Otto',
  //     heading_2: '@mdo',
  //     _props: { active: true },
  //     _cellProps: { id: { scope: 'row' } },
  //   }
  //   ,
  // ]
  const initialItems = [
    { PhyGen: 'Appetite', name: "", PhyGen1: 'Stool', name1: "" },
    { PhyGen: 'Thirst', name: "", PhyGen1: 'Urine', name1: "" },
    { PhyGen: 'Sleep', name: "", PhyGen1: 'Sweat', name1: "" },
  ];

  const [items, setItems] = useState(initialItems);
  const [editRow, setEditRow] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (item) => {
    setEditRow(item.id);
    setEditData(item);
  };

  const cancelEdit = () => {
    setEditRow(null);
    setEditData({});
  };

  const saveEdit = () => {
    setItems(items.map((x) => (x.id === editRow ? editData : x)));
    cancelEdit();
  };

  return (
    <CTable bordered hover>
      <CTableBody>
        <CTableRow>
          <CTableDataCell>Appetite</CTableDataCell>
          <CTableDataCell>
            <CFormInput/>
          </CTableDataCell>
          <CTableDataCell>Stool</CTableDataCell>
          <CTableDataCell>
            <CFormInput/>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Thirst</CTableDataCell>
          <CTableDataCell>
            <CFormInput/>
          </CTableDataCell>
          <CTableDataCell>Urine</CTableDataCell>
          <CTableDataCell>
            <CFormInput/>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Sleep</CTableDataCell>
          <CTableDataCell>
            <CFormInput/>
          </CTableDataCell>
          <CTableDataCell>Sweat</CTableDataCell>
          <CTableDataCell>
            <CFormInput/>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  );
}

export default PhysicalGenerals