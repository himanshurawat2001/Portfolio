import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container header__container">
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        
        <h5>Hello I'm</h5>
        <h1>Himanshu Rawat</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5><h5>
        &nbsp;
        </h5><h5>
        &nbsp;
        </h5>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
        <section><h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5><h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5><h5>
        &nbsp;
        </h5><h5>
        &nbsp;
        </h5>
  
       
       
        </section>

    </div>
    
  )
}

export default Header