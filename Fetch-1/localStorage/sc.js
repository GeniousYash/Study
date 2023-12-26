document.querySelector("#form").addEventListener("submit",submit);

let arrayData = JSON.parse(localStorage.getItem("arrayDatatoLS")) || [];

function submit(event){
    event.preventDefault();
    let dataLS = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
    }
    arrayData.push(dataLS);

    localStorage.setItem("arrayDatatoLS",JSON.stringify(arrayData));
    
}

