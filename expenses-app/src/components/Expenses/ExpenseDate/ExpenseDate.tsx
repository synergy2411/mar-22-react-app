const ExpenseDate : React.FC<{createdAt : Date}> = (props) => {
    const day = props.createdAt.toLocaleString("en-US", { day : "numeric"})
    const month = props.createdAt.toLocaleString("en-US", { month : "long"})
    const fullYear = props.createdAt.getFullYear()
    return (
        <p className="text-muted">
            Created At : {month} {day}, {fullYear}
        </p>
    )
}

export default ExpenseDate;