let update_btn=document.getElementById("update")


update.addEventListener("click", (e)=>{
  e.preventDefault();
   let updateForm=document.getElementsByClassName("container")
   console.log(updateForm);
   
})

let form=document.getElementById("form")
form.addEventListener("mouseover", (e)=>{
  e.preventDefault();
  let profile=document.getElementById("profile");
  profile.style.visibility="visible"
})




let profile=document.getElementById("profile")

profile.addEventListener("mouseleave", (e)=>{

    e.preventDefault();
   
    // console.log(profile);
    profile.style.visibility="hidden"
})

let edit=document.getElementById("edit");
// console.log(edit);
edit.addEventListener("click", (e)=>{
    e.preventDefault();
    let updateContainer=document.getElementsByClassName("container")
    updateContainer[0].style.visibility="visible"
   //==========================================================================
  
async function managerByemail(){
    console.log(window.sessionStorage.getItem("email"));
    try{
    //   const customer = await fetch(`http://localhost:8080/managerbyid?id=${window.sessionStorage.getItem("id")}`, {
        const manager = await fetch(`http://localhost:8080/managerbyemail?email=${window.sessionStorage.getItem("email")}`, {
           

    
        method: 'GET',
        
        headers: {
          "Content-Type": "application/json",

        },
        


        //    body: JSON.stringify(customer),

    });
    console.log("hi");
    const data = await manager.json();
  
    
      if(data.status===302){
        let input_id=document.getElementById("id");
        let input_name=document.getElementById("name");
        let input_email=document.getElementById("email");
        let input_phone=document.getElementById("phone");
        // console.log(input_phone);
        let input_password=document.getElementById("password");
        let input_experience=document.getElementById("experience");
        let input_door_no=document.getElementById("door_no");
        let input_landmark=document.getElementById("landmark");
        let input_street=document.getElementById("street");
        let input_city=document.getElementById("city");
        let input_district=document.getElementById("district");
        let input_state=document.getElementById("state");
        let input_pincode=document.getElementById("pincode");

        // console.log(input_name);
        // console.log(data);
        console.log(data.data.name);
        input_id.value=data.data.id
        input_name.value=data.data.name
        input_email.value=data.data.email
        input_phone.value=data.data.phone
        // console.log(data.data.phone);
        // console.log(data.data);
        console.log("password : "+data.data.password);
        input_password.value=data.data.password
        input_experience.value=data.data.experience
        input_door_no.value=data.data.address.door_No
        input_landmark.value=data.data.address.landmark
        input_street.value=data.data.address.street
        input_city.value=data.data.address.city
        input_district.value=data.data.address.district
        input_state.value=data.data.address.state
        input_pincode.value=data.data.address.pincode
     
        let form=document.getElementById("form")
        console.log(form);
        form.addEventListener("submit", async (e)=>{
            e.preventDefault();
            id=input_id.value
            name=input_name.value
            email= input_email.value
            phone=input_phone.value
            password= input_password.value
            console.log("password is "+password);
            experience= input_experience.value
            door_no= input_door_no.value
            landmark=  input_landmark.value
            street= input_street.value
            city=input_city.value
            district=input_district.value
            state=input_state.value
            pincode=input_pincode.value
            window.sessionStorage.setItem("name", input_name.value);

            let manager={
                "id":id,
                "name":name,
                "email":email,
                "phone":phone,
                // "password":password,
                "experience":experience,
                "address":{
                    "door_No":door_no,
                    "landmark":landmark,
                    "street":street,
                    "city":city,
                    "district":district,
                    "state":state,
                    "pincode":pincode
                }

            }
            try{
       
                const response = await fetch("http://localhost:8080/manager", //"http://localhost:8080/manager
   
         {
           method: "PuT",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(manager),
         });
         if(response.ok){
           const data = await response.json();
           console.log("data is "+data);
           window.alert("congratulation you have updated successfully.....")
           let profile_name=document.getElementsByTagName("h1")
           console.log(profile_name);
           profile_name[0].innerHTML=window.sessionStorage.getItem("name")
       
          
         }
         else{
           console.log("you have already an account");
           window.alert("you have already have an account with "+email_input.value);
           window.open("http://127.0.0.1:5500/images/manager/manager_sign_in.html")
         }
     
       }
       catch(error){
         console.error("error", error);
         window.alert("error", error);
       }



        })
        
    

        
      }
      
      else{
        window.alert(console.error())
 
    }
    //   document.writeln(custdata.data)
   

     
  
    }
    catch(error) {
    
        console.log("failed");
      alert("manager does not exist with email = "+window.sessionStorage.getItem("email"))
    }
  }
managerByemail();
    
//=========================================================================
})

let x=document.getElementById("x");
x.addEventListener("click", (e)=>{
  let profile=document.getElementById("profile")
    let updateContainer=document.getElementsByClassName("container")
    updateContainer[0].style.visibility="hidden"
    profile.style.visibility="hidden"

})
//===========================================================================


let delete_button=document.getElementById("delete")
console.log(delete_button);
delete_button.addEventListener("click", async (e)=>{
    e.preventDefault();
    try{
       
        const response = await fetch(`http://localhost:8080/manager?id=${window.sessionStorage.getItem("id")}`, //"http://localhost:8080/manager

 {
   method: "DELETE",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(manager),
 });
 if(response.ok){
   const data = await response.json();
   console.log("data is "+data);
   window.alert(`${window.sessionStorage.getItem("name")} Your Account deleteted successfully.....`)
   window.open("http://127.0.0.1:5500/images/manager/manager_sign_in.html")
  
 }
 else{
   console.log("you have already deleted account");
   window.alert("you have already deleted an account with "+email_input.value);
 
 }

}
catch(error){
 console.error("error", error);
 window.alert("error", error);
}

})
let req_btn=document.getElementById("req_btn")
console.log(req_btn);
req_btn.addEventListener("click", (e)=>{


  e.preventDefault();
  let form = document.getElementById("form")
  form.innerHTML="div"
})