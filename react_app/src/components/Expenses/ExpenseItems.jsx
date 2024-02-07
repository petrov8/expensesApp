import "./ExpenseItems.css"
import ExpenseDate from "./ExpenseDate.jsx"
import Card from "../Shared/Card.jsx"
import { useState } from "react"

function ExpenseItems({id, title, amount, date}) {

    console.log(amount)

    const [itemName, setItemName] = useState(title)

    function clickHandler() {
        setItemName("Updated")
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{itemName}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
                <button onClick={clickHandler}>Click Here</button>
            </div>
        </Card>
    )
}


export default ExpenseItems

