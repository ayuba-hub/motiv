import React from 'react'
import male from '../assets/male.jpeg'
import '../footer.css'

const Footer = () => {
  return (
  <footer className="container">
    <div className="row">
        <h4 className='text-center'>Team</h4>
        <div className="dropdown-divider"></div>
            <div className="col-6 col-md-2">
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <div className="card card-body" style={{'border':'5px solid blue','borderRadius':'20px'}}>
                            <img src={male} className ='mx-auto' style = {{'width':'50px'}} alt="" />
                            <p className='text-center'>Ayuba Ezekiel</p>
                            <p className='text-center'>Software Engineer Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>


    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-twitter" width="24" height="24"></i></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-telegram" width="24" height="24"></i></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-discord" width="24" height="24"></i></a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer