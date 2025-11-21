import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
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
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'VITALS',
    to: '/grids/Vitals',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TOKENS',
    to: '/grids/Tokens',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'APPOINTMENT',
    to: '/grids/Appointment',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'STOCKS',
    to: '/grids/Stocks',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'ADMIN',
    to: '/grids',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  }
]

export default _nav
