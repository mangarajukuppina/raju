// let form=document.getElementById("form")
// console.log(form);

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     // console.log("hello");
//     let name=document.getElementById("name").value
//     // console.log(name);
//     let password=document.getElementById("password").value
//     // console.log(password);

//     window.localStorage.setItem("name", name)
//     window.localStorage.setItem("password", password)
//     console.log(window.localStorage.getItem("name"));

//     //https://indiqube.com


// })

let loc=document.getElementById("loc")
console.log(loc);
// console.log(loc);
loc.addEventListener("mouseover", ()=>{
    // console.log("raju");
    window.fetch("state.json")
    .then((Date)=>Date.json())
    .then((res)=>{
        console.log(res);
        res.map((data1)=>{
            // console.log(data1);
            // console.log(data1.name);
            console.log(data1.name.default);
            let ol=document.getElementById("ol")
            console.log(ol);
            let li=
           ` <li>${data1.name.default}</li>`
            ol.style.border="2px solid red"
            ol.innerHTML+=li
            ol.style.display="block"
            ol.style.overflow="scroll"
        
            

        })
    })
})

// main.addEventListener("mouseleave", ()=>{
//     let ol=document.getElementById("ol")
//     console.log(ol);
//     ol.style.display="none"

// })

let ol=document.getElementById("ol")
console.log(ol);
ol.addEventListener("mouseover", ()=>{
    ol.style.display="block"
    
})

ol.addEventListener("mouseleave", ()=>{
    ol.style.display="none"
})


let client=document.getElementById("client")
client.addEventListener("click", ()=>{
    window.open("http://127.0.0.1:5500/front_end/front_end/Client/client-signin.html")

})
let manager=document.getElementById("manager")
console.log(manager);
manager.addEventListener("click", ()=>{
    console.log("hi");
    window.open("http://127.0.0.1:5500/front_end/front_end/manager/manager_sign_in.html")

})
let admin=document.getElementById("admin");
admin.addEventListener("click", ()=>{
    window.open("http://127.0.0.1:5500/front_end/front_end/admin/admin_signin.html")

})