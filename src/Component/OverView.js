import React, { useContext } from 'react'
import { Context } from '../App'
import './OverView.css'

const OverView = () => {

    const {totalExpense} = useContext(Context)
    const budget = 2000

  return (

    <div>
    <h1>My Budget Planner</h1>
      <div className='Navbar'>
        <div style={{backgroundColor:'#F8F9FA', color:'#6C757D'}}> Budget: Rs. {budget} </div>
            <div style={{backgroundColor:'#F8F9FA', color:'#198754'}}>Remaining: Rs. {budget-totalExpense}</div>
            <div style={{backgroundColor:'#CFF4FC', color:'#087990'}}>Spant so far: {totalExpense}</div>
      </div>  
    </div>
  )
}

export default OverView
