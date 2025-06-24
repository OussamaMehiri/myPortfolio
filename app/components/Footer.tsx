import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (

    <footer className='flex justify-center p-2'>
        <p>All Rights Reserved {year} &copy; </p>
    </footer>
  )
}

export default Footer 