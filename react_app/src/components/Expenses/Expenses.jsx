import "./Expenses.css"
import ExpenseItems from "./ExpenseItems.jsx"
import ExpenesesFilter from "./ExpensesFilter.jsx"
import Card from "../Shared/Card.jsx"
import {useState} from "react"


function Expenses({items}) {
    
    const [selectedYear,  setSelectedYear] = useState("2024")

    function yearFilterHandler(year){
      setSelectedYear(year)
    }

    const filteredItems = items.filter( (expense) => 
        (expense.date.getFullYear().toString() === selectedYear)
    )

    return (
        <Card className="expenses">
            <ExpenesesFilter  onYearFilter={yearFilterHandler} currYear={selectedYear}/>
            {filteredItems.map(
            (listEntry, index)=><ExpenseItems key={listEntry.id}{...items[index]}/>)}
        </Card>
    )
}

export default Expenses

