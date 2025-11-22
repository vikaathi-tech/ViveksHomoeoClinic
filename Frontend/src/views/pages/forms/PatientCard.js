import React from 'react'
// import { withPrefix } from 'gatsby'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const PatientCard = () => {
  return (
    <CCard style={{ width: '100%' }}>
      <CCardImage orientation="top" src={'../../../assets/images/1.jpg'} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
      </CCardBody>
    </CCard>
  )
}

export default PatientCard