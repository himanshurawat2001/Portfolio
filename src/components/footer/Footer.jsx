import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>HIMANSHU RAWAT</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


    <div className="footer__socials">
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><AiFillTwitterCircle/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; HIMANSHU RAWAT. All Right Reserved</small>
    </div>
    </footer>
  )
}

export default Footer