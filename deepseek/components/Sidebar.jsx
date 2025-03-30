import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({expand, setExpand}) => {
  return (
    <div>
      <div>
        <div>
            <Image src={expand ? assets.logo_text : assets.logo_icon} alt=''/>
            <div>
            <Image src={assets.menu_icon } alt='' className=' md:hidden'/>
            <Image src={expand ? assets.logo_text : assets.logo_icon} alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
