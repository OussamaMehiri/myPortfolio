import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (

    <footer className='flex justify-center  pb-20 md:pb-0'>
        <p>All Rights Reserved {year} &copy;  </p>
    </footer>
  )
}

export default Footer 