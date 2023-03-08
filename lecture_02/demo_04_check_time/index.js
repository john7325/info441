async function checkTime() { 
    let response = await fetch("getTime"); 
    let resultText = await response.text(); 

    document.querySelector("#results").innerHTML = resultText; 
    
}