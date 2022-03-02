import React from "react";

const FilterExpense : React.FC<{
    onYearSelect : (year : string) => void, 
    initialYear : string
}> = (props) => {
    const changeHandler = (event : React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        props.onYearSelect(event.target.value);
    }
    return (
        <select name="filterExpense" className="form-control" value={props.initialYear} onChange={changeHandler}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    )
}

export default FilterExpense;

