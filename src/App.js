import logo from './logo.svg';
import './App.css';
import AddExpense from './Component/AddExpense';
import OverView from './Component/OverView';
import ShowExpense from './Component/ShowExpense';
import { useState, useContext, createContext } from 'react';

export const Context = createContext()
function App() {

  const [totalExpense, setTotalExpense] = useState(0)
  const [expenseData, setExpenseData] = useState([])

  return (
    <Context.Provider value={{totalExpense, setTotalExpense, expenseData, setExpenseData}}>
      
    <div className='container'>
      <OverView/>
      <ShowExpense/>
      <AddExpense/>

      {/* <OverView totalExpense ={totalExpense}/>
      <ShowExpense expenseData={expenseData}/>
      <AddExpense setTotalExpense ={setTotalExpense} setExpenseData={setExpenseData}/> */}
    </div>
    </Context.Provider>
  );
}

export default App;
