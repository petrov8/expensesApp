import "./ExpensesFilter.css"


function ExpensesFilter({onYearFilter}){

    let currentYear = new Date().getFullYear()
    let dropdownOptions = composeYearOptions(currentYear, 5)

    function filterSelHandler(event){
        onYearFilter(event.target.value)
    }


    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select onClick={filterSelHandler}>
            {dropdownOptions}
          </select>
        </div>
      </div>
    );   
}


function composeYearOptions(startYear, numYears){
    let yearsArray = []

    for (let i=0; i<numYears; i++) {
        yearsArray.push(
            <option key={startYear-2000} value={startYear}>{startYear}</option>
        )
        startYear -= 1
    }
    return yearsArray
}


export default ExpensesFilter