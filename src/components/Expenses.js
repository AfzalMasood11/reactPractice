import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props){
    
    return(
        <div className="expenses">
            {props.items.map((item) => (
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />  
            ))}        
        </div>
    );
}

export default Expenses;