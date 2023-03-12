async function createUser() { 
    // get data from the html 
    let first_name = document.querySelector("#first_name_input").value; 
    let last_name = document.querySelector("#last_name_input").value;
    let favorite_ice_cream = document.querySelector("#favorite_ice_cream").value;

    let myData = { 
        firstName: first_name, 
        lastName: last_name, 
        favorite_ice_cream: favorite_ice_cream
    }

    // console.log(myData); 
    // send post request to server

    let response = await fetch("api/users", { 
        method: "POST", 
        body: JSON.stringify(myData), 
        headers: { 
            "Content-Type": "application/json"
        }
    })
}

async function getUsers() { 
    let response = await fetch("api/users"); 
    let userData = await response.json(); 
    console.log(userData); 
    document.querySelector("#results").innerHTML = JSON.stringify(userData); 
}