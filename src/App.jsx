import './Coffee.css';
import './Coffee.js';
import React, { useRef, useState } from 'react';
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

//  function for get item name and price 

 // click function for box 2
const [Box1TextH1, Box1setText1]=useState('');
const [Box1TextH2, Box1setText2]=useState('');
const [Box1TextH3, Box1setText3]=useState('');


// check function then add text
const [isChecked1, setIsChecked1] = useState(false);

const handleClick1 =(e) =>{
  const checked1 = e.target.checked;
    setIsChecked1(checked1);

    if(checked1){

      const Box1TextH1=document.getElementById('coffee-name1')
      const Box1TextH2=document.getElementById('price1')
      const Box1TextH3=document.getElementById('quantity1')
      
      if(Box1TextH1 && Box1TextH2 && Box1TextH3){
        Box1setText1(Box1TextH1.textContent);
        Box1setText2(Box1TextH2.textContent);
       Box1setText3(Box1TextH3.textContent);
      }
    }
    else{
    Box1setText1('')
    Box1setText2('')
    Box1setText3('')
    setCount1(1)
  }
};

// click function for box 2

 const [Box2TextH1, Box2setText1]=useState('');
const [Box2TextH2, Box2setText2]=useState('');
const [Box2TextH3, Box2setText3]=useState('');


// check function then add text
const [isChecked2, setIsChecked2] = useState(false);

const handleClick2 =(e) =>{
  const checked2 = e.target.checked;
    setIsChecked2(checked2);

    if(checked2){

      const Box2TextH1=document.getElementById('coffee-name2')
      const Box2TextH2=document.getElementById('price2')
      const Box2TextH3=document.getElementById('quantity2')
      
      if(Box2TextH1 && Box2TextH2 && Box2TextH3){
        Box2setText1(Box2TextH1.textContent);
        Box2setText2(Box2TextH2.textContent);
       Box2setText3(Box2TextH3.textContent);
      }
    }
    else{
    Box2setText1('')
    Box2setText2('')
    Box2setText3('')
    setCount2(1)
  }
};

// click function for box 3

  const [Box3TextH1, Box3setText1]=useState('');
const [Box3TextH2, Box3setText2]=useState('');
const [Box3TextH3, Box3setText3]=useState('');


// check function then add text
const [isChecked3, setIsChecked3] = useState(false);

const handleClick3 =(e) =>{
  const checked3 = e.target.checked;
    setIsChecked3(checked3);

    if(checked3){

      const Box3TextH2=document.getElementById('price3')
      const Box3TextH3=document.getElementById('quantity3')
      const Box3TextH1=document.getElementById('coffee-name3')
      
      if(Box3TextH1 && Box3TextH2 && Box3TextH3){
        Box3setText1(Box3TextH1.textContent)
        Box3setText2(Box3TextH2.textContent);
       Box3setText3(Box3TextH3.textContent);
      }
    }
    else{
    Box3setText1('')
    Box3setText2('')
    Box3setText3('')
    setCount3(1)
  }
};


// click function for box 4

  const [Box4TextH1, Box4setText1]=useState('');
const [Box4TextH2, Box4setText2]=useState('');
const [Box4TextH3, Box4setText3]=useState('');


// check function then add text
const [isChecked4, setIsChecked4] = useState(false);

const handleClick4 =(e) =>{
  const checked4 = e.target.checked;
    setIsChecked4(checked4);
    if(checked4){

      const Box4TextH2=document.getElementById('price4')
      const Box4TextH3=document.getElementById('quantity4')
      const Box4TextH1=document.getElementById('coffee-name4')
      
      if(Box4TextH1 && Box4TextH2 && Box4TextH3){
        Box4setText1(Box4TextH1.textContent)
        Box4setText2(Box4TextH2.textContent);
       Box4setText3(Box4TextH3.textContent);
      }
    }
    else{
    Box4setText1('')
    Box4setText2('')
    Box4setText3('')
    setCount4(1)
  }
};



// click function for box 5

  const [Box5TextH1, Box5setText1]=useState('');
const [Box5TextH2, Box5setText2]=useState('');
const [Box5TextH3, Box5setText3]=useState('');


// check function then add text
const [isChecked5, setIsChecked5] = useState(false);

const handleClick5 =(e) =>{
  const checked5 = e.target.checked;
    setIsChecked5(checked5);

    if(checked5){

      const Box5TextH1=document.getElementById('coffee-name5')
      const Box5TextH2=document.getElementById('price5')
      const Box5TextH3=document.getElementById('quantity5')
      
      if(Box5TextH1 && Box5TextH2 && Box5TextH3){
        Box5setText1(Box5TextH1.textContent)
        Box5setText2(Box5TextH2.textContent);
       Box5setText3(Box5TextH3.textContent);
      }
    }
    else{
    Box5setText1('')
    Box5setText2('')
    Box5setText3('')
    setCount5(1)
  }
};


// click function for box 6

  const [Box6TextH1, Box6setText1]=useState('');
const [Box6TextH2, Box6setText2]=useState('');
const [Box6TextH3, Box6setText3]=useState('');


// check function then add text
const [isChecked6, setIsChecked6] = useState(false);

const handleClick6 =(e) =>{
  const checked6 = e.target.checked;
    setIsChecked6(checked6);

    if(checked6){

      const Box6TextH2=document.getElementById('price6')
      const Box6TextH3=document.getElementById('quantity6')
      const Box6TextH1=document.getElementById('coffee-name6')
      
      if(Box6TextH1 && Box6TextH2 && Box6TextH3){
        Box6setText1(Box6TextH1.textContent)
        Box6setText2(Box6TextH2.textContent);
       Box6setText3(Box6TextH3.textContent);
      }
    }
    else{
    Box6setText1('')
    Box6setText2('')
    Box6setText3('')
    setCount6(1)
  }
};


// click function for box 7

  const [Box7TextH1, Box7setText1]=useState('');
const [Box7TextH2, Box7setText2]=useState('');
const [Box7TextH3, Box7setText3]=useState('');


// check function then add text
const [isChecked7, setIsChecked7] = useState(false);

const handleClick7 =(e) =>{
  const checked7 = e.target.checked;
    setIsChecked7(checked7);

    if(checked7){

      const Box7TextH2=document.getElementById('price7')
      const Box7TextH3=document.getElementById('quantity7')
      const Box7TextH1=document.getElementById('coffee-name7')
      
      if(Box7TextH1 && Box7TextH2 && Box7TextH3){
        Box7setText1(Box7TextH1.textContent)
        Box7setText2(Box7TextH2.textContent);
       Box7setText3(Box7TextH3.textContent);
      }
    }
    else{
    Box7setText1('')
    Box7setText2('')
    Box7setText3('')
    setCount7(1)
  }
};


// click function for box 8

  const [Box8TextH1, Box8setText1]=useState('');
const [Box8TextH2, Box8setText2]=useState('');
const [Box8TextH3, Box8setText3]=useState('');


// check function then add text
const [isChecked8, setIsChecked8] = useState(false);

const handleClick8 =(e) =>{
  const checked8 = e.target.checked;
    setIsChecked8(checked8);

    if(checked8){

      const Box8TextH2=document.getElementById('price8')
      const Box8TextH3=document.getElementById('quantity8')
      const Box8TextH1=document.getElementById('coffee-name8')
      
      if(Box8TextH1 && Box8TextH2 && Box8TextH3){
        Box8setText1(Box8TextH1.textContent)
        Box8setText2(Box8TextH2.textContent);
       Box8setText3(Box8TextH3.textContent);
      }
    }
    else{
    Box8setText1('')
    Box8setText2('')
    Box8setText3('')
    setCount8(1)
  }
};
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
      <div className="Item-name-select-btn" >
      <h1 id='coffee-name1'>coffee</h1>
         <label>
     <input
          type="checkbox"
          checked={isChecked1}
          onChange={handleClick1}
        />{' '}
           </label>
      </div>

      <h3 id="price1">Rs:20</h3>
      <span>
        <button onClick={decrement1}>-</button>
         <p id='quantity1'>{count1}</p>
        <button onClick={increment1}>+</button> 
      </span>
      </div>
    <div id="item-box">
     <div className="Item-name-select-btn">
      <h1 id='coffee-name2'>coffee</h1>
       <label>
     <input
          type="checkbox"
          checked={isChecked2}
          onChange={handleClick2}
        />{' '}
           </label>
      </div>
      <h3 id='price2'>Rs:20</h3>
    <span>
     <button onClick={decrement2}>-</button>
         <p id='quantity2'>{count2}</p>
        <button onClick={increment2}>+</button> 
      </span>
      </div>
    <div id="item-box">
     <div className="Item-name-select-btn">
      <h1 id='coffee-name3'>coffee</h1>
      <label>
     <input
          type="checkbox"
          checked={isChecked3}
          onChange={handleClick3}
        />{' '}
           </label>
      </div>
      <h3 id='price3'>Rs:20</h3>
    <span>
      <button onClick={decrement3}>-</button>
         <p id='quantity3'>{count3}</p>
        <button onClick={increment3}>+</button> 
      </span>
      </div>

    <div id="item-box">
      <div className="Item-name-select-btn">
      <h1 id='coffee-name4'>coffee</h1>
     <label>
     <input
          type="checkbox"
          checked={isChecked4}
          onChange={handleClick4}
        />{' '}
           </label>
      </div>
      <h3 id='price4'>Rs:20</h3>
    <span>
      <button onClick={decrement4}>-</button>
         <p id='quantity4'>{count4}</p>
        <button onClick={increment4}>+</button> 
      </span>
      </div>

    <div id="item-box">
      <div className="Item-name-select-btn">
      <h1 id='coffee-name5'>coffee</h1>
     <label>
     <input
          type="checkbox"
          checked={isChecked5}
          onChange={handleClick5}
        />{' '}
           </label>
      </div>
      <h3 id='price5'>Rs:20</h3>
    <span>
      <button onClick={decrement5}>-</button>
         <p id='quantity5'>{count5}</p>
        <button onClick={increment5}>+</button> 
      </span>
      </div>


    <div id="item-box">   
     <div className="Item-name-select-btn">
      <h1 id='coffee-name6'>coffee</h1>
     <label>
     <input
          type="checkbox"
          checked={isChecked6}
          onChange={handleClick6}
        />{' '}
           </label>
      </div>
      <h3 id='price6'>Rs:20</h3>
      <span>
       <button onClick={decrement6}>-</button>
         <p id='quantity6'>{count6}</p>
        <button onClick={increment6}>+</button> 
      </span>
      </div>


    <div id="item-box">
      <div className="Item-name-select-btn">
      <h1 id='coffee-name7'>coffee</h1>
    <label>
     <input
          type="checkbox"
          checked={isChecked7}
          onChange={handleClick7}
        />{' '}
           </label>
      </div>
      <h3 id='price7'>Rs:20</h3>
    <span>
      <button onClick={decrement7}>-</button>
         <p id='quantity7'>{count7}</p>
        <button onClick={increment7}>+</button> 
        </span>
      </div>
    <div id="item-box">
    <div className="Item-name-select-btn">
      <h1 id='coffee-name8'>coffee</h1>
      <label>
     <input
          type="checkbox"
          checked={isChecked8}
          onChange={handleClick8}
        />{' '}
           </label>
      </div>
      <h3 id='price8'>Rs:20</h3>
      <span>
       <button onClick={decrement8}>-</button>
         <p id='quantity8'>{count8}</p>
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
  <div id="item-name"> {Box1TextH1}</div>
  <div id="bill-qunatity">{Box1TextH2}</div>
    <div id="price">{Box1TextH3}</div>
</div>

 <div className="bill-data">
  <div id="item-name"> {Box2TextH1}</div>
  <div id="bill-qunatity">{Box2TextH2}</div>
    <div id="price">{Box2TextH3}</div>
</div> 

 <div className="bill-data">
  <div id="item-name"> {Box3TextH1}</div>
  <div id="bill-qunatity">{Box3TextH2}</div>
    <div id="price">{Box3TextH3}</div>
</div> 

<div className="bill-data">
  <div id="item-name"> {Box4TextH1}</div>
  <div id="bill-qunatity">{Box4TextH2}</div>
    <div id="price">{Box4TextH3}</div>
</div> 

<div className="bill-data">
  <div id="item-name"> {Box5TextH1}</div>
  <div id="bill-qunatity">{Box5TextH2}</div>
    <div id="price">{Box5TextH3}</div>
</div> 

<div className="bill-data">
  <div id="item-name"> {Box6TextH1}</div>
  <div id="bill-qunatity">{Box6TextH2}</div>
    <div id="price">{Box6TextH3}</div>
</div> 

<div className="bill-data">
  <div id="item-name"> {Box7TextH1}</div>
  <div id="bill-qunatity">{Box7TextH2}</div>
    <div id="price">{Box7TextH3}</div>
</div> 

<div className="bill-data">
  <div id="item-name"> {Box8TextH1}</div>
  <div id="bill-qunatity">{Box8TextH2}</div>
    <div id="price">{Box8TextH3}</div>
</div> 



  </div>
 </div>
      
     </>
    );


  }
export default CounterApp
