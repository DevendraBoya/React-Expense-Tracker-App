import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <p className="text-[white] text-center">No Expenses Found.</p>
    }
    return (
        props.items.length > 0 && props.items.map((expense) => 
            <ExpenseItem 
              key = {expense.id}
              date = {expense.expenseDate}
              title = {expense.expenseTitle}
              amount = {expense.expenseAmount}
              id= {expense.id}
            />)
    )
}

export default ExpensesList;