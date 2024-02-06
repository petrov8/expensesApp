import "./Expenses.css"
import ExpenseItems from "./ExpenseItems.jsx"
import ExpenesesFilter from "./ExpensesFilter.jsx"
import Card from "../Shared/Card.jsx"
import {useState} from "react"


function Expenses({items}) {

    
    const [selectedYear,  setSelectedYear] = useState("2024")
    const [itemsToRender, setItemsToRender] = useState(items)    

    function yearFilterHandler(selectedYear){
      setSelectedYear(selectedYear)

        let filteredExpenses = items.filter(
        (entry) => new Date(entry.date).getFullYear() == selectedYear)
        
        setItemsToRender(filteredExpenses.length > 0 ? filteredExpenses : items)
    }

    return (
        <Card className="expenses">
            <ExpenesesFilter  onYearFilter={yearFilterHandler} year={selectedYear}/>
            {itemsToRender.map(
            (listEntry, index)=><ExpenseItems key={listEntry.id}{...items[index]}/>)}
        </Card>
    )
}

export default Expenses

