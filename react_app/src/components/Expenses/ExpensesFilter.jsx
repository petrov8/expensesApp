import "./ExpensesFilter.css"


function ExpensesFilter({onYearFilter, currYear}){

    let currentYear = new Date().getFullYear()
    let dropdownOptions = createDropdown(currentYear, 4)

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={currYear} onChange={(event) => onYearFilter(event.target.value)}  >
            {dropdownOptions}
          </select>
        </div>
      </div>
    );   
}


function createDropdown(start, end){
    let options = []

    for (let i=0; i<end; i++) {
        options.push(
            <option key={start-2000} value={start}>{start}</option>
        )
        start -= 1
    }
    return options
}


export default ExpensesFilter