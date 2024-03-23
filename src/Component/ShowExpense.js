import React, {useContext} from 'react'
import { Context } from './../App'
import './ShowExpense.css'

const ShowExpense = () => {

    const {expenseData} = useContext(Context)
    
  return (
    <>
    <h2>Expenses</h2>
        <div>
            {
                expenseData.map((expense) => (
                <div className='expense_data'> <span>{expense.title}</span> <span> Rs.{expense.price} 
                
                </span> 
                <span onClick={() => {}} style={{cursor:'pointer'}}>  
                  X
                </span> 
                </div>
                ))
            }
    </div>
    </>
  )
}

export default ShowExpense
