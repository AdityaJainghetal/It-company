document.getElementById("bname").addEventListener("keyup", searchDisplay);
async function searchDisplay()
{
  let bname=document.getElementById("bname").value;
 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="orange">
                <th>Name </th>
                <th>Gender</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Department</th>
               </tr> 
           `

  let api="http://localhost:3000/Data";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
     let str=key.Name;
     let myval=str.includes(bname);
     
             
     if (myval==true)
     {
       Table+=` <tr>
                  <td> ${key.Name} </td>
                  <td> ${key.gender} </td>
                  <td> ${key.age} </td>
                  <td> ${key.salary} </td>
                  <td>${key.department} </td>
                </tr>  
            `
     }       
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

