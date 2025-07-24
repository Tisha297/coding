function j(){
    let m=document.getElementById("fname").value
    let h=/^[A-Za-z ]{1,}$/
    if(!h.test(m)){
        document.getElementById("error-f").innerHTML=" please Enter valid Name"
    }
    else{
        document.getElementById("error-f").innerHTML=""
    }

    let n=document.getElementById("lname").value
    let p=/^[A-Za-z ]{1,}$/
    if(!p.test(n)){
        document.getElementById("error-l").innerHTML="please Enter valid Name"
    }
    else{
        document.getElementById("error-l").innerHTML=""
    }

    let v=document.getElementById("email").value
    let c=/^[A-Za-z@.]{8,}$/
    if(!c.test(v)){
        document.getElementById("error-e").innerHTML="please Enter valid email"
    }
    else{
        document.getElementById("error-e").innerHTML=""
    }

    let g=document.getElementById("password").value
    let f=/^[A-Za-z@.#$%&0-9]{8,12}$/
    if(!f.test(g)){
        document.getElementById("error-p").innerHTML="please Enter valid password"
    }
    else{
        document.getElementById("error-p").innerHTML=""
    }

     let d=document.getElementById("state").value
    let s=/^[A-Za-z ]{2,}$/
    if(!s.test(d)){
        document.getElementById("error-s").innerHTML="please Enter valid state"
    }
    else{
        document.getElementById("error-s").innerHTML=""
    }

     let o=document.getElementById("pincode").value
    let i=/^[0-9]{6}$/
    if(!i.test(o)){
        document.getElementById("error-z").innerHTML="please Enter valid pincode"
    }
    else{
        document.getElementById("error-z").innerHTML=""
    }

    let selectedRadio= document.querySelector('input[name="gender"]:checked');
    if(!selectedRadio){
        document.getElementById("rate").innerHTML="please enter valid gender"
    }
    else{
         document.getElementById("rate").innerHTML=""
    }

   let e=document.getElementById("country").value
   let q=/^[A-Z ]{1,}$/
   if(!q.test(e)){
    document.getElementById("error-c").innerHTML="please select a country"
   }
   else{
    document.getElementById("error-c").innerHTML=""
   }

     let u=document.getElementById("date").value
    let t=/^[0-9-/]{3,}$/
    if(!t.test(u)){
        document.getElementById("error-d").innerHTML="please Enter valid date"
    }
    else{
        document.getElementById("error-d").innerHTML=""
    }

    let selectedRadio2= document.querySelector('input[id="gridCheck"]:checked');
    if(!selectedRadio2){
        document.getElementById("error-ch").innerHTML="please click this box"
    }
    else{
         document.getElementById("error-ch").innerHTML=""
    }

    let y=document.getElementById("file").value
    let x=/(\.jpg|\.jpeg|\.png|\.gif)$/
    if(!x.exec(y)){
         document.getElementById("error-cf").innerHTML="please choose a file"
    }
    else{
         document.getElementById("error-cf").innerHTML=""
    }

}