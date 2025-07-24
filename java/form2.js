function valid(){
  let n=document.getElementById("email").value
  let p=/^[a-zA-Z@.]{8,}$/
  if(!p.test(n)){
    document.getElementById("error").innerHTML="please enter valid email"
  }
  else{
        document.getElementById("error").innerHTML=""
  }
}
function x(){
  let m=document.getElementById("name").value
  let p=/^[a-zA-Z]{3,}$/
  if(!p.test(m)){
    document.getElementById("error2").innerHTML="please enter valid name"
  }
  else{
        document.getElementById("error2").innerHTML=""
  }
}
function t(){
  let n=document.getElementById("password").value
  let p=/^[a-zA-Z@.*#!]{8,10}$/
  if(!p.test(n)){
    document.getElementById("error3").innerHTML="please enter valid password"
  }
  else{
        document.getElementById("error3").innerHTML=""
  }
}
function j(){
  let n=document.getElementById("phone").value
  let p=/^[0-9]{10}$/;
  if(!p.test(n)){
    document.getElementById("error4").innerHTML="please enter valid number"
  }
  else{
    console.log("hello")
        document.getElementById("error4").innerHTML=""
  }
}