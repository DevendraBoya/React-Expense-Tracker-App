
const ExpenseFilter = (props) => {
    const yearSelectedHandler = (event) => {
        props.onYearSelected(event.target.value)
    }
    return (
        <div className="text-[white] px-4 py-0">
            <div className="flex w-full items-center justify-between mx-0 my-4">
                <label className="font-bold mb-2 text-2xl">Filter By Year</label>
                <select value={props.selectedYear} className="font-bold px-12 py-2 rounded-md text-slate-800 text-xl" onChange={yearSelectedHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;