import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Vitals = React.lazy(() => import('./views/pages/forms/Vitals'))
const Tokens = React.lazy(() => import('./views/pages/grids/Tokens'))
const Appointment = React.lazy(() => import('./views/pages/grids/Appointment'))
const Stocks = React.lazy(() => import('./views/pages/grids/Stocks'))
const Staff = React.lazy(() => import('./views/pages/grids/Staff'))
const Patients = React.lazy(() => import('./views/pages/grids/Patient'))
const Medicine = React.lazy(() => import('./views/pages/grids/Medicine'))
const Billing = React.lazy(() => import('./views/pages/grids/Billing'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/forms/Vitals', name: 'Vitals', element: Vitals },
  { path: '/grids/Tokens', name: 'Tokens', element: Tokens },
  { path: '/grids/Appointment', name: 'Appointment', element: Appointment },
  { path: '/grids/Stocks', name: 'Stocks', element: Stocks },
  { path: '/grids/Staff', name: 'Staff', element: Staff },
  { path: '/grids/Patients', name: 'Patients', element: Patients },
  { path: '/grids/Medicine', name: 'Medicine', element: Medicine },
  { path: '/grids/Billing', name: 'Billing', element: Billing },
]

export default routes
