import './Coffee.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function CounterApp() {
  const [count1, setCount1] = useState(1); // Start from 1
  const [count2, setCount2] = useState(1); // Start from 1
  const [count3, setCount3] = useState(1); // Start from 1
  const [count4, setCount4] = useState(1); // Start from 1
  const [count5, setCount5] = useState(1); // Start from 1
  const [count6, setCount6] = useState(1); // Start from 1
  const [count7, setCount7] = useState(1); // Start from 1
  const [count8, setCount8] = useState(1); // Start from 8

  const increment1 = () => {
    setCount1(count1 + 1);
  };
  const increment2 = () => {
    setCount2(count2 + 1);
  };
  const increment3 = () => {
    setCount3(count3 + 1);
  };
  const increment4 = () =>{
    setCount4(count4 + 1);
  };
  const increment5 = () => {
    setCount5(count5 + 1);
  };
  const increment6 = () => {
    setCount6(count6 + 1);
  };
  const increment7 = () => {
    setCount7(count7 + 1);
  };
  const increment8 = () => {
    setCount8(count8 + 1);
  };

  const decrement1 = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
    }
  };
  const decrement2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  };
  const decrement3 = () => {
    if (count3 > 1) {
      setCount3(count3 - 1);
    }
  };
  const decrement4 = () => {
    if (count4 > 1) {
      setCount4(count4 - 1);
    }
  };
  const decrement5 = () => {
    if (count5 > 1) {
      setCount5(count5 - 1);
    }
  };
  const decrement6 = () => {
    if (count6 > 1) {
      setCount6(count6 - 1);
    }
  };
  const decrement7 = () => {
    if (count7 > 1) {
      setCount7(count7 - 1);
    }
  };
  const decrement8 = () => {
    if (count8 > 1) {
      setCount8(count8 - 1);
    }
  };

  // function Counter() {

    return(
    <>

       <header className="header">
        <a href="#home" className="logo">Prince
            <span>Yadav</span></a>

                <div className="nav">
                    <a href="SnackShop.html">Home</a>
                </div>
            </header>

 <div className="main-container">


  <div className="coffee-box">
    <h1 id="coffee-text">Coffee</h1>

<div className="item-container">

    <div id="item-box">
      <h2>coffee</h2>
      <h3>Rs:20</h3>
      <span>
        <button onClick={decrement1}>-</button>
         <p>{count1}</p>
        <button onClick={increment1}>+</button> 
      </span>
      </div>
    <div id="item-box">
      <h2>coffee</h2>
      <h3>Rs:20</h3>
    <span>
     <button onClick={decrement2}>-</button>
         <p>{count2}</p>
        <button onClick={increment2}>+</button> 
      </span>
      </div>
    <div id="item-box">
      <h2>coffee</h2>
      <h3>Rs:20</h3>
    <span>
      <button onClick={decrement3}>-</button>
         <p>{count3}</p>
        <button onClick={increment3}>+</button> 
      </span>
      </div>
    <div id="item-box">
      <h2>coffee</h2>
      <h3>Rs:20</h3>
    <span>
      <button onClick={decrement4}>-</button>
         <p>{count4}</p>
        <button onClick={increment4}>+</button> 
      </span>
      </div>
    <div id="item-box">
      <h2>coffee</h2>
      <h3>Rs:20</h3>
    <span>
      <button onClick={decrement5}>-</button>
         <p>{count5}</p>
        <button onClick={increment5}>+</button> 
      </span>
      </div>
    <div id="item-box">   
      <h2>coffee</h2>
      <h3>Rs:20</h3>
      <span>
       <button onClick={decrement6}>-</button>
         <p>{count6}</p>
        <button onClick={increment6}>+</button> 
      </span>

      </div>
    <div id="item-box">
      <h2>coffee</h2>
      <h3>Rs:20</h3>
    <span>
      <button onClick={decrement7}>-</button>
         <p>{count7}</p>
        <button onClick={increment7}>+</button> 
        </span>
      </div>
    <div id="item-box">
      <h2>coffee</h2>
      <h3>Rs:20</h3>
      <span>
       <button onClick={decrement8}>-</button>
         <p>{count8}</p>
        <button onClick={increment8}>+</button> 
      </span>
      </div>
  </div>
</div>

  <div className="billing">
    <h1 id="billing-page">Billing</h1>

<div className="bill-box">
    <span>Item</span>
    <span>Quantity</span>
    <span>Price</span>
</div>

<div className="bill-data">
  <div id="item-name">coffee</div>
  <div id="bill-qunatity">1</div>
  <div id="price">20</div>
</div>
  </div>
 </div>
      
     </>
    );
}


export default CounterApp
