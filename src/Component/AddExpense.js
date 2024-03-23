import React, { useRef, useContext } from 'react'
import { Context } from './../App';
import './AddExpenses.css'

const AddExpense = () => {

    const {setExpenseData, setTotalExpense} = useContext(Context)
    const titleRef = useRef() ;
    const priceRef = useRef() ;

  return (
    <>
    <h1>Add Expenses</h1>
    <div className='AddExpense_container'>
        <div> 
          <span>Name</span>
            <input
            type="text" 
            placeholder='Enter Title'
            ref={titleRef}
            />
        </div>
        <div> 
          <span>Cost</span>
         <input
         type="number" 
         placeholder='Enter Amount'
         ref={priceRef}
         />
        </div>
        <button
        onClick={() => {
            const title = titleRef.current.value ;
            const price = priceRef.current.value ;
            setExpenseData(prevData=>[...prevData,{title,price}])

            setTotalExpense(prevTotal => prevTotal + parseInt(price))
            titleRef.current.value = ""
            priceRef.current.value = ""
        }}
        className='AddExpense_btn'
        >
            Save
        </button>
    </div>
    </>
  )
}

export default AddExpense
