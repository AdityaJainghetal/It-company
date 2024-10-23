async function deleteData(id) {
    let api = `http://localhost:3000/Data/${id}`;
    await fetch(api,{
        method:'DELETE',
        header:{
            'Content-Type': 'application/json',
        }
    })
}

async function dataSave()
{
 let Table=`<table width="90%" border="1px" bgcolor="pink" font-size="30px">
              <tr bgcolor="orange">
                <th> Name </th>
                <th>Gender</th>
                <th> Age </th>
                <th>Salary</th>
                <th> Department </th>
                <th>Delete</th>
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
                  <td>
                  <img src="images/del.png" width="40px" cursor:pointer onclick="deleteData('${key.id}')"
                  </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataSave();

// async function deleteData(id) {
//     let api = `http://localhost:3000/Data/${id}`;
//     await fetch(api,{
//         method:'DELETE',
//         header:{
//             'Content-Type': 'application/json',
//         }
//     })
// }