import './experience.css'
import {BsPatchCheckFill} from'react-icons/bs'

const  Experience= () => {
  return (
    <section id ="experience">
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
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
                <div>
                <h4>JAVASCRIPT</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>REACT.JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
      </div>
      
      <div className='experience__backend'>
      <h3>Programming Lang and Problem Solving</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>DATA STRUCTURES AND ALGORITHMS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>COMPETETIVE PROGRAMMING</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
      </div>
      </div>
    </div>
      
    </section>
  )
}

export default Experience