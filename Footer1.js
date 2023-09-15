import React from 'react'

export default function Footer1() {
  let footerStyle ={
    width:"100%",
    top:"100vh",
    position:"absolute"

  }
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
      copyright &copy; rsl solutions
    </footer>
  )
}
