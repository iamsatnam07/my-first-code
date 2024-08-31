import React, { useState } from 'react'
const Expense = () => {

    const [Expense,setExpense] = useState("");
    const [Amount,setAmount] = useState(0);
    const [ExpenseList, setExpenseList] = useState([]);

    const expenseHandler = (e) => {
        setExpense(e.target.value);
    }

    const amountHandler = (e) => {
        setAmount(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            id:ExpenseList.length + 1,
            Expense:Expense,
            Amount:Amount
        }
        setExpenseList([...ExpenseList,expenseData]);
        setExpense("");
        setAmount(0);
        console.log(ExpenseList)
    }
    const deleteHandler = (index) => {
        const newList = ExpenseList.filter((exp) => exp.id !== index);
        setExpenseList(newList);
    }
    // const editHandler = (index) => {
    //     const item = ExpenseList[index];
    //     setExpense(item.Expense);
    //     setAmount(item.Amount);
    //     deleteHandler(index);
    // }
    // const totalExpense = () => {
    //     let total = 0;
    //     for(let i=0;i<ExpenseList.length;i++){
    //         total += parseInt(ExpenseList[i].Amount);
    //         }
    //     return total;
    // }
    // const clearHandler = () => {
    //     setExpenseList([]);
    // }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' name='Expense' onChange={expenseHandler} />
                <br/><br/>
                <input type='number' name='Amount' onChange={amountHandler} />
                <br/><br/>
                <button type='submit'>Add Expense</button>
                <br/>
            </form>
            <ul>
                {ExpenseList.map(el => (
                    <li key={el.id}>{el.Expense} : {el.Amount}
                        <button onClick={() => deleteHandler(el.id)}>Delete</button>
                        {/* <button onClick={() => editHandler(el.id)}>Edit</button> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Expense
