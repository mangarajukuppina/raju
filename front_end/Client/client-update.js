let cid = window.localStorage.getItem('client_id');
let cname = document.getElementById('cname');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let phone = document.getElementById('phone');
let gender =document.getElementById('gender');
let age= document.getElementById('age');
let id_proof= document.getElementById('id_proof')
let dno = document.getElementById('dno');
let street = document.getElementById('street');
let landmark = document.getElementById('landmark');
let district = document.getElementById('district');
let state = document.getElementById('state');
let pincode = document.getElementById('pincode');

let signup = document.getElementById('signup');
console.log(window.localStorage.getItem("client_email"));
console.log(email);
let email_value=window.localStorage.getItem("client_email");
email.innerHTML=email_value;

let p = document.querySelector('p');
console.log(p);
    
pwd.addEventListener('keyup', ()=>{
  
    // console.log(pwd.value);
    // console.log('emleedhu');

    let upper = /[A-Z]/ ;
  let lower = /[a-z]/;
  let num = /[0-9]/;
  let spc = /[(?=.*-\/:-@\[-\`{-~]/;
  
  
    if(upper.test(pwd.value) === false){
      p.innerHTML='this field should contain upper case characters';
      p.style.color = 'red';
      pwd.style.borderColor = 'red';
    }
    else if(lower.test(pwd.value) === false){
      p.innerHTML='this field should contain lower case characters';
      p.style.color = 'red';
      pwd.style.borderColor = 'red';
    }
      
    else if(num.test(pwd.value) === false){
      p.innerHTML='this field should contain numbers';
      p.style.color = 'red';
      pwd.style.borderColor = 'red';
    }
    else if(spc.test(pwd.value) === false){
      p.innerHTML='this field should contain special characters';
      p.style.color = 'red';
      pwd.style.borderColor = 'red';
    }
   
    check();
  });


signup.addEventListener('click', async (e)=>{
  e.preventDefault();

  console.log(cid);

 

  // if(customer_id === ''){
  //   // p.innerHtml = "this field is required";
  //   p.innerHTML = 'this field is required';
  //   p.style.color = "red";
  // }
  // else{
  //   p.innerHTML = "";
  //   p.style.color = "green";
  // }
  if(cid != '' && check()){
    const client = {
      'id': cid,
      'name' : cname.value,
      'email' : email_value,
      'password' : pwd.value,
      'phone' : phone.value,
      'gender' : gender.value,
      'age': age.value,
      'id_proof' : id_proof.value
      // 'address' : {
      //   'doorNo' : dno.value,
      //   'street' : street.value,
      //   'district' :district.value,
      //   'landmark' : landmark.value,
      //   'state' : state.value,
      //   'pincode' : pincode.value
      // }
    } 
  
    try{
      const response = await fetch('http://localhost:8080/Client?',{
  
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
      });
      console.log(response);
      if(response.status===200){
        console.log('Update successful');
        window.alert('Update completed successfully...🥳🥳🥳');
        
        let x = await response.json();
        console.log(x);
        console.log(x.data);
        window.localStorage.setItem('client_id', x.data.id);
        window.localStorage.setItem('client_name', x.data.name);
        window.localStorage.setItem('client_email', x.data.email);
        window.localStorage.setItem('client_pwd', x.data.pwd);
        window.localStorage.setItem('client_phone', x.data.phone);
        window.localStorage.setItem('client_gender' , x.data.gender);
        window.localStorage.setItem('client_age', x.data.age)
        window.localStorage.setItem('client_id_proof' , x.data.id_proof)
        // window.localStorage.setItem('client_addressid', x.data.address.id);
        // window.localStorage.setItem('client_doorNo', x.data.address.doorNo);
        // window.localStorage.setItem('client_street', x.data.address.street);
        // window.localStorage.setItem('client_district', x.data.address.district);
        // window.localStorage.setItem('client_landmark', x.data.address.landmark);
        // window.localStorage.setItem('client_state', x.data.address.state);
        // window.localStorage.setItem('client_pincode', x.data.address.pincode);
     window.open("http://127.0.0.1:5500/front_end/front_end/Client/client_page.html");
      }
      else{

      window.alert(x.data.messege)
      }
    }
    catch(error){
      window.alert("error")
    }
  }
  else{
    alert('please enter the Client id ...');
  }
  
});

function check(){
  
  
let upper = /[A-Z]/ ;
let lower = /[a-z]/;
let num = /[0-9]/;
let spc = /[(?=.*-\/:-@\[-\`{-~]/;


  if(upper.test(pwd.value) === true && lower.test(pwd.value) === true && num.test(pwd.value) === true && spc.test(pwd.value) === true){
    p.innerHTML='';
    pwd.style.borderColor = 'green';
    return true;
  }
  if(pwd.value === ''){
    return true;  
  }
}