import "./Expenses.css"
import ExpenseItems from "./ExpenseItems.jsx"
import Card from "../Shared/Card.jsx"

function Expenses(props) {

  console.log("This is expenses")
  console.log(props.extraExpenses)

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

    let expenseItems = expenses.map(
        (listEntry, index)=><ExpenseItems key={listEntry.id}{...expenses[index]}/>)

    return (
        <Card className="expenses">
            {expenseItems}
        </Card>
    )
}

export default Expenses

