import React from 'react'
import { CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CInputGroup, CInputGroupText, CRow, CButton, CFormSelect, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'
import PatientCard from './PatientCard'
import { useState } from 'react';



const Reception = () => {

  const items = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon"
  ];

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (value) => {
    setInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = items.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSelect = (value) => {
    setInput(value);
    setSuggestions([]);
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* <CFormInput
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      /> */}
      <CRow className='mb-3'>
        <CCol md={3}>
          <CInputGroup md={3}>
            <CFormInput
              type="text"
              placeholder="Type to search OP No / Name..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              className="rounded-0"
            />
            <CButton type="button" color="success" className="rounded-0" >
              Enter
            </CButton>
          </CInputGroup>
        </CCol>
      </CRow>

      {suggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            width: "20%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "white",
            zIndex: 10,
          }}
        >
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>

  );


}

export default Reception