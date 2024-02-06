import "./NewExpense.css"

import ExpenseForm from "./ExpenseForm.jsx"

function NewExpense({onNewExpenseData}){

    function saveExpenseHandler(newFormData){
        const expenseData = {
            id: (Math.random() * 100 | 5).toString(),
            ...newFormData,
        }
        onNewExpenseData(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}>
            </ExpenseForm>
        </div>
    )
}

export default NewExpense