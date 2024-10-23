async function EditSave(myid) {
  let name = document.getElementById("name").value;
  let genderMale = document.getElementById("male").checked;
  let genderFemale = document.getElementById("female").checked;
  let genderOther = document.getElementById("other").checked;
  let age = document.getElementById("age").value;
  let salary = document.getElementById("salary").value;
  let department = document.getElementById("dep").value;

  let api = `http://localhost:3000/Data/${myid}`;

  // Determine selected gender
  let gender = genderMale ? "Male" : genderFemale ? "Female" : genderOther ? "Other" : "";

  try {
    const response = await fetch(api, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        "Name": name,
        "gender": gender,
        "age": age,
        "salary": salary,
        "department": department   
      })
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    alert("Data updated successfully!");
    editData(); // Refresh data after update
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to update data. Please try again.");
  }
}

async function editDisplay(myid) {
  let api = `http://localhost:3000/Data/${myid}`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let Data = await response.json();
    console.log(Data)

    let myForm = `
      Edit Name: <input type="text" id="name" value="${Data.Name}">
      <br>
      Edit Gender:
      <input type="radio" id="male" name="gender" value="Male" ${Data.gender === "Male" ? "checked" : ""}> Male
      <input type="radio" id="female" name="gender" value="Female" ${Data.gender === "Female" ? "checked" : ""}> Female
      <input type="radio" id="other" name="gender" value="Other" ${Data.gender === "Other" ? "checked" : ""}> Other
      <br>
      Edit Age: <input type="text" id="age" value="${Data.age}">
      <br>
      Edit Salary: <input type="text" id="salary" value="${Data.salary}">
      <br>
      Edit Department: <input type="text" id="dep" value="${Data.department}">
      <br>
      <button onclick="EditSave('${Data.id}')">Save</button>
    `;

    document.getElementById("demo1").innerHTML = myForm;
  }
   catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function editData() {
  let Table = `<table width="100%" border="1" bgcolor="yellow" >
                <tr bgcolor="orange">
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Salary</th>
                  <th>Department</th>
                  <th>Edit Data</th>
                </tr>`;

  let api = "http://localhost:3000/Data";

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let myData = await response.json();

    myData.forEach(key => {
      Table += `<tr>
                  <td>${key.Name}</td>
                  <td>${key.gender}</td>
                  <td>${key.age}</td>
                  <td>${key.salary}</td>
                  <td>${key.department}</td>
                  <td>
                    <a href="#" onclick="editDisplay('${key.id}')">
                      <img src="images/edit.png" width="30" height="30">
                    </a>
                  </td>
                </tr>`;
    });

    Table += "</table>";
    document.getElementById("demo").innerHTML = Table;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Initialize the data display
editData();
