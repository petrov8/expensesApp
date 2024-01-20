import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/NewExpense/NewExpense.jsx'

function App() {

  let enteredExpenses = ""

  function addExpenseHandler(newExpenseData){
    enteredExpenses = {
      ...newExpenseData
    }
  }


  return (
    <div>
      <NewExpense onNewExpenseData={addExpenseHandler}/>
      <Expenses extraExpenses={enteredExpenses}/>
    </div>
  )
}

export default App
