import "./ExpenseItems.css"
import ExpenseDate from "./ExpenseDate.jsx"
import Card from "../Shared/Card.jsx"

function ExpenseItems({id, title, amount, date}) {
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
        </Card>
    )
}


export default ExpenseItems

