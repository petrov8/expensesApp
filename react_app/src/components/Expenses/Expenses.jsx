import "./Expenses.css"
import ExpenseItems from "./ExpenseItems.jsx"
import ExpenesesFilter from "./ExpensesFilter.jsx"
import Card from "../Shared/Card.jsx"
import {useState} from "react"


function Expenses({items}) {
    
    const [selectedYear,  setSelectedYear] = useState("2024")

    let expensesContent = <p color="white">No items for this year</p>

    function yearFilterHandler(year){
      setSelectedYear(year)
    }

    const filteredItems = items.filter( (expense) => 
        (expense.date.getFullYear().toString() === selectedYear)
    )

    if (filteredItems.length > 0){
        expensesContent = filteredItems.map(
            (listEntry, index)=><ExpenseItems key={listEntry.id}{...items[index]}/>)
    } 

    return (
        <Card className="expenses">
            <ExpenesesFilter  onYearFilter={yearFilterHandler} currYear={selectedYear}/>
            {expensesContent}
        </Card>
    )
}

export default Expenses

