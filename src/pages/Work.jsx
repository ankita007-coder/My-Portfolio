import React from 'react'
import dp from "../assets/images/laptop.jpg";
import { SingleWork } from '../components';
import "../assets/css/Work.css"
const Work = () => {
  const works= [
    {
      name:'Chavi Designs',
      image:dp
    },
    {
      name:'Prachi Graphics',
      image:dp
    },
    {
      name:'Meal Mitra',
      image:dp
    }
  ]
  return (
    <div className='work-box'>
      {
        works.map((work,idx)=>{
          return <SingleWork {...work} key={idx}/>
          
        })
      }
    </div>
  )
}

export default Work
