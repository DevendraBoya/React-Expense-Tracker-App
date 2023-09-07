import ExpenseDate from "../ExpenseDate/ExpenseDate";


const ExpenseItem = (props) => {
    const {date, title, amount} = props;
  return (
    <div className="flex justify-between items-center shadow-[0_2px_8px_rgba(0,0,0,0.25)] bg-[#4b4b4b] mx-0 my-4 p-2 rounded-xl">
      <ExpenseDate date={date}/>
      <div className="flex flex-col gap-4 items-end justify-start flex-1 md:flex-row md:items-center md:justify-start md:flex-1">
        <h2 className="text-base flex-1 text-[white] mx-4 my-0 md:text-2xl">
            {title}
        </h2>
        <div className="text-base font-bold text-[white] bg-[#40005d] border p-2 rounded-xl border-solid border-[white] md:text-xl md:px-6 md:py-2">
            ${amount}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
