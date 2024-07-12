let dbcost=window.localStorage.getItem("cost")
let booking_id=window.localStorage.getItem("booking_id")
console.log("clietn id is "+window.localStorage.getItem("client_id"));
console.log(dbcost);
console.log("clietn booking "+booking_id);
let payment_mode="";

let input=document.getElementsByTagName("input")[0]
  input.value=dbcost;

let form = document.getElementsByTagName("form")[0]
form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let input=document.getElementsByTagName("input")
    // console.log(input[1]);
    if(input[0].value===""){
        let p=document.getElementsByTagName("p")[0]
        p.innerHTML="this field should not be empty"
        p.style.display="block"
        
    }
    else  if(input[1].value===""){
        let p=document.getElementsByTagName("p")[1]
        p.innerHTML="this field should not be empty"
        p.style.display="block"
        
    }
    else if(input[0].value!=dbcost){
        console.log("raju");
        // input[0].value=dbcost
        let p=document.getElementsByTagName("p")
        p[0].style.display="none"
        p[1].style.display="none"
        let span=document.getElementsByTagName("span")[0]
        span.innerHTML=`Your booking cost : ${dbcost}`
        span.style.display="block"
    }
    else{
        payment_mode=input[1].value;
        console.log("payment is "+payment_mode);
        try {
            let response=await fetch(`http://localhost:8080/paymentbooking?client_id=${window.localStorage.getItem("client_id")}&client_Bookin_id=${booking_id}&payment=${payment_mode}&workSpaceCost=${dbcost}`,  {

    
            method: 'POST',
            mode: 'cors'

          
          
    
    
            //    body: JSON.stringify(customer),
    
        });
        console.log(response);
        let client_booking=await response.json()
        console.log(client_booking);
        if(client_booking.status===200){
            window.alert(client_booking.messege)
            window.open("http://127.0.0.1:5500/front_end/front_end/Client/client_page.html")
        }else{
            window.alert(client_booking.messege)
        }

            
        } catch (error) {
            console.log(error);
            
        }
    }

})