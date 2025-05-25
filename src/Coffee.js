

function Movetext(){

    const para = document.getElementById('item-box'); 
    const a=document.getElementById('item-name')

    const h1 = para.querySelector('h1').textContent;
    const h2 = para.querySelector('h2').textContent;
    const h3 = para.querySelector('h3').textContent;
    
    console.log(h1.textContent)
    a.innerText=h1
}