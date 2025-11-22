import React ,{ useEffect, useState } from 'react'
import { CTable,CButton } from '@coreui/react'
import {FetchData} from '../../../Api';

const Patients = () => {
  const columns = [
    {
      key: 'OPNo',
      label: 'OP No',
      _props: { scope: 'col' },
    },
    {
      key: 'Name',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'Address',
      label: 'Address',
      _props: { scope: 'col' },
    },
    {
      key: 'LastVisit',
      label: 'Last Visit',
      _props: { scope: 'col' },
    }
  ]
  const items = FetchData('Patient','GetAll','')
  console.log(items)
  // [
  //   {
  //     id: 1,
  //     class: 'Mark',
  //     heading_1: 'Otto',
  //     heading_2: '@mdo',
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
  //     id: 3,
  //     class: 'Larry the Bird',
  //     heading_2: '@twitter',
  //     _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
  //   },
  // ]

  return <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }}/>
}

export default Patients