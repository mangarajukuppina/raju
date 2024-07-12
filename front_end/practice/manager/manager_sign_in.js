let refx=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]{1,})(?=(.*[/W]){1,})(?!.*\s).{8,})/
// let password=document.getElementById("password")
// console.log(password);
// 
password.addEventListener("keyup", (e)=>{
    // console.log("raju");
    e.preventDefault();
    let p=document.getElementsByTagName("p")
    // console.log(p);

    let uppercase=/(?=.*[A-Z])/
    let lowercase=/(?=.*[a-z])/
    let numbers=/(?=.*[0-9])/

    let spechar=/(?=.*\W)/

    if(uppercase.test(password.value)===false){
        let a=document.createElement("span")
        // console.log(a);
        console.log('it should be contain upppercase');
        p[0].textContent="it should be contain upppercase"
        p[0].style.color="red"
 
    }
    else if(lowercase.test(password.value)===false){
        p[0].textContent="it should be contain lowercase"
       
        p[0].style.color="red"

    }
    else if(numbers.test(password.value)===false){
        p[0].textContent="it should be contain number"
        p[0].style.color="red"

    }
    else if(spechar.test(password.value)===false){
        p[0].textContent="it should be contain special charector"
        p[0].style.color="red"

    }
    else{
        p[0].textContent="password successfull"
        p[0].style.color="green"
        password.style.borderColor="rgb(0, 255, 17)"

    }


})


//=====================================
// let form=document.getElementById("form")
// // console.log(form);

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     let refx=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]{1,})(?=(.*[/W]){1,})(?!.*\s).{8,})/
    
// let password=document.getElementById("password")
//     // console.log("hii");
//     let input=document.getElementsByTagName("input")
//     console.log(input);
//     let span=document.getElementsByTagName("span")
//     console.log(span);
//     if(input[0].value===""){
//         span[0].style.visibility="visible"
//     }
//     else   if(input[1].value===""){
//         span[0].style.visibility="hidden"

//         span[1].style.visibility="visible"
//     } 
    

// })

let form1=document.getElementById("form")
console.log(form);

form1.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let refx=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]{1,})(?=(.*[/W]){1,})(?!.*\s).{8,})/
    let p=document.getElementsByTagName("p")
    // console.log(p);

    let uppercase=/(?=.*[A-Z])/
    let lowercase=/(?=.*[a-z])/
    let numbers=/(?=.*[0-9])/

    let spechar=/(?=.*\W)/
    

    // console.log("hii");
    let input=document.getElementsByTagName("input")
    // console.log(input);
    let span=document.getElementsByTagName("span")
    // console.log(span);
    if(input[0].value===""){
        span[0].style.visibility="visible"
    }
    else   if(input[1].value===""){
        span[1].style.visibility="visible"
    } 
    else if(uppercase.test(password.value)===false){
        let a=document.createElement("span")
        // console.log(a);
        console.log('it should be contain upppercase');
        p[0].textContent="it should be contain upppercase"
        p[0].style.color="red"
 
    }
    else if(lowercase.test(password.value)===false){
        p[0].textContent="it should be contain lowercase"
       
        p[0].style.color="red"

    }
    else if(numbers.test(password.value)===false){
        p[0].textContent="it should be contain number"
        p[0].style.color="red"

    }
    else if(spechar.test(password.value)===false){
        p[0].textContent="it should be contain special charector"
        p[0].style.color="red"

    }
    else{
        p[0].textContent="password successfull"
        p[0].style.color="green"
        password.style.borderColor="rgb(0, 255, 17)"
        console.log("success");

    
        let inputName=document.getElementById("name").value
        let inputPassword=document.getElementById("password").value
        // console.log(inputName);
        // console.log(inputPassword);
        if(inputName!=''&&inputPassword!=''){
            let name=inputName
            let password=inputPassword
            window.sessionStorage.setItem("name", name)
            window.sessionStorage.setItem("password", password)
            window.sessionStorage.setItem("id",7)

            window.localStorage.setItem("manager_email", name)
            window.localStorage.setItem("manager_password", password)
            
            console.log(window.localStorage.getItem("manager_email"));
            console.log("hi");
            console.log("name is " +window.sessionStorage.getItem("name"));
            console.log("name is " +window.sessionStorage.getItem("password"));

            // fetch("http://localhost:8080/managerall")
            // .then(e=>e.json)
            // .then(data=>console.log("data printed"))
//===============================================================================
let manager={
    "email":name,
    "password":password
}


async function customerById(){
    try{
      const customer = await fetch(`http://localhost:8080/managerbyid?id=${window.sessionStorage.getItem("id")}`, {
    
        method: 'GET',
        
        headers: {
          "Content-Type": "application/json",

        },
        


        //    body: JSON.stringify(customer),

    });
      let custdata =await customer.json();
      console.log(custdata);
      document.write("hi")
     
  
    //   cname.innerHTML = custdata.data.name;
    //   email.innerHTML = custdata.data.email;
    //   phone.innerHTML = custdata.data.phone;
    //   famcount.innerHTML = custdata.data.familyCount;
    //   now.innerHTML = custdata.data.works.length;
    //   profile.innerHTML = '<i class="fa-solid user2 fa-user-tie"></i>';
  
    //   dno.innerHTML = custdata.data.address.doorNo;
    //   lmark.innerHTML = custdata.data.address.landmark;
    //   street.innerHTML = custdata.data.address.street;
    //   district.innerHTML = custdata.data.address.district;
    //   state.innerHTML = custdata.data.address.state;
    //   pincode.innerHTML = custdata.data.address.pincode;  
    }
    catch(error) {
      alert("error occured while fetching customer by id")
    }
  }
  customerById();
    }else{
            
        }
        

    }

})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//=====================================
let form=document.getElementById("form")
// console.log(form);

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log("hii");
    let input=document.getElementsByTagName("input")
    console.log(input);
    let span=document.getElementsByTagName("span")
    // console.log(span);
    if(input[0].value===""){
        span[0].style.visibility="visible"
    }
    else   if(input[1].value===""){
        span[0].style.visibility="hidden"

        span[1].style.visibility="visible"
    } 
    

})
let refx=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]{1,})(?=(.*[/W]){1,})(?!.*\s).{8,})/
let password=document.getElementById("password")
// console.log(password);

password.addEventListener("keyup", (e)=>{
    // console.log("raju");
    e.preventDefault();
    let p=document.getElementsByTagName("p")
    // console.log(p);
    let span=document.getElementsByTagName("span")
    span[1].style.visibility="hidden"

    let uppercase=/(?=.*[A-Z])/
    let lowercase=/(?=.*[a-z])/
    let numbers=/(?=.*[0-9])/

    let spechar=/(?=.*\W)/

    if(uppercase.test(password.value)===false){
        let a=document.createElement("span")
        console.log(a);
        console.log('it should be contain upppercase');
        p[0].textContent="it should be contain upppercase"
        p[0].style.color="red"
        let h3=document.getElementsByTagName("h3")
        h3[0].style.visibility="hidden"
 
    }
    else if(lowercase.test(password.value)===false){
        p[0].textContent="it should be contain lowercase"
       
        p[0].style.color="red"

    }
    else if(numbers.test(password.value)===false){
        p[0].textContent="it should be contain number"
        p[0].style.color="red"

    }
    else if(spechar.test(password.value)===false){
        p[0].textContent="it should be contain special charector"
        p[0].style.color="red"

    }
    else{
        p[0].textContent="password successfull"
        p[0].style.color="green"
        password.style.borderColor="rgb(0, 255, 17)"

    }


})

let form1=document.getElementById("form")
// console.log(form);

form1.addEventListener("submit",async (e)=>{
    e.preventDefault()
    console.log("hii");
    let input=document.getElementsByTagName("input")
    console.log(input);
    let span=document.getElementsByTagName("span")
    console.log(span);
    if(input[0].value===""){
        span[0].style.visibility="visible"
    }
    else   if(input[1].value===""){
        span[1].style.visibility="visible"
    } 
    else{
        let inputName=document.getElementById("email").value
        let inputPassword=document.getElementById("password").value
        // console.log(inputName);
        // console.log(inputPassword);
        if(inputName!=''&&inputPassword!=''){
            let email=inputName
            let password=inputPassword
            window.sessionStorage.setItem("email", email)
            window.sessionStorage.setItem("password", password)
            // window.sessionStorage.setItem("id",7)
            console.log("hi");
            console.log("email is " +window.sessionStorage.getItem("email"));
            console.log("name is " +window.sessionStorage.getItem("password"));

let manager={
    "email":email,
    "password":password
}


async function customerById(){
    try{
    //   const customer = await fetch(`http://localhost:8080/managerbyid?id=${window.sessionStorage.getItem("id")}`, {
        const customer = await fetch(`http://localhost:8080/managerlogin?email=${window.sessionStorage.getItem("email")}&password=${window.sessionStorage.getItem("password")}`, {

    
        method: 'GET',
        
        headers: {
          "Content-Type": "application/json",

        },
        


        //    body: JSON.stringify(customer),

    });
      let custdata =await customer.json();
      let messege=custdata.messege
    //   console.log("password is "+messege);
      if(messege==='Incorrect Password'){
        let h3=document.getElementsByTagName("h3")
        console.log(h3);
        h3[0].innerHTML="Incorrect Password"
        h3[0].style.visibility="visible"
        // window.open("http://127.0.0.1:5500/images/manager/manager_sign_in.html")
      }
      else if(messege==='Incorrect Email'){
        let h3=document.getElementsByTagName("h3")
        console.log(h3);
        h3[0].innerHTML="Incorrect email"
        h3[0].style.visibility="visible"

      }
      else{
        console.log("succssfully");
        console.log(custdata);
        window.alert(messege)
        // document.writeln(custdata.messege)
        // document.write("<br>")
        // document.writeln("id : "+custdata.data.id)
        // document.write("<br>")
        // document.writeln("name : "+custdata.data.name)
        // document.write("<br>")
        // document.writeln("phone number : "+custdata.data.phone)
        // document.write("<br>")
        // document.writeln("email : "+custdata.data.email)
        // document.write("<br>")
        // document.writeln("gender : "+custdata.data.gender)
        // document.write("<br>")
        window.open("http://127.0.0.1:5500/images/manager/manager_index.html")
       
        

        

      }
    //   document.writeln(custdata.data)
    //   document.writeln(custdata.data.id)
    //   document.writeln(custdata.data.id)


     
  
    //   cname.innerHTML = custdata.data.name;
    //   email.innerHTML = custdata.data.email;
    //   phone.innerHTML = custdata.data.phone;
    //   famcount.innerHTML = custdata.data.familyCount;
    //   now.innerHTML = custdata.data.works.length;
    //   profile.innerHTML = '<i class="fa-solid user2 fa-user-tie"></i>';
  
    //   dno.innerHTML = custdata.data.address.doorNo;
    //   lmark.innerHTML = custdata.data.address.landmark;
    //   street.innerHTML = custdata.data.address.street;
    //   district.innerHTML = custdata.data.address.district;
    //   state.innerHTML = custdata.data.address.state;
    //   pincode.innerHTML = custdata.data.address.pincode;  
    }
    catch(error) {
    
        console.log("failed");
      alert("error occured while fetching customer by id")
    }
  }
  customerById();
    }else{
            
        }
        

    }

})



