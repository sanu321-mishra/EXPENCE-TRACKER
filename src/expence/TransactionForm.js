import React, { useState, useEffect, useRef } from 'react'
import uniqueid from '../uniqueid';
import './expence.css'

function TransactionForm({ onNewtransaction }) {
    const inputReference = useRef(null);



    const [nameValue, setNamevalue] = useState("");
    const [amountValue, setAmountvalue] = useState("")

    const addTransaction = (type, e) => {
        e.preventDefault();
        const data = {
            id: uniqueid(), name: nameValue, amount: parseInt(amountValue), type: type
        }
        onNewtransaction(data);
        setNamevalue("");
        setAmountvalue("");

    }

    let onchangeHandler1 = (e) => {
        e.preventDefault()
        setNamevalue(e.target.value)

    }
    let onchangeHandler2 = (e) => {
        e.preventDefault()
        setAmountvalue(e.target.value)

    }

    useEffect(() => {
        inputReference.current.focus();
    }, []);
    return (
        <div>
            <h1>Add New Transactions</h1>
            <img src="https://cdn-icons.flaticon.com/png/512/2267/premium/2267918.png?token=exp=1652333438~hmac=6a22bcde925836137ecd5082871921d4" width="40px" alt="img" />
            <form action="">

                <div>

                    <b>Name:</b> <input type="text" name="" ref={inputReference} id="" value={nameValue} placeholder='Enter Name' onChange={onchangeHandler1} />

                </div>


                <div className='input2'>
                    <b>Amaount:</b> <input type="number" name="" id="" value={amountValue} placeholder="Enter Amount" onChange={onchangeHandler2} /></div>
                <div className='mybutton'>
                    <button className='btn btn-primary btn-sm mx-2' onClick={(e) => addTransaction('income', e)}>Add Income</button>
                    <button className='btn btn-danger btn-sm mx-2' onClick={(e) => addTransaction('expence', e)}>Add Expense</button>




                </div>
            </form>

        </div>
    )
}

export default TransactionForm
