import "./ExpenseDate.css"

function ExpenseDate({date}) {

    let month = date.toLocaleDateString("en-GB", {month: "long"})
    let day = date.toLocaleDateString("en-GB", {day: "2-digit"})
    let year = date.getFullYear()

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}


export default ExpenseDate