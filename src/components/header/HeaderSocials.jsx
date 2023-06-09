import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/himanshu-rawat-2806a8189/" target="_blank" ><BsLinkedin/></a>
        <a href="https://github.com/himanshurawat2001" target="_blank"><FaGithub/></a>
        <a href="https://leetcode.com/Champ003/" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials