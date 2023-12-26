let DataFromLS = JSON.parse(localStorage.getItem("arrayDatatoLS"));

DataFromLS.forEach(function(el){
    let nameLS = document.createElement("h1");
    nameLS.setAttribute("id","Pname");
    nameLS.innerText = el.name;
    let ageLS = document.createElement("p");
    ageLS.setAttribute("id","Page");
    ageLS.innerText = el.age;

    document.querySelector("#display").append(nameLS,ageLS);
});