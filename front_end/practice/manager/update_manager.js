
window.sessionStorage.setItem("email","sursh@gmail.com")
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
        console.log(data);
        console.log(data.data.name);
        input_id.value=data.data.id
        input_name.value=data.data.name
        input_email.value=data.data.email
        input_phone.value=data.data.phone
        console.log(data.data.phone);
        input_password.value=data.data.password
        input_experience.value=data.data.experience
        input_door_no.value=data.data.address.door_No
        input_landmark.value=data.data.address.landmark
        input_street.value=data.data.address.street
        input_city.value=data.data.address.city
        input_district.value=data.data.address.district
        input_state.value=data.data.address.state
        input_pincode.value=data.data.address.pincode


    

        
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