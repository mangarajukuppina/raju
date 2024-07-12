let signup1= document.getElementById("signup1")
console.log(signup1);

signup1.addEventListener("click" , () =>{
    window.open("http://127.0.0.1:5500/front_end/front_end/Client/client-signin.html")
})

/***********Validations*************************/
let form=document.getElementById("form")
console.log(form);

let input = document.getElementsByTagName('input');

let signup = document.getElementById('signup');


// cheking the backend table if the data is already present in the backend table


  // for integration to the backend database 
  let fname= document.getElementById("cname")
  let email=document.getElementById("email")
  let pwd=document.getElementById("password")
  let phone=document.getElementById("phone")
  let gender=document.getElementById("gender")
  let age=document.getElementById("age")
  let id_proof=document.getElementById("proof")
  let dno = document.getElementById('dno');
  let street = document.getElementById('street');
  let city=document.getElementById('city')
  let landmark = document.getElementById('landmark');
  let district = document.getElementById('district');
  let state = document.getElementById('state');
  let pincode = document.getElementById('pincode');
  // let pvalid = document.getElementById('pvalid');
  console.log(dno);
  console.log(dno.value);
  

form.addEventListener("submit" , async (e) =>{
    e.preventDefault();
    // let input=document.getElementsByTagName("input")
    console.log(input);
    let span=document.getElementsByClassName("field")
    console.log(span);
    if(input[0].value === "" && input[1].value ==="" && input[2].value==="" && input[3].value==="" && input[4].value===""){
        span[0].style.visibility="visible"
        span[1].style.visibility="visible"  
        span[2].style.visibility="visible"
        span[3].style.visibility="visible"
        span[4].style.visibility="visible"
    }


    // window.sessionStorage.setItem("name", fname.value);
    // window.sessionStorage.setItem("email", email.value);
    // window.sessionStorage.setItem("pwd", password.value);
    // window.sessionStorage.setItem("phone", phone.value);
    // window.sessionStorage.setItem("gender", gender.value)
    // window.sessionStorage.setItem("age" , age.value)
    // window.sessionStorage.setItem("id_proof",id_proof.value)
    // window.sessionStorage.setItem("door_no", dno.value);
    // window.sessionStorage.setItem("street", street.value);       
    // window.sessionStorage.setItem("city", city.value);
    // window.sessionStorage.setItem("district", district.value);
    // window.sessionStorage.setItem("landmark", landmark.value);
    // window.sessionStorage.setItem("state", state.value);
    // window.sessionStorage.setItem("pincode", pincode.value);
    // console.log("your name is "+fname.value);
    // console.log("gender is "+gender.values);

 if(fname.value != "" && email.value !="" && pwd.value !="" && phone.value !="" && gender.value !="" && age.value !="" && id_proof.value !="" && dno.value !="" &&street.value !="" && city.value !="" && landmark.value !="" && district.value !="" && state.value !="" && pincode.value !="" ){
     const customer={
         'name': fname.value,
         'email': email.value,
         'password': pwd.value,
         'phone': phone.value,
         'gender':gender.value,
         'age': age.value,
         'id_proof': id_proof.value,
         'address' : {
             'door_no' : dno.value,
             'street' : street.value,
             'city' : city.value,
             'district' :district.value,
             'landmark' : landmark.value,
             'state' : state.value,
             'pincode' : pincode.value
           }
     }
     try {
         const response = await fetch("http://localhost:8080/client",
         {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(customer)
         });
        //    var res =await response.json()
        //    console.log(res);
        //    console.log(res.status);
        //    console.log(res.Object);
        console.log(response);
        if(response.ok){
            const data = await response.json();

            console.log(data);
            window.alert("Congratulations you have successfully created a new Client Account 🥳🥳🥳")
            window.open("http://127.0.0.1:5500/front_end/front_end/manager/manager_sign_in.html")

        }
   
        else {
            console.log("Hiiiiii");
             window.alert("Youre Already Registered Here Please Try To Login 😕😕😕");
             window.open("http://127.0.0.1:5500/front_end/front_end/Client/client-signin.html")
           }
          


         } catch (error) {
             window.alert("error", error);   
     }
 }else{
     window.alert("Please enter valid details..")
 }
},false)

let refex=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

// let str="Hello@123"
// console.log(refex.test(str));


pwd.addEventListener("keyup" , () => {
    // console.log("dfhfjdhfj");
    let p=document.getElementsByTagName("p")
    console.log(p);
    let uppercase=/(?=.*?[A-Z])/
    let lowercase=/(?=.*[a-z])/
    let number=/(?=.*[0-9])/
    let spchar=/(?=.*\W)/

    if(uppercase.test(pwd.value)===false){                 
        let a =document.createElement("field")
        console.log(a);
        // console.log("its should contain uppercase");
        p[0].texContent="its should contain uppercase"
    }else if(lowercase.test(pwd.value)===false){

        p[0].textContent="its should contain lowercase"
    }else if(number.test(pwd.value)===false){

        p[0].textContent="its should contain number"
    }else if(spchar.test(pwd.value)===false){

        p[0].textContent="its should contain special Character"

    }else{
        p[0].textContent="Password Created"
        p[0].style.color="green"
        input[2].style.borderColor = 'green';


        
    }
})




// signup.addEventListener("click", async (e) =>{
//     e.preventDefault();


      
    

// },false);

