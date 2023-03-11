async function getPterosaurs() { 
    let response = await fetch("api/getPterosaurs"); 
    let pterosaurJson = await response.json(); 

    let pterosaurHTML = pterosaurJson.map(onePterosaur => { 
        return `
            <div> 
                <p>${onePterosaur.Genus}</p>
                <img src="${onePterosaur.img}" />
            </div> 
        `
    }).join(""); 
    
    document.querySelector("#results").innerHTML = pterosaurHTML; 
} 