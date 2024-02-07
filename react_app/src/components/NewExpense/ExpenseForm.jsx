import "./ExpenseForm.css"
import { useState } from "react"


function ExpenseForm({onSaveExpenseData}) {

    const [newTitle, setTitle] = useState("")
    const [newAmount, setAmount] = useState("")
    const [newDate, setDate] = useState("")


    function newTitleHandler(event){
        setTitle(event.target.value)
    }

    function newAmountHandler(event){
        setAmount(event.target.value)
    }

    function newDateHandler(event){
        setDate(event.target.value)
    }

    function formSubmitHandler(event){

        event.preventDefault()
        const formData = {
            id: Math.floor(Math.random() * 100 +1),
            title: newTitle,
            amount: parseFloat(newAmount),
            date: new Date(newDate)
        }

        onSaveExpenseData(formData)
        setTitle("")
        setAmount("")
        setDate("")
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                    <label className="new-expense__control label">Title</label>
                    <input 
                        className="new-expense__control input"
                        value = {newTitle}
                        onChange={newTitleHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label className="new-expense__control label">Amount</label>
                    <input 
                        className="new-expense__control input" 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        value = {newAmount}
                        onChange={newAmountHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label className="new-expense__control label">Date</label>
                    <input 
                        className="new-expense__control input" 
                        type="date" 
                        min="01-01-2019" 
                        max="01-01-2030"
                        value = {newDate}
                        onChange={newDateHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm