async function auditUrl() { 
    let url = document.querySelector("#urlInput").value; 
    let response = await fetch("/api/auditurl?url=" + url); 
    let responseText = await response.text(); 
    document.querySelector("#results").innerHTML = responseText; 
}