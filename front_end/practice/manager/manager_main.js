let manager=document.getElementById("manager")



manager.addEventListener("mouseover", (e)=>{
  e.preventDefault();
    let profile_name=document.getElementsByTagName("h1")
    // console.log(profile_name);
    profile_name[0].innerHTML=window.sessionStorage.getItem("name")
    let manager_email=document.getElementById("manager_email");
    console.log(manager_email);
     manager_email.innerHTML=window.sessionStorage.getItem("email")

   
    let profile=document.getElementById("profile")
    // console.log(profile);
    profile.style.visibility="visible"
    manager.style.cursor="pointer"
    profile.style.zIndex="1"
    

})

let form=document.getElementById("form")
form.addEventListener("mouseover", (e)=>{
  e.preventDefault();
  let profile=document.getElementById("profile");
  profile.style.visibility="visible"
  // form.style.zIndex="1"
})




let profile=document.getElementById("profile")

profile.addEventListener("mouseleave", (e)=>{

    e.preventDefault();
   
    // console.log(profile);
    profile.style.visibility="hidden"
})
//=======================================================================================================================
//manager details

async function managerdetails(){
  try{
  //   const customer = await fetch(`http://localhost:8080/managerbyid?id=${window.sessionStorage.getItem("id")}`, {
      const manager = await fetch(`http://localhost:8080/managerbyemail?email=${window.sessionStorage.getItem("email")}`, {
         

  
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",

      },

  });
 
  const manager_data = await manager.json();
  // console.log(manager_data);
  
    if(manager_data.status===302){
      let manager_details_input=document.querySelectorAll(".detail")
      manager_details_input[0].innerHTML=manager_data.data.name
      manager_details_input[1].innerHTML=manager_data.data.email
      manager_details_input[2].innerHTML=manager_data.data.phone
      manager_details_input[3].innerHTML=manager_data.data.experience
      manager_details_input[4].innerHTML=manager_data.data.address.door_No
      manager_details_input[5].innerHTML=manager_data.data.address.landmark
      manager_details_input[6].innerHTML=manager_data.data.address.street
      manager_details_input[7].innerHTML=manager_data.data.address.city
      manager_details_input[8].innerHTML=manager_data.data.address.state
      manager_details_input[9].innerHTML=manager_data.data.address.pincode


      
    }
       else{
        window.alert(manager_datamessege)
       }
   
     }
     catch(error){
      
       window.alert("error", error);
     }

    }
managerdetails();
//========================================================================================================================
//update manager
let edit=document.getElementById("edit");
// console.log(edit);
edit.addEventListener("click", (e)=>{
    e.preventDefault();
    let updateContainer=document.getElementsByClassName("container")
    updateContainer[0].style.visibility="visible"
    updateContainer[0].style.zIndex="1"
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
    console.log(data.data.name);
    
      if(data.status===302){
        // ==============================================================================
        
        
        // ===================================================
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
        // console.log("password : "+data.data.password);
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
            // console.log("password is "+password);
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

// ==================================================================================
//delete manager account


let delete_button=document.getElementById("delete")
// console.log(delete_button);
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

//============================================================


let req_btn=document.getElementById("req_btn")
// console.log(req_btn);
req_btn.addEventListener("click" , async (e)=>{

  let clientRequist=document.getElementById("clientRequist")
  clientRequist.style.visibility="visible"
  // clientRequist.style.display="block"
  let table=document.getElementById("table")
  table.style.display="block"
  let tr=document.getElementById("tr");
  
async function managerAll(){
  try{
  //   const customer = await fetch(`http://localhost:8080/managerbyid?id=${window.sessionStorage.getItem("id")}`, {
      const customer = await fetch(`http://localhost:8080/clietntrequists?building_id=${window.localStorage.getItem("building_id")}`, {

  
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",

      },
      


      //    body: JSON.stringify(customer),

  });
  
 
    let custdata =await customer.json();
    console.log(customer);
    console.log(custdata);       //list of managers
    
    if(custdata.status===302){
   
    custdata.data.map((manager)=>{
      // let tr=document.getElementById("tr");
      let table=document.getElementById("table")
    
      let tr = `
      <tr>
      <td class="booking_id">${manager.booking_id}</td>
      <td>${manager.cost}</td>
      <td>${manager.entryDate}</td>
      <td>${manager.exitdate}</td>
      <td><button id="pending" class="pen">${manager.payment}</button></td>

      

      </tr>
      
      `
      table.innerHTML += tr
    
    //   // console.log(manager.id);
    })
//==============================================================================================================

let req_btn=document.querySelectorAll("#pending")
console.log(req_btn);
console.log(req_btn[0]);
console.log("hiii");

  function click(pending_btn, i){
  pending_btn.addEventListener("click",async (e)=>{
  
    res=pending_btn.toggleAttribute("first")
    console.log(res);
    if(res===true){
      pending_btn.style.color="blue"
      pending_btn.style.backgroundColor="rgb(0, 255, 0)"
      pending_btn.innerHTML="Requist Sent"
      let booking_id=document.getElementsByClassName("booking_id")[i].innerHTML
      let msg="accepted"
      try {
        const response= await fetch(`http://localhost:8080/acceptclientbooking?id=${booking_id}&msg=${msg}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          }
        })
        console.log(response);

        let clientBooking=await response.json();
        console.log(clientBooking);
        console.log(clientBooking.data);
        console.log(clientBooking.status);
        if(clientBooking.status===200){
          window.alert(clientBooking.messege);
          // window.location.reload();
        }
        else{
          window.alert(clientBooking.messege)
        }
        
      } catch (error) {
        window.alert(error)
        
      }


      
    }
    else{
      pending_btn.style.color="white"
      pending_btn.style.backgroundColor="red"
      pending_btn.innerHTML="Pending"
      //=================================================================================================
      let booking_id=document.getElementsByClassName("booking_id")[i].innerHTML
      let msg="pending"
      try {
        const response= await fetch(`http://localhost:8080/acceptclientbooking?id=${booking_id}&msg=${msg}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          }
        })
        console.log(response);

        let clientBooking=await response.json();
        console.log(clientBooking);
        console.log(clientBooking.data);
        console.log(clientBooking.status);
        if(clientBooking.status===200){
          window.alert("client requist rejected successfully....")
        }
        else{
          window.alert(clientBooking.messege)
          // window.location.reload();
        }
        
      } catch (error) {
        window.alert(error)
        
      }

      //======================================================
    }
    
  
  })

}
for(let i=0;i<req_btn.length;i++){
    click(req_btn[i], i)
  

}
    
  
  
    }
    else{
       window.alert("client booking req not present");
    }

  //   document.writeln(custdata.data)
 

  }
  catch(error) {
  
      // console.log("failed");
    alert("error occured while fetching customer by id")
  }
}
managerAll();

})

//====================================================================================================================
let details=document.getElementById("details")
details.addEventListener("click", async(e)=>{
  e.preventDefault();

  try{
    //   const customer = await fetch(`http://localhost:8080/managerbyid?id=${window.sessionStorage.getItem("id")}`, {
        const manager =  await fetch(`http://localhost:8080/managerbyemail?email=${window.sessionStorage.getItem("email")}`,  {

    
        method: 'GET',
        
        headers: {
          "Content-Type": "application/json",

        },
        


        //    body: JSON.stringify(customer),

    });
      let manager_data =await manager.json();
      let messege=manager_data.messege
    console.log(manager_data.status);
    console.log(manager_data.data);
    if(manager_data.status===302){
      let details_form=document.getElementById("details_from")
      // details_form.style.visibility="visible";
      details_form.style.display="block"
      
      let input_id=document.getElementById("manager_id");
        let input_name=document.getElementById("manager_name");
        let input_email=document.getElementById("manager_email2");
        console.log(input_email);
        let input_phone=document.getElementById("manager_phone");
        let input_password=document.getElementById("manager_password");
        let input_experience=document.getElementById("manager_experience");
        let input_door_no=document.getElementById("manager_door_no");
        let input_landmark=document.getElementById("manager_landmark");
        let input_street=document.getElementById("manager_street");
        let input_city=document.getElementById("manager_city");
        let input_district=document.getElementById("manager_district");
        let input_state=document.getElementById("manager_state");
        console.log(input_state);
        let input_pincode=document.getElementById("manager_pincode");
        //inserting
        input_id.value=manager_data.data.id
        input_name.value=manager_data.data.name
        input_email.value=manager_data.data.email
        input_phone.value=manager_data.data.phone
        // console.log("password : "+manager_data.data.password);
        input_password.value=manager_data.data.password
        input_experience.value=manager_data.data.experience
        input_door_no.value=manager_data.data.address.door_No
        input_landmark.value=manager_data.data.address.landmark
        input_street.value=manager_data.data.address.street
        input_city.value=manager_data.data.address.city
        input_district.value=manager_data.data.address.district
        input_state.value=manager_data.data.address.state
        input_pincode.value=manager_data.data.address.pincode



    }
    else{
     window.alert(" manager_data.messege")
    }

     
  
    }
    catch(error) {
    
        console.log("failed");
      alert("error occured while fetching Manager by email")
    }

  

})
//==========================================================================================================
let x1=document.getElementById("x1")
x1.addEventListener("click", (e)=>{
  let details_from=document.getElementById("details_from")
  details_from.style.display="none";
  

})
//=================================================================================================

let table=document.getElementById("table")
table.addEventListener("mouseleave", (e)=>{
  table.style.display="none"

})
//=====================================================================================================
//workspaces
let c=0;
let noOfFloors=0;
let noOfWorkSpaces=0;

async function building(){
  

  const building = await fetch(`http://localhost:8080/buildingbymanagerid?manager_id=${window.sessionStorage.getItem("id")}`, {
  
    
  method: 'GET',
  
  headers: {
    "Content-Type": "application/json",
  
  },
  
  
  });
  
  
  let buildingdata =await building.json();
  let floor_no=0;
  let floor_id=0;
  // console.log(customer);
  // console.log(buildingdata);       //building
 
  window.localStorage.setItem("building_id", buildingdata.data.id);
  // console.log(buildingdata.data);
  
 
  
  // console.log(buildingdata.data.floors);
  let floors=buildingdata.data.floors;
  let n=0;
  floors.map((flr)=>{
    floor_id=flr.id
    floor_no=flr.floor_Number;
    noOfFloors++;
    // console.log("floorid is "+floor_id);
    // console.log("floor_no is "+floor_no);

    // console.log(flr);
    // console.log(flr.spaces);
    let spaces=flr.spaces;
    spaces.map((sp)=>{
      let button;
      let image;
      noOfWorkSpaces++;
      n++;
      // console.log("n value "+n);
      // console.log("id is "+sp.id);
    
      
      // console.log(sp.id);
      // console.log(sp.capacity);
      // console.log(sp.type);
      // console.log(sp.pricePerday);
      // console.log(sp.availability);
      if(sp.availability==="yes"){
         button="Available"
       
      }
      else{
         button = "Not Available"
      }
      //type of workspace images
      if(sp.type==="meetingRoom"){
        image=`data:image/jpeg;base64,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`
      }
      else if(sp.type==="cafeteria"){
        image=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA7gMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABFEAACAQMDAgQDBQYEAwUJAAABAgMABBEFEiEGMRNBUWEiMnEUI4GRoQcVQrHB0VJicvAWM4IkJUPh8RdTVHOEorLC0v/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEFAAb/xAApEQACAgICAQMDBAMAAAAAAAAAAQIRAyESMQQTIkEyUXEFI0JhFDOB/9oADAMBAAIRAxEAPwBoikVyR5juMVMAD2zmsijHiZxVtFraoK7Km3ntXhSrcq81ptokCVkX4qsAcVo42Df5VXVrvxfhaEx+hzmjigW6LleN5HP50B6t6mt+nrOMuw+0z5ES+mO5PsK5Jq2stf3DTNq13vY5wspA/IUEpUFFWd5yB34qTTRbaZbGWItPfyE5kk5EWfJc1w7Q+u9W0uREe5Nzb5wVuBnA+o5rqPTnUlh1DaySWzFZYh97AR8SH19x70Kaka1QbklMrF3fcx7knmtCQfMVHBZzR26vJZzwhvi+QkVowQf+Jt/1cV6jUyQ1kMvgXCSD5Rww9j3qPYzfI4NagPkg4xQPTN7AV/F9m1a8gkXuQQcfMvlWmgJusZIsHMU7rz7/ABf1op1FCZYLbUkIDx/cTKe7f4T/ADpSaK7a+mWJbtt6h9lpIox5ZYt51PNe8YnaGPhHwRg586uIg86C2CyxQDx0nRlY5E7hmx9RR2L7xVI9M18d5sWs0q+5djftRq42occGiAu0t7dU4+FfWg9/cmGEsCTgZxjuKE6bqJ1Oe2W6TwLaVgWcvyq+4x/vNdT9Lw1icvuBklseYI4rfRWurmNGmvD92HGSF9fyqulxxxgVvqjPqF79xkW8Q2RLjjA86ms9DmcqT8vnzXVlt6FR0rZoZWC5qPxpZI3MZxjirOpxraYghHiOPnbPCemfep9OskWzlaVxyPTtXowtm8tFWwiCncwLHvk0xWs48McdqGxvDEmI4wxxyxP9KuW5zGT/AJc02OmBLaLBnz6UM1DVUt38PnJqwTS7cus+rGM5yo9Kw8kD9Y1m/LlbVPpmg32nqJuRt/Wnu10AzKJWwSTRY6RZqih4gCByQaOKddGOSQBjh+9NWli4qVIl3HAqUJVdiAfOmGqPFW7pMbPxqDbRIFlS7X7hqGtJJEMjkelFL4hLd2bgAcmhZZJR92wb2Hejj0Azjv7Tb973qiVGPwW8axqoPbzP6mk/Jox1VMJ+odRkz3nYf0/pQg96W9sP4LVjcJFJiRC6t5V1b9m2kD7Q+qnehMZWFfIg4zn8q510lp6X2roJdvhIN5Vhww4GP1rtOjiLwoYMiNFYbfSo82XjOKRXhw8sbkxiS5uIuVkK/RjVa96oSwlSK8u0DyDKiRQ3HvxUtyywQSSsPkQk8elJ9jpNnew/b9ViM91OAxV24UHsAKp8nKsa0hHj4nkexrttZs9Q3CODT7lkI3ER/wBq0lEfjGSCHwAy8qrEg/meKWbixi0dBfacCiRHDKG4+h9jTDNe2kFgl7cTJBbsgYvK2AM+VJw5llsZmwvG1T0ZPam9tZ7UHDuN0Z/zr2/rS5Z701aMMNrMrRnnzo7pur6dqLf933kM7DyQ8/lQK6tZRqJhSUxOJAyyAZKg+YzTJ06FRCDxmS7SI/Kwov4IihIHkMVQ02xMT+Jc3D3MinKM6hce2BV3UXKWjMCBx5V8/wCR4vLLKSK4z9qItOh8UTyEdvhGf1qax6ahGjRT+E5uCoYgDzzntUvSjeNpqGQAkyMQfUZp3stqRHA7V0fHw8IKIE5VsX7RobYgTlkx5EUQi1GO6k+zWJ+PGTIw4UevuaGauTNdP9eKqXa/Z9MuZV4cRHkHFHfFnnHkgneS2M221tW3mByXIOckjk58zU0a4spz5hTSL0Xdyy6peRyj5YVYHPfmneGTNvKo/iBpl2ClSKQaiFs33f4UIaQKoJPFSnUBF8prmZf1LDhlTd/goWCTWgk7YBodYskN5P4sZ+Mjkj0qsdXBYDOfat5dSaSEyMSAvYZ4o8HnwzQlKKejJYWmk/kPR6isK7UAI9zQzWddljWPZGDk+RoB+9ycnOKjFytzzI2Mdqb4/nerri0ZPx+OxsjIznNSg1XjwKlBrrERFdL8n41Dtqzcc7faottEjGVbnasTbwNvv2oddWVmmkXd5JGA8JDh1OCMUcWON3CyJ4inOUI70qftPk/dPRN/LbnwhKRB4fHxF/T6DNOxv2MRkXuR88XUxnuJJj/4js/5nNawQvcTLHEu5mOABW9tay3k6QW6F3PlXQOlemRYGWaZ0lmK4XA+X8KnyScYuRRjipSUT3RdJXTtLR8jxmc7qd+ktt6/3i7hGM4PrVXRtPS8jgs5ow7PN8RzyFHLH8s036d09YaXdvc2okUumzaXJAGajw4ZZpcvsy7NljiXD+iPWQTpV0oYAtGVBJxjNJqadaJrMd5d32zMS749mMcDAyKIftJ1b7FY/ZUYp4h+Js43Y/hH5jml3R5n1WzhvLib/tPhlXjZsLJgkZ/kab5TuQvxFS6DGj6PaQQ6tFDdeMXjfEZTGcjIP8qUuuEv9UbTNHtISVhBLc4Bb1PpgUe1yf8AdGi397BKftM0Hh5DZ2lvhGPoCfype6cvzIrTXEpeQsd7Mck5/vmpMbcX6nwU5IxkuD7K+l9La3Z/e20oaWL7wBCcqR6HzrrixqyJI6jxNgycc+tK3SsFldagyRWs0TBxIGDkA4B7inSVfM9qpxyc9skyxjClEHO5jcEnio9X3S6e6xEFmHHP51ZntGnTjcB69q1utGuEsl8GVss437u2zzx70mWOXOwE9F/pSMLZQqMdyP1puBIt3IHlXOR1XpPTDJa33jSSqDlYFDFfrzU1z+1zpz7KUVNQDkf/AA//AJ05I89hi5fNw2e+a11TnT5VHmmKSP8A2k6JPPhVvmdjgAW/J/DNNUeo/b7H4LWeLevAmUKSPpk1PKLTHJqgJ06VttfkTIBkiK4+hzTnZv3Hlz/OkaxUw9RJnHLsP0prguSC3sxpv8QUrYGvr1vjQZG1iP1qpJdMwzuNRXrkySn/ADE/rVQvlW9q+QeJJv8AJ1YvRLBOz3aLvx9aPTQTzWvhQDc7ehpc0u0a6vcjstOdjqFlZbVl2hx613fEglgafyS5pNztABun9VjT7yDbn3rG0u+hiX7s5NONx1FYOgLOMD3qjLqkUrfd4K+RzV0McIKkTucpdl5GqVTxVVeGIqZTXRIyRua8rzNeivHgb1DeDTtFvLxmKLDEXLAZIA71yzqm+frCz0fRdNlLJNcPcM7KRsVVxuPtya6Z1ividK6tHhTm1fg+fGa5z0tcRqt7qpjEZQpaRDHZcbmC+5JX8qOEm/agJQj9bYf0Xpm00uFbS100tGcb7qRh4jn1/wDKpdQ04wuvhSgBThDKMEn0P960k1WcHbv2nvjParb3Ud3abrpgV+RyRxz2z7Uc1x66Bi7/ACQjTpb+FZdNuFtr6CcS4PIyBgjjyPrRjpvVbmfx7e/OXik2Kx75x2Pr9aVptAkR57jQ7ybTLtT8SRkFC3llTng+oqLQ9TuINblh12HwLi4UbnQfA7j+JT5ZHcewqbHjljbUeh2TJHIly7HlujtJur6W81cC9lcjw0mAKQ4z8q+p8ye+BSV1B0YbHVkfSZPCtJ5P+XglYX8segP5V0K2uHlt1lJ3FDtcjz9DU1zEjDw5DtEgDL/lYc5/MA0rIr0OxS47OM/tBg1Cw0KK3vYGVzOGZ/L4fT8TQTpO1kvJpI4Qr/d/Ix/3zXZv2gaLNrXTNwkyIJIzuj2McYx3PauVdGxC11Y27FlnMmxX/wALAef4etTtccfEdycpcjqXTun22naYML4cu3Mru+79T2H9qS9U6+vrPqB/BtYLnRlwBIud7ADls/X2o71o8tv0rdlC4bgAxk5we/byrnwv7W26ahi2o05bhXQMGr2LLLitC+Cdts6F0V1g/UGpSWt5pbWLAFoi0oYPg9scc0830W60bbwcVxLpLqqBNeguNQQQoh4O7jn0HtXdLS4huIFkGHikXKn1zVKu9im1/F2cr1Hou1eR7iaW5eSRiWJcc/pVFeg7O4yBJcduwcf2rpWrI0cAMYVMvtXI5zXiz3tvPHFDZ2xdo2YvL7Y7AVm7pHvg5zoeg2OmzvHY3ERuckMW+JxzjGTTnYWBWKO4kv8AxXOcIQAv5+tRXmtSG4vYH06xEsCjmJOSScf1qXR+mZ45/tJungtsZWz37g3oT6UErsONUA2tZIuoobh3fww5IHbuKMJKPEdiQPi7VnUEJhtpJRgNGK51qGtTx3UYEhAbvzSMsppe1FviYoT3JjVefNJ+J/WqanLSL716bgNZo7HBMYOTVeKVWupMN5V8/KEt2h1rpBXQ2WGZ5Hz24qlrUm+43Z4q7axk2+/3oZqZ3ygCutiVY4omb22Vb0OkCE9mIo3p/wAEe3ccY9ar69aGO2tFxyzLU0YKjjiurPFxlRJGdoeA1SqeKixW608SSqcmt6jj71LmhZoF6uJ/4Y1QetpL/wDjXLOjz49miyf8m2d5APLcWx/v6V1jqZfE6f1JByWtZMD/AKTXFuiLthDqMBONp3YP1/8AWnYHsVl+kakl8SU89zVmWMyWs0Ub4lkiYBTxvwOD70GtJSbnGPPmjN7tNikwyHhmUmn5NMVDor9Na413bwt4irdxKApc4Eqf4W9xTHcrY6vbjxod3II5xtP+IH1HqPKuWafcGO4eRBkCViMDOMmnLSdSuLkkSQptAALM+WUEjsMef18qXOKW0FCV6DayalYCWPTbtgynMu4DJXGQQDx5HP1NHNL1CXU4IXlZSVJA2HaeapTCJHyByEG4Y8h70L0G6MAuo158GVhx7EiuX5UnGSkujpeMlKLi+zpkSCW0McnxBlwR3zmuL6loc1n1dcwxuyuj+NGW53ef9a6ZpWqEgbycUv8AXLeJq2nX9qhcRqY3I4zznFBlkmrBi3Eit5pIgiS4zIdrAKOfrSh+0DSbT/hYXtptQRyDcinjuQRTbGRKrrbuGkyHCE8ken40B1dtNurSTSriDwmlOdkjYKtnnGPT3FHgnBY/7Mljk/8AoladpkX7q0u73PFdNcopYt8JyQQTmuo31idP0uN4LqYOqb2ZHwo47Ae9BNP0ZZ7OGG3uLBFs5FkQySEtuUgj5c0Rupry6tZ/HWKS4BxiLkED8uM02Ulk2DFPHok0WWWYPNMZJChGBJJ8xPfntxgfnRh9SFnJ4sdrLPKIzsSA+IR2zkCqOktLbQoGQbyhZzt86vaRI81+ZlRVABUkDGTn0pTaTPdlC2eWfUrm6ubeS3eQI4ScbSecDj6ii7ag6TCJcB+7gHkegqj1bDdXhkitFYtIqIrKvnuOeah0mBbaBYzIzOw+NmPJP1NbdmpUT67cg6bPuOGPAJNcn1ywnkuGuoySQcKqjI9vp508dSvnUACzeFtB2A8ZoNvhn1mCOQeHAwwwXuT5U3GoPUj3KUXcTeRbq60xBa2zySCPGEGTkAUHa6vLCcGezuAw4ZStFr6U6XLM8MkirkbVDYNDorq71GbLb/di3AopeJiyq29A+tODob4btV0lHxt3c80Aur1DeAbh3FWxcR/ZjFes+1R8Kp5mgiyRreDEK4BBHHash4UZSST0j0s1Jjr1PdQvJpsKYLA5PHtWmwBQSaBz6gtzqUX+Vaty38QiVdwyD2zV3lQSlaJ8DfHZ0MnFeqaTJuu9PjzkliBnCc1d0fqmLVI5XgjkAjcKQ4xnjNRLJEe8UkNad6kzVHTbproOWAG2ruaKweitqIBsrgN8vhnP0xXz503OE6leMHEdxCy49+4/lX0Ncp4sLoezKV/MV81W+LXqG1IJBRsN7EEg03F8MVk+R5s1Ox5OxLKoPvV/U5zBaXScfHD4ifUc1UuporO0gWV1RQC5z7mpbjVtOu9OlS18KaSOPBUNhwMcnmqct9iMbFLS5FhsljQb+2SfM0220x+zxsCq7/Me3NLGnQJGBx/EO9ONnb26A4UcDI9qGTXEKHYfWeaaxLlgSV2qXHJ45oRpt/BZdSXMEhVFu40nQsMjLDn/AO4NV+1lMlvJz8IZG/Xn+lVr/RrXWI1yyw3kLNHHcdsDuAw8xya53kwUofgt8abjP8nQtHEUsOYkWKQfOmN2PoT5UlajPc6Zq1yL633QXExK85Dc8Eehqx0/qeoaYfs2owkTqPun3/BL7BuxoVH1bZ3l5dWOqxqVMpyj5BU5zj8PWufKTnDS6LVBQnv5B/UY1O11O11HRkkubZoisvhJ8hDcE/gf0qlP+7OorjdIY7HVWUx+MThZT5Bx3DCmzwBHEZNKnE0bH4reRwCfo3/pWs46WVS15axm9jkDH7VMqSK3HuCfLuT5c1qya0tmvGl30AX06A6lOVjiSJIUURKRvDg/Mfw86ltLe4ivIbYzujucsGxgKfL8acdG6i0G3gWO3XT7fauzMsyFmC8AFskk/nS9rPUun6hcLPHpJSVWx4qbgGGcDnABH966GNyyRtI586jIt3NpqEtzE9tdQjb8JR2xt9+KJabYdSW95I8ZgdJP4wxXP1BoTBeXCKksUjof4HMakfhkc0ctbvW2txI98zRlS6sIVHAOM8+9J9JsLnRS6hs+qb7TrmK2WO3uVdfDeVhtxnnnHc1rpdhfRW8dvq0luble7xt8OMNzg/Tt70N6in1+Z44U1G4lEnCkqoJPcjgfSg/7kvGl8a71GRyq72Z3Zse+P6mglin1dI2Lt7D2taNLdFZ7aZHwnAIxkA+tKUlnNa63ai9t5Ih4gyWXGRnypp0dTplmginndJFLdso3rgYPP9xV66vLi8s3glZnjCjw2dRlc8jBPlRqJrkvgQOoYbtrmRobeWSFCcEc5FD7PUnRdgRkIXJBFP1tHNCHhaX5V2ngEGgFxpyTyOq8MMjOKpjK1QuW3YAt9YkmlKSrjHnirVs0SK0sxGT51HNpBimdcfEKge3CwbXT9TTFroC/uVL6/JmY2xIPlWqXV3Iu7GfrW0MESvkxCrsBjdfhQACnKdAPYKjA+UYANO3QTEwXp7qJVyP+mkRJk3gZOf8ACBk/pTb0rY64YZVtLVYY5nB8W44xgf4a5UYu7OnOSqjpWj3UcTSqxwTggYq5LqIA+ED65oHo+kzWavLqF+ZGbvwFA+lSz3em2CF/FI89zPxVDZLS+QhHcTSyqTuVAwOT2riXVyxr1VvG1V8XwxtGM55J/WulSazqOqAwaHaSSFsjxnG1B75NKs/7MtWvdV8S9vYFicmSSSNizBvQDH+8UeOdNIXOFoFXUbzXjPcKW5+7RvTypl0tIZLRg4WOOM7TgAKfw8/xoHbRSQkx3TFp4mK7iPnA9fet5pJY3SGJiVU7yB/Ex8/wFdSUeSIF7XoIT9NNFbRT2DNPvfJXADADzxVyxiZonD5Vx3VuDVdNaLXUNvahiVyHJxh2weB7Zo1Zaja3UQW4iQOBtOHwfx/Wp5QfQ1SRHpB3i5jA+JV4rTW7mcadNd2ZAdSGGD2KnBBorp9hapdGSzuWYspzHIMcHzzWi9P3EsN0txLBGjySBTu3fC3t65zUeXJj3GTKscMnaRU6f1u7voij26spYDd3BP07/pQzrjpD/iB/tdiv2bUlG1lbKpPjsMns1M3TcS6NbSwGWKRWl3Bw3JHHeir3zTxSLboXYqQoQg5PoK+eyedLDnqEHX3Ol6byQqYjdE9Kz2+kTjXL++tpZJisNumM7VA+L4vc/pTdqPRej6lZ23264u0uApQSykFnX0IAwQP0zUNraulpbR6skKzldhAzvVx35xj9a2k025Fss0mpBIrdnCeDG0rOp55VTnP0zVK8qUs+qsCWOPHjyB1t0X0xBvsNRvIZLlBj4IlQqvljz7edVNU6Z6dtF/7tvArtkHlTiorrrPpOO/t7O5a7ulVWinM9rtw+Qd3x4YfQVJqsehXcay6XLENxPCOy7QBxlT/Suj62WLSldEThB7iMljq9lDY2sMN2JzbqqMkRYEHYV3Z4AI9j5mtZdTMyOsV3c2+6OVPu2AXLOWD49ecfSg1je29q8CvB4sXhLDs8RfDUqR8QGN2WGcmjy6naRJhNMGzduIZ8+vt7gfhTVK+gKKevailzDOgnfaYwAVbYAxwzkE8980uS9R2fjSmWG5dvFaQGSTcNrFiMA8YG78MVbuNcg0uVo3sElDOWwSAQDHtwOOOcmhV1r3TpVXl6eMku7LKJBjHwnIPr83GMcnmiSsyReuuq7Gy06AWc5lkJIwmcxkbeTux3xjHaqGla0t/IVlMplC5dpW4btjgccY7gDy9Kqw9SaBHMkqdMxho2BQiT0xjPHrnn6CjuiaraXMz3Y0JYSyANOzAs2AuMDGfI8+9bKKoyL2ez3RS33E4ye9VbEAI8jcuxzWuqX8d5Lcm3gEFugCrHkHb+VZZbhG3I4HnQpUhl7B9wTJdOe/lVtraMWw3AVQyTK5HPNXZmItx9PWifxQCQLa3j+P4R2rX7GIFUL5jNSbzsYnzq5EUwN4zx60TbSMirDlp0zouhrmKWRXHclwST+IrS46lttPDLHPJIf85H8gBQOy0zWdbk/wC13kVpEe+6QBiPzpy0TpLR7AiRgLufGS7sCM/SkNJDgBbTa/r7ZsrcwwMeZpuPy/2aPWHRUKbZdQunup++XX4PypnQYUBVAXyAHat+fQ148VRaTRRhIZ41Udl8AYH5EVCYb4NxdW4/+mP/APdX2yfWvEiycnjNajxzPXbT7Jq08coGSdwZRgHPNBtQkWKZVj5G35h3BNOfXtpsu4pR/wCJHkH3HB/p+dI1wjNExbyNdbE+UEznTXFs0iiaArJzgEggd+BXtteTrI+9FIGSuRyK9huvAKSEZCsDyPXvTFptrZ3kTHxVMr8kOMEfSvSnx7PRjfQNs9SlckxlzIeGY8HPt6irkuq3PKOWbH+IkfpWt9D9lvFKurKRx9R6V7eyxu29lRnIHw45rnzwRk2zoQ8lpJFR9UWM/eafFIO27Gf60xdDvbXmrWr+AsSoxb4I25/XFAL2xsUmi/d90PEUAv8A4S3mBT50G6XHiRjYsqINwXBxzXHz5HzUYL5Ogn+22xnutMjluzMJvEzyIX+UH1BpP1uF01ESLM8cdooLWwXG4g5BB8s06OyW84jgO6VlyxduwqWe2tryPFxDHLvXD7+QR7jzoJeMpO1pk0ZtIA6Lf6LrMJvYbG3W8f8A5ysqlgw98c1anSwdsPZwHA84x/al/wDd2jaPdS2yWkMM5O8G2GwnPbtV0RW93Dvj1qS1c8FZApx9ciqFNy9qlTM9NpXRZk0TRJVZ2soYXbnxEAQj3zVkWNje2hSFlljVseIjYOR7ilHqDpPqR2jk07UIryHcN6/I+MjPqDxRTo5TpNxqGiyEgRt4sQI7BucfqfypyUorbsC030UepulBdwKYZpBKp4MhBGPTtmlN/wBnd9eL8N14BH8Sse30rqz8jHvXqkRjczDHnurVkkgnBM4lokGh9Oa5N/xAdQ1CSEgRQCABM99x+Ln2pk0nWLC5v7qO0aeRXzJEJ4trKPQkHFSdVpazXswBTxo8hXAB3KfLPqK51ayXeh303BKyrtDHvz6VXDH6sdvYly4PSH2SCK0svs08ga4uZVkOwg4B8h9O1b6rL9ktwEC5C84pJtrdn1S3kN3kjH1oz1HNcTLJGkmFUbaY8FSSsHnpuibTLjLrJjcS3Y0a1SWOS2CxqAwGTilvpK2ZCzzvvCrnNZe6vs8QAZycA0MsdTo8pe2zwMZAVUnGe9M+m2iC0QkKzEck0n2tyNqluMmnG12C1jJbGRS/IfGkHhSbHAaXp7nLWFmT55gU5/Svf3JpB5OmWWf/AJC/2qwhxUoJ9KVQbKn7n0wfLYwr/pGP5Vumi2R5WJl/0yuP61ejTPpU4wOPwrwIO/clqRnxLtP9F3IP/wBq1bSoIRlb3UlPli7cn9aISy7PhAy3p6VGqFn3yHn0rTRS6us3itrd2ubiX4mwJmDbRxnHHvSXOGz2G0H0ro3WTD7LCH4GH/pXP2+JyhbG31H610vFl7CLPHYu6lcPaCNUA8R+CpJ49c4qXS57w3InW6Qk43QFPuzj+R96EapN9pvGmU/ADtQZ5wPOtbKfwJNxbNNlG0JUqOgz3lk0KPcrDayr/Gx+AH/V5fjVGLXNOs9QSSd0u4XBR3gIbZkd6ExairRSGbBjIwVPYilq0UKzrCMqZDsGOceVTTj8MoUvsda0PSbP7FImnapbSpNypfG9PPse3pU7x6505qcN1pELXtvtKyRgcSA9848/SuealZy2cNpMxKlvlUHhsnA/X+VZ0x1DPbdWwW+o3jDT/EKSF5CgUY7kj0/KofQS90WVer8NHZrLX9G1W6Wa7a40u7A2vDeKY1Y+zHg/gaM29hcMimK9iZT2KHOf1rnf7QNUuNKtbddGuGeSX4mWVvFUrj3/AAqx9he30rT7hLqa2u7iEPMLc+Gu7AzwKB4ovbC5S+A9rnSJjvJNTgee4mK8xyPkZHoPKkLUV1S61OCzsBNDetkBZGKb1HPOaPPf6zBBIy6vO4RCcOqnt+FL2k9Xa3qhmlSfw2hYAkxJkg+hxWf4sJPkmEvIlFcWjpfRWn3WlWMyXsSRyTy+KyI24A4AOPQcVV17UbRNYs7qzeOR0kME8sTAqOPlJHmOTSbPqGoyw5vn+0KoyVkmcq3/AEjAoVZX9xqNnbu6pEsefCggXaic+Qpy8d1Qp5U3s7Gi5IP5fSrktnbmzke4QOiqTg/SgvTV4t9pNvNuyVUKfXij1wBJYSxnsy1MlTGvZwCbUjDfyeKpRRJlD/h5+U1vNHHcXGNqvDMu6J/8J8xRTrnQ28Z762AH/vV9/WqXQ9tHdxmG5ICAty38NVwnStCWt7Ac0D2d7HIzA4YZAq1qsrSQvIOzEUS6htLW3uRFbszPGOdwpRvLmb5Cx25zirMfvpipe3Q3dPBF0u4l8wMfpS5qUuEAUdzRDS7wRaHKm742oVehhIgPmKFJ82zXXEmtg0lxbxDuSMU0Xl01qEiJ5Ape0QrJq8G75VGan6iut2pNsb4QBSsi5ZKYUNQ0dY09pbi3EjzuD46x4GMYIJ9PaicMT7lH2iXkZ/h9FPp71lZSAiZo5FRiLmbjGPl9fpVeSWaKeNBM7B2cHdjyPHlWVleZqLsCKAT51sDmsrKFdhHNOqLy4vNRuIZpD4cUTOoXjkHgfSqev6dHb9MfbUlm8aVlRiWGMEc+VeVlVeOyfOITxrnt5VXIw1ZWV0mc9klyxEIQH4WHNTdMoJr+NH5CkEV7WVNn6ZTh7Gb9pLGPqGK1TiG3CpGo8gAMfzpE1AkXc0gJyXOfyrKypkv2xrfuHno5pNS069F/K8/2ZNkRc5KrgHGa6JrjHfaxj5VhGK9rKll9RTHoGOgkgmDdvDb+RpZ6Xhji+17B3iUn86ysr0ejZfUF34wMAg571JCFjt/gRRtxjArKysTdhSSGHouQrdXsA/5YO4D0PH96b5HIQgHuKyspMjYid1HCjQSAjgg5rnegsVvniHyGQcfjWVlMx9GZO0WuryYtQvdhwdy0p3qjcKysrp+P9JJk7ZpaEmFxngNW9w7Oy7j27V5WUS7BfRf6fONQY+YSq2pEvqFxu8nIrKykS/2MYvoR/9k=`
  
        
      }
      else if(sp.type==="drinking"){
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8rnNFBLSdo_sDs7T3Hrqawut4mdsFrGmfQ&usqp=CAU"
  
        
      }
      else if(sp.type==="training"){
        console.log(sp.type);
        image="./images/383545728_332825302532131_6645812720957788960_n.jpg"
  
        
      }
      else if(sp.type==="sleeping"){
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGzj6R5u1M2eYkiFAKKZQDmEZ7sL7cltk2Q&usqp=CAU"
  
        
      }
      else if(sp.type==="shopping"){
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMf378PpowZ0S57PWBWV6ejmxdg7_8XG190g&usqp=CAU"
  
        
      }
      else if(sp.type==="privateoffice"){
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTPtMI97Z0CWJV-ZngFHGWTPnPvx_dMKhQQ&usqp=CAU"
  
        
      }
      else {
        image="data:image/jpeg;base64,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"
      }
      
    
  
    //           }
      //=================================================================================
      let inner=document.getElementById("inner")
    
      inner.innerHTML+=`
      <div class="workspace">
      <img class="workspace_img" src=${image} alt="">
  
      <h3 class="worksapce_name" id="type">${sp.type}</h3>
      <p class="workspace_p">A range of ready-to-use fully-eqipped offices with everything you need to get started</p>
    
      <br>
      <h2 class="price">INR <span id="amount">${sp.pricePerday}</span> PER DAY</h2>
      <label class="label">id = <span id="workspace_id">${sp.id}</span></label>
      <br>
      <label class="capacity">floor_id = <span id="capacity">${floor_id}</span></label>
      <label class="capacity">floor_no = <span id="capacity">${floor_no}</span></label>
      <label class="capacity">capacity = <span id="capacity">${sp.capacity}</span></label> 
      <br>
      <label class="squarefeet">square_feet = <span id="squarefeet">${sp.squareFeet}</span></label>

   
      <button class="book" id="available"> ${button}</button>
      <br></br>
      <button id="edit_btn"><a href="http://127.0.0.1:5500/front_end/images/manager/updateworkspace.html" target="blank">Edit Workspace</a></button>
     
     
      
    
  
      </div>`
      if(n==4||n==8||n==12||n==16||n==20){
        let outer=document.getElementById("outer")
        outer.innerHTML+=`<div class="raju">${inner.innerHTML}</div>`
        inner.innerHTML=``;
      }
     
      //===============================================================================

            
      
    })
    let raju=document.getElementsByClassName("raju")
    let outer=document.getElementById("outer")
   
    let inner=document.getElementById("inner")
    inner.style.visibility="hidden"
    // console.log(raju);
    let building_details_inp=document.querySelectorAll(".detail")
    building_details_inp[10].innerHTML=buildingdata.data.building_Name;
    building_details_inp[11].innerHTML=buildingdata.data.rating;
    building_details_inp[12].innerHTML=noOfFloors;
    building_details_inp[13].innerHTML=noOfWorkSpaces;
    
  })
  let outer=document.getElementById("outer")
  outer.innerHTML+=`<div class="raju">${inner.innerHTML}</div>`
  


  function edit(edit_btn, i){
    edit_btn.addEventListener("click", (e)=>{
      e.preventDefault();
      edit_btn.style.color="red"
      let amount=document.querySelectorAll("#amount")[i].innerHTML
      let type=document.querySelectorAll("#type")[i].innerHTML
      let workspace_id=document.querySelectorAll("#workspace_id")[i].innerHTML
      let capacity=document.querySelectorAll("#capacity")[i].innerHTML
       let squarefeet=document.querySelectorAll("#squarefeet")[i].innerHTML
      let available=document.querySelectorAll("#available")[i].innerHTML
      console.log(amount);
      console.log(type);
      console.log(workspace_id);
      console.log(capacity);
      console.log(squarefeet);
      console.log(available);
      window.localStorage.setItem("amount", amount)
      window.localStorage.setItem("type", type)
      window.localStorage.setItem("workspace_id", workspace_id)
      window.localStorage.setItem("capacity", capacity)
      window.localStorage.setItem("squarefeet", squarefeet)
      window.localStorage.setItem("available", available)

      window.open("http://127.0.0.1:5501/front_end/images/manager/updateworkspace.html")
      
      
     
    })

  }
  
  let edit_btn=document.querySelectorAll("#edit_btn")
  // let workspace_delete_btn=document.querySelectorAll("#workspace_delete_btn");
  // console.log(workspace_delete_btn);
 
  for(let i=0;i<edit_btn.length;i++){
    edit(edit_btn[i], i)
   
    
    
  }
 
  
  }
  building();
  //====================================================================================================================
 //delete workspace
let delete_worksapce_btn=document.getElementsByClassName("main_button")
// console.log(delete_worksapce_btn);
delete_worksapce_btn[1].addEventListener("click", (e)=>{
  let delete_form=document.getElementById("delete_workspace")
  // console.log(delete_form);
  delete_form.style.display="block"
  delete_form.style.visibility="visible"

})

let delete_form=document.getElementById("delete_workspace")
delete_form.addEventListener("mouseleave", (e)=>{
  delete_form.style.display="none"

})

delete_form.addEventListener("submit", async(e)=>{
  e.preventDefault();
  
  let input=document.getElementById("id2")
  if(input.value===""){
    let span=document.getElementById("span")
    span.style.display="block"

  }
  else{
    let worksapce_id=input.value;
    console.log(worksapce_id);
    try {
    
        const workspace =  await fetch(`http://localhost:8080/deleteWorkSpace?workSpaceId=${worksapce_id}`,  {

    
        method: 'DELETE',
        
        headers: {
          "Content-Type": "application/json",

        },

    });
    let workSpace_data=await workspace.json()
    // console.log(workSpace_data);
    console.log("status "+workSpace_data.status);
    if(workSpace_data.status===200){
      console.log("deleted");
    window.alert("WorkSpace id "+worksapce_id+" deleted successfully")
       
       window.open("http://127.0.0.1:5501/front_end/images/manager/manager_index.html")
    }else{
      window.alert(workSpace_data.messge)
      // console.log(workSpace_data.data);
      console.log("not deleted");
    }

      
    } catch (error) {
      
    }

  }
})
//=====================================================================================================================
//add worksapce
let main_button=document.getElementsByClassName("main_button")[2]
// console.log(main_button);
main_button.addEventListener("click",()=>{
  window.open("http://127.0.0.1:5501/front_end/images/manager/create_workspace.html")
})

//log out
let logout=document.getElementById("loc")

logout.addEventListener("click", (e)=>{
  window.open("http://127.0.0.1:5501/front_end/images/manager/manager_sign_in.html")

})