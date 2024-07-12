let form=document.getElementById("form")
console.log(form);

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    let input=document.getElementById("manager_id")
    let span=document.getElementsByTagName("span")
    console.log(span);
    console.log(input);
    if(input.value===""){
        span[0].style.visibility="visible"
    }
    else{
        span[0].style.visibility="hidden"
        window.sessionStorage.setItem("manager_id", input.value);
        console.log(window.sessionStorage.getItem("manager_id"));

        async function managerById(){
            try {
                const manager=await fetch(`http://localhost:8080/managerbyid?id=${window.sessionStorage.getItem("manager_id")}`,{
                    method:"GET",
                    headers:{
                        "Content-Type": "application/json",
                    }
                })
                console.log("hi");
                if(manager.status===302){
                    console.log("Hii");
                let manager_data =await manager.json();
                console.log(manager_data);
                }
            } catch (error) {
                window.alert("error")
                
            }
        }
        managerById();
       
    }
   
})
