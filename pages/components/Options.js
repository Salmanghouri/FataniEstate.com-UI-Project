import React from 'react'
import Filter2 from './Filter2'

const Options = () => {
  return (
      <>
      <div >
      <ul className="flex text-center border-b border-gray-200">
  <li className="flex-1">
    <a className="relative block p-4 text-sm font-medium bg-white border-t border-l border-r border-gray-200" href>
      <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px" />
      Settings
    </a>
  </li>
  <li className="flex-1 pl-px">
    <a className="block p-4 text-sm font-medium text-gray-500 bg-gray-100 ring-1 ring-inset ring-white" href>
      Messages
    </a>
  </li>
  <li className="flex-1">
    <a className="block p-4 text-sm font-medium text-gray-500 bg-gray-100 ring-1 ring-inset ring-white" href>
      Archive
    </a>
  </li>
  <li className="flex-1 -mr-px">
    <a className="block p-4 text-sm font-medium text-gray-500 bg-gray-100 ring-1 ring-inset ring-white" href>
      Notifications
    </a>
  </li>
  
</ul>
<div className="relative max-w-screen-xl   ">
<Filter2/>
</div>

</div>
</>
  )
}

export default Options