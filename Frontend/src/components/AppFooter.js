import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
     
      <div className="ms-auto">
        <a href="http://www.vikaathi.com" target="_blank" rel="noopener noreferrer">
          VIKAATHI INFO TECH
        </a>
        <span className="ms-1">&copy; 2025</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
