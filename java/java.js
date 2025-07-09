 function pop()
{
    document.getElementById('welcome').innerHTML="Hello user"
    alert("we welcome you")
}
pop()
function add()
{
   let n1= document.getElementById('a').value
   let n2= document.getElementById('b').value
    n1=parseInt(n1)
    n2=parseInt(n2)
    let c=n1+n2
    document.getElementById('welcome').innerHTML="The value is"+c
}
function sub()
{
   let n1= document.getElementById('a').value
   let n2= document.getElementById('b').value
    n1=Number(n1)
    n2=Number(n2)
    let c=n1-n2
    document.getElementById('welcome').innerHTML="The value is"+c
}
function mul()
{
   let n1= document.getElementById('a').value
   let n2= document.getElementById('b').value
    n1=Number(n1)
    n2=Number(n2)
    let c=n1*n2
    document.getElementById('welcome').innerHTML="The value is"+c
}
function div()
{
   let n1= document.getElementById('a').value
   let n2= document.getElementById('b').value
    n1=Number(n1)
    n2=Number(n2)
    let c=n1/n2
    document.getElementById('welcome').innerHTML="The value is"+c
}