import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            text,
            amount: +amount
        }
        setText('')
        setAmount('');
        document.getElementById("expenseForm").reset();
        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form id='expenseForm' onSubmit={(e) => onSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" id="amount" onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
