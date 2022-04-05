import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='navbarMain p-3'>

      <div className="navbarContainer">

        <div className="navbar">
          <div className="navbarLeft">
            <Link href='/' ><a className='text-2xl mr-10'>dev thoughts</a></Link>
            <Link href='/'><a className=' mr-10'>Posts</a></Link>
            <Link href='/'><a className=' mr-10'>Projects</a></Link>
          </div>
          <div className="navbarRight">

          </div>
        </div>
      </div>
    </div>
  )
}
