document.getElementById('datasave').addEventListener("click", dataSave);


async function dataSave() {
    


let name = document.getElementById("name").value;
let genderMale = document.getElementById("male").value;
let genderFemale = document.getElementById("Female").value;
let gender = document.getElementById("other").value;
let age = document.getElementById("age").value;
let salary = document.getElementById("salary").value;
let department = document.getElementById("dep").value;


let api= "http://localhost:3000/Data";

const response= await fetch(api, {
    method: "POST",
    body: JSON.stringify({ 
      "Name":name,
      "gender":genderMale || genderFemale || gender,
      "age":age,
      "salary":salary,
      "department":department   
     }),
     headers: {
        "Content-Type": "application/json",
      }
     
});
// if(genderMale || genderFemale || gender){
//         document.write()
// }

console.log(response);
alert("data save!!!");






}
