import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        "title": '',
        "amount": '',
        "date": ''
    })

    const [displayForm, setDisplayForm] = useState(false);


    const titleChaneHadler = (event) => {
        setUserInput({
            ...userInput,
            "title": event.target.value
        })
    }
    const amountChaneHadler = (event) => {
        setUserInput({
            ...userInput,
            "amount": event.target.value
        })
    }
    const dateChaneHadler = (event) => {
        setUserInput({
            ...userInput,
            "date": event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            expenseTitle: userInput.title,
            expenseAmount: parseFloat(userInput.amount),
            expenseDate: new Date(userInput.date),
            id: uuidv4()
        }
        props.onAddExpense(expenseData);
        setUserInput({
            "title": '',
            "amount": '',
            "date": ''
        })
        setDisplayForm(false);
    }
    return (
        <div className="bg-[#a892ee] w-[50rem] max-w-[95%] text-center shadow-[0_1px_8px_rgba(0,0,0,0.25)] mx-auto my-8 p-4 rounded-xl">
            {
                !displayForm && 
                <button className="cursor-pointer border mt-6 bg-[#40005d] text-[white] mr-4 px-8 py-4 rounded-xl border-solid border-[#40005d];
                font: inherit" onClick={()=>setDisplayForm(!displayForm)}> Add New Expense</button>
            }
            
            { displayForm && 
            <form className="flex flex-wrap gap-4 text-left mb-4" onSubmit={submitHandler}>
                <div>
                    <label className="font-bold block mb-2">Title</label>
                    <input type="text" value={userInput.title} className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc];
  font: inherit" onChange={titleChaneHadler}/>
                </div>
                <div>
                    <label className="font-bold block mb-2">Amount</label>
                    <input type="number" value={userInput.amount} min="0.01" step="0.01" className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc];
  font: inherit" onChange={amountChaneHadler} />
                </div>
                <div>
                    <label className="font-bold block mb-2">Date</label>
                    <input type="date" value={userInput.date} min="2019-01-01" max="2023-12-31" className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc];
  font: inherit" onChange={dateChaneHadler}/>
                </div>
                <div className="text-right">
                    <button type="submit"  className="cursor-pointer border mt-6 bg-[#40005d] text-[white] mr-4 px-8 py-4 rounded-xl border-solid border-[#40005d];
  font: inherit">Add Expense</button>
                </div>
            </form>
            }
            
        </div>
    )
}

export default ExpenseForm;