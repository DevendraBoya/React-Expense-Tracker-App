
import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { v4 as uuidv4 } from 'uuid';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import ExpensesList from './components/ExpensesList/ExpensesList';
import ExpenseChart from './components/ExpenseChart/ExpenseChart';

const EXPENSES = [
  {
    expenseDate : new Date(2022, 5, 12),
    expenseTitle: "Car insurance",
    expenseAmount:"150",
    id: uuidv4()
  },
  {
    expenseDate : new Date(2021, 7, 9),
    expenseTitle: "Book",
    expenseAmount:"100",
    id: uuidv4()
  },
  {
    expenseDate : new Date(2023, 2, 3),
    expenseTitle: "Vegitables",
    expenseAmount:"500",
    id: uuidv4()
  }
];

function App() {
  const [expenses,  setExpenses] = useState(EXPENSES);
  const [selectedYear,  setSelectedYear] =  useState('2023');
  const yearFilterSelectedHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  }
  const addExpenseHandler = (expenseData) => {
    setExpenses([expenseData, ...expenses ]);
  }
  const filteredContent = expenses.filter((expense)=> {
    return expense.expenseDate.getFullYear().toString() === selectedYear;
  })
  return (
    <div className="bg-slate-700 absolute h-full w-full">
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <div className="bg-[rgb(31,31,31)] w-[50rem] max-w-[95%] shadow-[0_1px_8px_rgba(0,0,0,0.25)] mx-auto my-8 p-4 rounded-xl">
      <ExpenseFilter
      selectedYear = {selectedYear}
      onYearSelected={yearFilterSelectedHandler}/>
      <ExpenseChart expenses = {filteredContent}/>
      <ExpensesList items = {filteredContent}/>
      </div>
      
    </div>
  );
}

export default App;
