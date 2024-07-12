let id_input=document.getElementById("id")
let price_input=document.getElementById("price")
let type_input=document.getElementById("type")
let available_select_input=document.getElementById("available_select")
let capacity_input=document.getElementById("Capacity")
let squarefeet_input=document.getElementById("squarefeet")

// console.log(id_input);
// console.log(price_input);
// console.log(type_input);
// console.log(available_select_input);
console.log(capacity_input);
console.log(squarefeet);
console.log(window.localStorage.getItem("workspace_id"));
id_input.value=window.localStorage.getItem("workspace_id")
price_input.value=window.localStorage.getItem("amount")
capacity_input.value=window.localStorage.getItem("capacity")
squarefeet_input.value=window.localStorage.getItem("squarefeet")


type_input.innerHTML+= `<option value=${window.localStorage.getItem("type")} selected>${window.localStorage.getItem("type")}</option>`
available_select_input.innerHTML+=`<option value="available" selected>${window.localStorage.getItem("available")}</option>`

let update_btn=document.getElementsByClassName("button")
update_btn[0].addEventListener("click", async (e)=>{

    e.preventDefault();
    // let workspace={
    //     "capacity":id_input.value,

    // }
    // console.log(id_input);
    // console.log("cap "+capacity_input.value);
    // console.log("id "+id_input.value);
    // console.log("price "+price_input.value);
    // console.log("ava "+available_select_input.value);
    // console.log("squ "+squarefeet_input.value);
    // console.log("type "+type_input.value);

    let workspace={
        id:id_input.value,
        capacity:capacity_input.value,
        type:type_input.value,
        pricePerday:price_input.value,
        availability:available_select_input.value,
        squareFeet:squarefeet_input.value

        
    }
    console.log(workspace);
    try {
        let response=await fetch("http://localhost:8080/workspace",
        {

        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(workspace)
        })

        let dbWorkspace=await response.json()
        console.log(dbWorkspace);
        if(dbWorkspace.status===200){
            window.alert(dbWorkspace.messege)
            window.open("http://127.0.0.1:5501/front_end/images/manager/manager_index.html")

        }
        else{
        window.alert(dbWorkspace.messege)


        }
        
    } catch (error) {
        window.alert(error)
        
    }
    let response=await fetch("http://localhost:8080/workspace")
    
    

})