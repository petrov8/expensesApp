import "./Expenses.css"
import ExpenseItems from "./ExpenseItems.jsx"
import ExpenesesFilter from "./ExpensesFilter.jsx"
import Card from "../Shared/Card.jsx"
import {useState} from "react"

function Expenses(props) {

    const expenses = [
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

    const [itemsToRender, setItemsToRender] = useState(expenses)


    function yearSelectionHandler(yearChange){
      let showItems = expenses.filter(
        (entry) => new Date(entry.date).getFullYear() == yearChange)
      setItemsToRender(showItems.length > 0 ? showItems : expenses)
    }
    

    let expenseItems = itemsToRender.map(
        (listEntry, index)=><ExpenseItems key={listEntry.id}{...expenses[index]}/>)

  

    return (
        <Card className="expenses">
            <ExpenesesFilter onYearFilter={yearSelectionHandler}/>
            {expenseItems}
        </Card>
    )
}

export default Expenses

