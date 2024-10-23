

async function dataSave()
{
 let Table=`<table width="100%" height="100%" border="1px" bgcolor="white" font-size="30px">
              <tr bgcolor="orange">
                <th> Name </th>
                <th>Gender</th>
                <th> Age </th>
                <th>Salary</th>
                <th>Department </th>
               </tr> 
           `

  let api="http://localhost:3000/Data";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
       Table+=` <tr>
                  <td> ${key.Name} </td>
                  <td> ${key.gender} </td>
                  <td> ${key.age} </td>
                  <td> ${key.salary} </td>
                  <td> ${key.department} </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataSave();