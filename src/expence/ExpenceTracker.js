import React from 'react'
import Expence from './Expence';
import TransactionForm from './TransactionForm';
import TransactionH from './TransactionH';
import { useState,useEffect } from 'react'
import './expence.css'
import uniqueid from '../uniqueid';




//mock data
const transactiondata=[
    {
        id:uniqueid(), name:"Salery",amount:1000,type:'income'
    },
    { id:uniqueid(), name:"Grocery",amount:100,type:'expence'},
  
];

function ExpenceTracker() {
    const [income,setIncome]=useState(0);
    const [expence, setExpence]=useState(0)
    const [transactions,setTransaction]=useState(transactiondata);

    //uses localStorage but its not work
    // const saveState =()=>{
    //     localStorage.setItem('expenceTracker',
    //     JSON.stringify(transactions));
    // }

   
    const calculateExpence=()=>{
        let income=0,expence = 0;

        transactions.forEach((data)=>{
            if (data.type === 'income'){
                income += data.amount
            }else if (data.type === 'expence'){
                expence += data.amount
            }
        });

        // saveState();

        setIncome(income)
        setExpence(expence)
    }

    const handleTransaction= data =>{
        let cloneTransaction =[...transactions,data]
        setTransaction(cloneTransaction)
      
       
        
    }

    const handleDelete = id =>{
        console.log(id)
         //those who have the id will be shown and rest will be not
        const newTransaction  = transactions.filter((item)=>
        item.id!==id)
        setTransaction(newTransaction)

    }

    // useEffect(()=>{

    //     let localState = JSON.parse(localStorage.getItem('expenceTracker'));
    //     if (localState){

    //         setTransaction(localState);
            
    //     }else{
    //         calculateExpence();
    //     }
       
    // },[]);
   
    useEffect(()=>{
        calculateExpence();
 
     },[transactions]);
    


  return (
    <div className='expence'>
         <h1 className='animate-charcter'>Expence Tracker</h1>
         <Expence income={income} expence={expence}></Expence>
         <TransactionH transactions={transactions} ondeletetransaction={handleDelete}></TransactionH>
         <TransactionForm onNewtransaction={handleTransaction}></TransactionForm>
      
    </div>
  )
}

export default ExpenceTracker
