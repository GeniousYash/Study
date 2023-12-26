// https://reqres.in/api/users

document.querySelector("#fetch").addEventListener("click",data);

async function data(){
    let res = await fetch("https://reqres.in/api/users");
    
    let data = await res.json();
    
    let finalData = data.data;
    console.log("finalData",finalData);

    finalData.forEach(function(el){
        let card = document.createElement("div");
        
        let avatar = document.createElement("img");
        avatar.src = el.avatar;

        let fname = document.createElement("p");
        fname.innerText = el.first_name;

        let lname = document.createElement("p");
        lname.innerText = el.last_name;

        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.append(fname,lname);


        let email = document.createElement("p");
        email.innerText = el.email;

        card.append(avatar,div,email);

        document.querySelector("#display").append(card);
    })
}

