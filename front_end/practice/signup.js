
//password validation
let refx=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]{1,})(?=(.*[/W]){1,})(?!.*\s).{8,})/
let str="hello$123"
// console.log(str);
let password=document.getElementById("password")
// console.log(password);

password.addEventListener("keyup", ()=>{
    console.log("raju");
    let p=document.getElementsByTagName("p")
    // console.log(p);

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
    }
    else if(lowercase.test(password.value)===false){
        p[0].textContent="it should be contain lowercase"

    }
    else if(numbers.test(password.value)===false){
        p[0].textContent="it should be contain number"

    }
    else if(spechar.test(password.value)===false){
        p[0].textContent="it should be contain special charector"

    }
    else{
        p[0].textContent="password successfull"
        p[0].style.color="green"
        password.style.borderColor="rgb(0, 255, 17)"

    }


})



//===============================================================
let form=document.getElementById("form")
console.log(form);

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
  
    let refx=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]{1,})(?=(.*[/W]){1,})(?!.*\s).{8,})/
let str="hello$123"
// console.log(str);
let password=document.getElementById("password")
let p=document.getElementsByTagName("p")
// console.log(p);

let uppercase=/(?=.*[A-Z])/
let lowercase=/(?=.*[a-z])/
let numbers=/(?=.*[0-9])/

let spechar=/(?=.*\W)/


    let input=document.getElementsByTagName("input")
    console.log(input);

    let span=document.getElementsByTagName("span")
    console.log(span);
    for(let i=0;i<input.length;i++){

        if(input[i].value===""){
            if(i==6||i==7||i==5){
                continue;
            }
            if(i>=8){
                span[i-3].style.visibility="visible"
            
            }else{
            span[i].style.visibility="visible"
            }
        }
        else  if(i==5||i==7||i==6){
                continue;
            }
           
            else if(i>=8){
                console.log("i values "+i);
                console.log("span values "+i-3);
                span[i-3].style.visibility="hidden"
            }
        
    
    

    
    else if(uppercase.test(password.value)===false){
        let a=document.createElement("span")
        console.log(a);
        console.log('it should be contain upppercase');
        p[0].textContent="it should be contain upppercase"
        p[0].style.color="red"
    }
    else if(lowercase.test(password.value)===false){
        p[0].textContent="it should be contain lowercase"

    }
    else if(numbers.test(password.value)===false){
        p[0].textContent="it should be contain number"

    }
    else if(spechar.test(password.value)===false){
        p[0].textContent="it should be contain special charector"

    }

    else{
         span[11].style.visibility="hidden"
    }

    
                                                       
       let  name_input =document.getElementById("name")
       let  phone_input =document.getElementById("phone")
       let  email_input =document.getElementById("email")
       let  password_input =document.getElementById("password")
                       //pending
       let input=document.getElementsByName("gender")
       let gender;
       for(let i=0;i<input.length;i++){
           if(input[i].checked){
                gender=input[i].value
               console.log(gender);
           }
       }
       
       let  experience_input =document.getElementById("experience")
       let  door_no_input =document.getElementById("door_no")
       let  landmark_input =document.getElementById("landmark")
       let  street_input =document.getElementById("street")
       let  city_input =document.getElementById("city")
       let  district_input =document.getElementById("district")
       let  state_input =document.getElementById("state")
       let  pincode_input =document.getElementById("pincode")

       window.sessionStorage.setItem("name", name_input.value);
       window.sessionStorage.setItem("phone", phone_input.value);
       window.sessionStorage.setItem("email", email_input.value);
       window.sessionStorage.setItem("gender", gender);
       window.sessionStorage.setItem("passsword", password_input.value);
       window.sessionStorage.setItem("experience", experience_input.value);
       window.sessionStorage.setItem("door_no", door_no_input.value);
       window.sessionStorage.setItem("landmark", landmark_input.value);
       window.sessionStorage.setItem("street", street_input.value);
       window.sessionStorage.setItem("city", city_input.value);
       window.sessionStorage.setItem("district", district_input.value);
       window.sessionStorage.setItem("state", state_input.value);
       window.sessionStorage.setItem("pincode", pincode_input.value);
    //    console.log("your name is "+name_input.value);
    


       const manager={
        "name" : name_input.value,
        "phone" : phone_input.value,
        "email" : email_input.value,
        "password" : password_input.value,
        "gender":gender,
        "experience" : experience_input.value,
        "address":{
            "door_no" : door_no_input.value,
            "landmark" : landmark_input.value,
            "street" : street_input.value,
            "city" : city_input.value,
            "district" : district_input.value,
            "state" : state_input.value,
            "pincode" : pincode_input.value


        }
        
        
        
       }
       try{
       
               const response = await fetch("http://localhost:8080/manager", //"http://localhost:8080/manager
  
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(manager),
        });
        if(response.ok){
          const data = await response.json();
          console.log("data is "+data);
          window.alert("congratulation you have registred successfully.....")
          window.open("http://127.0.0.1:5500/images/manager/manager_sign_in.html")
        }
        else{
          console.log("you have already an account");
          window.alert("you have already have an account with "+email_input.value);
        }
    
      }
      catch(error){
        console.error("error", error);
        window.alert("error", error);
      }

    }
  

},false)

//////////////////////////////////////////////////////////////////////////////////////////////////////
//password validation
// let refx=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]{1,})(?=(.*[/W]){1,})(?!.*\s).{8,})/
// let str="hello$123"
// // console.log(str);
// let password=document.getElementById("password")
// // console.log(password);

// password.addEventListener("keyup", ()=>{
//     console.log("raju");
//     let p=document.getElementsByTagName("p")
//     // console.log(p);

//     let uppercase=/(?=.*[A-Z])/
//     let lowercase=/(?=.*[a-z])/
//     let numbers=/(?=.*[0-9])/

//     let spechar=/(?=.*\W)/

//     if(uppercase.test(password.value)===false){
//         let a=document.createElement("span")
//         console.log(a);
//         console.log('it should be contain upppercase');
//         p[0].textContent="it should be contain upppercase"
//         p[0].style.color="red"
//     }
//     else if(lowercase.test(password.value)===false){
//         p[0].textContent="it should be contain lowercase"

//     }
//     else if(numbers.test(password.value)===false){
//         p[0].textContent="it should be contain number"

//     }
//     else if(spechar.test(password.value)===false){
//         p[0].textContent="it should be contain special charector"

//     }
//     else{
//         p[0].textContent="password successfull"
//         p[0].style.color="green"
//         password.style.borderColor="rgb(0, 255, 17)"

//     }


// })



//===============================================================
// let form=document.getElementById("form")
// console.log(form);

// form.addEventListener("submit",async (e)=>{
//     e.preventDefault()
//     let input=document.getElementsByTagName("input")
//     console.log(input);

//     let span=document.getElementsByTagName("span")
//     console.log(span);

//     if(input[0].value===""){
//         for(let i=0;i<=11;i++){
//         span[i].style.visibility="visible"
//         }

//     }

//     else   if(input[1].value===""){
//         span[0].style.visibility="hidden"
//         for(let i=1;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[2].value===""){
//         for(let j=0;j<=1;j++){
//             span[j].style.visibility="hidden"
//         }
//         // span[0].style.visibility="hidden"
//         // span[1].style.visibility="hidden"
//            for(let i=2;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[3].value===""){
//         for(let j=0;j<=2;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=3;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[4].value===""){
//         for(let j=0;j<=3;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=4;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     // else   if(input[5].value===""){
//     //     span[5].style.visibility="visible"
//     // }
//     // else   if(input[6].value===""){
//     //     span[6].style.visibility="visible"
//     // }
//     // else   if(input[7].value===""){
//     //     span[7].style.visibility="visible"
//     // }
//     else   if(input[8].value===""){
//         for(let j=0;j<=4;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=5;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[9].value===""){
//         for(let j=0;j<=5;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=6;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[10].value===""){
//         for(let j=0;j<=6;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=7;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[11].value===""){
//         for(let j=0;j<=7;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=8;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }

//     else   if(input[12].value===""){
//         for(let j=0;j<=8;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=9;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[13].value===""){
//         for(let j=0;j<=9;j++){
//             span[j].style.visibility="hidden"
//         }
//         for(let i=10;i<=11;i++){
//             span[i].style.visibility="visible"
//             }
//     }
//     else   if(input[14].value===""){
//         for(let j=0;j<=10;j++){
//             span[j].style.visibility="hidden"
//         }
//         span[11].style.visibility="visible"
//     }

//     else{
//         span[11].style.visibility="hidden"
                                                       
//        let  name_input =document.getElementById("name")
//        let  phone_input =document.getElementById("phone")
//        let  email_input =document.getElementById("email")
//        let  password_input =document.getElementById("password")
//        let  gender_input =document.getElementsByName("gender")                     //pending
//        let  experience_input =document.getElementById("experience")
//        let  door_no_input =document.getElementById("door_no")
//        let  landmark_input =document.getElementById("landmark")
//        let  street_input =document.getElementById("street")
//        let  city_input =document.getElementById("city")
//        let  district_input =document.getElementById("district")
//        let  state_input =document.getElementById("state")
//        let  pincode_input =document.getElementById("pincode")

//        window.sessionStorage.setItem("name", name_input.value);
//        window.sessionStorage.setItem("phone", phone_input.value);
//        window.sessionStorage.setItem("email", email_input.value);
//        window.sessionStorage.setItem("passsword", password_input.value);
//        window.sessionStorage.setItem("experience", experience_input.value);
//        window.sessionStorage.setItem("door_no", door_no_input.value);
//        window.sessionStorage.setItem("landmark", landmark_input.value);
//        window.sessionStorage.setItem("street", street_input.value);
//        window.sessionStorage.setItem("city", city_input.value);
//        window.sessionStorage.setItem("district", district_input.value);
//        window.sessionStorage.setItem("state", state_input.value);
//        window.sessionStorage.setItem("pincode", pincode_input.value);
//        console.log("your name is "+name_input.value);
//        console.log("gender is "+gender_input.values);


//        const manager={
//         "name" : name_input.value,
//         "phone" : phone_input.value,
//         "email" : email_input.value,
//         "password" : password_input.value,
//         "experience" : experience_input.value,
//         "address":{
//             "door_no" : door_no_input.value,
//             "landmark" : landmark_input.value,
//             "street" : street_input.value,
//             "city" : city_input.value,
//             "district" : district_input.value,
//             "state" : state_input.value,
//             "pincode" : pincode_input.value


//         }
        
        
        
//        }
//        try{
       
//                const response = await fetch("http://localhost:8080/manager",
  
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(manager),
//         });
//         if(response.ok){
//           const data = await response.json();
//           console.log("data is "+data);
//           window.alert("congratulation you have registred successfully.....")
//           window.open("http://127.0.0.1:5500/images/manager/manager_sign_in.html")
//         }
//         else{
//           console.log("you have already an account");
//           window.alert("you have already have an account with "+email_input.value);
//         }
    
//       }
//       catch(error){
//         console.error("error", error);
//         window.alert("error", error);
//       }

//     }
  

// },false)

// //============================================



