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
    name: 'PATIENTS',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'APPOINTMENT',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'STOCKS',
    to: '/theme/stocks',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'ADMIN',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'STAFF',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PATIENTS',
        to: '/base/patients',
      },
      {
        component: CNavItem,
        name: 'MEDICINE',
        to: '/base/medicine',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'BILLING',
    to: '/theme/billing',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  }
]

export default _nav
