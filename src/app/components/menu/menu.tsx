import React from 'react'
import DesktopMenu from './desktopMenu/desktopMenu'
import CustomButton from './customButton/customButton'

const Menu = ({items}) => {
  return (
    <>
      <div className="d-none d-lg-block col-8">
        <DesktopMenu items={items} />
      </div>
      <div className="d-none d-lg-block col-2">
        <CustomButton/>
      </div>
    </>
  )
}

export default Menu