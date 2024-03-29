import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/NewExpense/NewExpense.jsx'
import {useState} from "react"


let dummy_data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {

  const [expenses, setItems] = useState(dummy_data)
  function newExpenseHandler(newExpense){

    setItems((prevExpenses) => {
      return [newExpense, ...prevExpenses] 
    })
  }

  console.log(expenses)
  
  return (
    <div>
      <NewExpense onNewExpenseData={newExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  )
}


export default App
