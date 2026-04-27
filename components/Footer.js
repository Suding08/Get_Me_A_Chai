import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-900 text-white flex justify-center items-center px-4 h-15'>
        <p className='text-center'>Copyright &copy; {currentYear} GetMeAChai - All rights reserved</p>
    </footer>
  )
}

export default Footer
