async function pluralizeWord() {
    let inputWord = document.querySelector("#wordInput").value;  
    let response = await fetch("pluralize?word=" + inputWord); 
    let resultText = await response.text(); 
    document.querySelector("#results").innerHTML = resultText; 
}