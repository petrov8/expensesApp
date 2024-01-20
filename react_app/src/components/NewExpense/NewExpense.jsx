import "./NewExpense.css"

import ExpenseForm from "./ExpenseForm.jsx"

function NewExpense(props){

    function saveExpenseHandler(newFormData){
        const expenseData = {
            ...newFormData,
            id: (Math.random() * 100 | 5).toString()
        }
        props.onNewExpenseData(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}>
            </ExpenseForm>
        </div>
    )
}

export default NewExpense