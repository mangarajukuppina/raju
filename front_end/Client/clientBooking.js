let form=document.getElementsByTagName("form")[0]
// console.log(form);
console.log(window.localStorage.getItem("workspace_id"));
console.log(window.localStorage.getItem("client_id"));

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let entry_date=document.getElementsByTagName("input")[0]
    let exit_date=document.getElementsByTagName("input")[1]
    // console.log(date);
    console.log(entry_date.value);
    console.log(exit_date.value);


    let clientBooking={
        entryDate:entry_date.value,
        exitdate:exit_date.value
    }
    console.log(clientBooking);

    try {
        let response=await fetch(`http://localhost:8080/bookoneworkspaces?workspaceid=${window.localStorage.getItem("workspace_id")}&clientId=${window.localStorage.getItem("client_id")}`, //"http://localhost:8080/manager
  
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientBooking),
        });
        console.log(response);
        let clientBooking1=await response.json();
        console.log(clientBooking1);
        if(clientBooking1.status===200){
            window.alert(clientBooking1.messege)
            window.open("http://127.0.0.1:5500/front_end/front_end/Client/client_page.html")
        }
        else{
            window.alert(clientBooking1.messege);

        }
        
    } catch (error) {
        console.log(error);
        
    }

})