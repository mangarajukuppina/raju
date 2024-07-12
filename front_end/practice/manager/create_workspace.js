let form=document.getElementsByClassName("form")[0]
console.log(form);
form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    let input=document.getElementsByTagName("input")
    console.log(input);
    if(input[0].value===""){
        let span =document.getElementsByTagName("span")
        span[0].style.visibility="visible"
    }
   else if(input[1].value===""){
        let span =document.getElementsByTagName("span")
        span[1].style.visibility="visible"
        span[0].style.visibility="hidden"
    }
    else if(input[2].value===""){
        let span =document.getElementsByTagName("span")
        span[1].style.visibility="hidden"
        span[0].style.visibility="hidden"
        span[2].style.visibility="visible"
    }
    else if(input[3].value===""){
        let span =document.getElementsByTagName("span")
        span[3].style.visibility="visible"
        span[1].style.visibility="hidden"
        span[0].style.visibility="hidden"
        span[2].style.visibility="hidden"
    }
    else{
        let type_input=document.getElementById("type")
        let available_select_input=document.getElementById("available_select")
        let floor_id=input[0].value
        let workspace={
            "pricePerday":input[1].value,
            // "managerId":window.sessionStorage.getItem("id"),
            "capacity":input[2].value,
            "squareFeet":input[3].value,
            "type":type_input.value,
            "availability":available_select_input.value
            
        }
        // let type_input=document.getElementById("type")
        //  let available_select_input=document.getElementById("available_select")
        //  let floor_id=input[0].value
        // let worksapce={
            
            
            // "pricePerday":input[1].value,
            // // "managerId":window.sessionStorage.getItem("id"),
            // "capacity":input[2].value,
            // "squareFeet":input[3].value,
            // "type":type_input.value,
            // "availability":available_select_input.value
            


        // }
       
        // console.log(worksapce);
        try{
       
            const response = await fetch(`http://localhost:8080/workspace?managerId=${window.sessionStorage.getItem("id")}&floorId=${floor_id}`, //"http://localhost:8080/manager

     {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(workspace),

     });
     if(response.ok){
       const data = await response.json();
       window.alert(data.messege)
        window.open("http://127.0.0.1:5501/front_end/images/manager/manager_index.html")
     }
     else{
        const data = await response.json();
        window.alert(data.data)
         
     }
 
   }
   catch(error){
     console.error("error", error);
     window.alert("error", error);
   }

    }
})