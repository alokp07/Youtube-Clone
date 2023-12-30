import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../App.css'
import './header.css'

function Header() {
  return (
    <>
    
    <Navbar className="bg-black align-items-center justify-content-between">
      <div className='d-flex align-items-center'>
        <h1 className='fs-4 headerH1 ms-5 pt-2'>
          <i className="fa-brands fa-youtube me-1" style={{color:"red"}}></i>
          </h1>
        <h1 className='fs-4 headerH1 m-0'>YouTube</h1>
      </div>

      <Form inline className='w-75 d-flex justify-content-center'>  
       <div className='d-flex align-items-center searchDiv w-50'>
          <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 search"
                
              />
          <i className="fa-solid fa-magnifying-glass fs-4 text-light ms-3"></i>
       </div>
            
        </Form>

        
       <h1 className='text-white fs-4 headerH1 profile me-4'>
          <div className='d-flex m-0 align-items-center'>
            <i className="fa-solid fa-video me-4"></i>
            <i className="fa-regular fa-bell me-4"></i>
            <i className="fa-solid fa-user me-4"></i>
          </div>
       </h1>
        

    </Navbar>

    
  
    </>
  )
}

export default Header