import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilCalendarCheck,
  cilNoteAdd,
  cilRoom,
  cilMedicalCross,
  cilStorage,
  cilLibraryBuilding,
  cilCalculator
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'DASHBOARD',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'RECEPTION',
    to: '/forms/Reception',
    icon: <CIcon icon={cilRoom} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'VITALS',
    to: '/grids/Vitals',
    icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'CONSULTATION',
    to: '/grids/Tokens',
    icon: <CIcon icon={cilMedicalCross} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'APPOINTMENT',
    to: '/grids/Appointment',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'STOCKS',
    to: '/grids/Stocks',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'ADMIN',
    to: '/grids',
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'STAFF',
        to: '/grids/Staff',
      },
      {
        component: CNavItem,
        name: 'PATIENTS',
        to: '/grids/Patients',
      },
      {
        component: CNavItem,
        name: 'MEDICINE',
        to: '/grids/Medicine',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'BILLING',
    to: '/grids/Billing',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  }
]

export default _nav
