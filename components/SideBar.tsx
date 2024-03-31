import React from 'react'
import NewChat from './NewChat'

const SideBar = () => {
  return (
    <div className='flex flex-col p-2 h-screen'>
        <div className='flex-1'> 
        <div>
            {/* NewChat */}
            <NewChat />
            <div>
                {/* Model Selection */}
            </div>
            {/* Map through chat rows */}
        </div>

        </div>
    </div>
  )
}

export default SideBar