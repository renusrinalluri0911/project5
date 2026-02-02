import React, { Component } from 'react'
import {data} from 'react-router-dom';
import Coursecard from './coursecard/';
import "./App.css";


export default class App extends Component {
  constructor(){
    super()
    this.state={courses:[
      {name:"java",price:999,duration:"3hrs",img:"img1.png"},
      {name:"dsa",price:1000,duration:"4hrs",img:"img2.png"},
      {name:"maths",price:1200,duration:"5hrs", img:"img3.png"},
      {name:"ai",price:1400,duration:"6hrs",img:"img4.png"},
      {name:"blockchain",price:120,duration:"8hrs",img:"img4.png"},
    ]}
  }
  render() {
    return (
     
     <div className="app">
      <div className='header'>Course Catalog-2500030337-RENU SREE</div>
      <div className='section'>
        {this.state.courses.map((data, index)=>(
          <Coursecard key={index} data={data}/>
        ))}
      </div>
     <div>
      <div className='footer'>© 2024 Course Catalog. All rights reserved.</div>
     </div>
      </div>
    )
  }
}