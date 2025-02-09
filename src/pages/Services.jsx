import React from 'react'
import "../assets/css/Home.css"
import Wrapper from '../assets/wrappers/Service'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { services } from '../assets/utils/data'


const Services = () => {
  return (
    <Wrapper className='main-services'>
      <h1 className='steps-head'>Build, Scale & <br /><span>Dominate Online</span> </h1>
      {
        services.map((service)=>{
          return <div className='service'>
            <div>
              <h3>{service.title}</h3>
              <h2>{service.subtitle}</h2>
            </div>
            <div>
              <LazyLoadImage src={service.imageUrl} alt={service.title}/>
            </div>
            <p>{service.desc}</p>
          </div>
        })
      }
    </Wrapper>
  )
}

export default Services
