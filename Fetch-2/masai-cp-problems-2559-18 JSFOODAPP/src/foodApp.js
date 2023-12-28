// async function categoryData(){
//   try{
//     let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);

//     // console.log("res",res);
//     let data = await res.json();

//     let mealData = data.meals;
//     console.log("cat",mealData);
//     getCategoriesData(mealData);
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// categoryData();


// async function ingredientData(){
//   try{
//     let res2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);

//     // console.log("res",res);
//     let data2 = await res2.json();

//     let mealData2 = data2.meals;
//     console.log("ing",mealData2);
//     getIngredientData(mealData2);
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// ingredientData();


// const getCategoriesData = async (mycategory) => {
//   // code here
//   mycategory.forEach((el)=>{
//     let card = document.createElement("div");
//     card.setAttribute("class","card");

//     let idmeal = document.createElement("p");
//     idmeal.innerText = el.idMeal;

//     let strMeal = document.createElement("h1");
//     strMeal.innerText = el.strMeal;

//     let strmealThumb = document.createElement("img");
//     strmealThumb.style.width = "200px";
//     strmealThumb.src = el.strMealThumb;

//     card.append(strmealThumb,strMeal,idmeal);
//     let categorydiv = document.querySelector("#cate");
//     categorydiv.append(card);
//     categorydiv.style.display = 1;
//   })
// };

// const getIngredientData = async (myingredient) => {
//   // code here
//   myingredient.forEach((el)=>{
//     let card = document.createElement("div");
//     card.setAttribute("class","card");
    
//     let idmeal = document.createElement("p");
//     idmeal.innerText = el.idMeal;

//     let strMeal = document.createElement("h1");
//     strMeal.innerText = el.strMeal;

//     let strmealThumb = document.createElement("img");
//     strmealThumb.style.width = "200px";
//     strmealThumb.src = el.strMealThumb;

//     card.append(strmealThumb,strMeal,idmeal);
//     let ingrdiv = document.querySelector("#ingr");
//     ingrdiv.append(card);
//     ingrdiv.style.display = true;
//   })
// };

// window.onload = function () {
//   //  get the buttons here and add click event
//   let getCategories = document.createElement("button");
//   getCategories.setAttribute("id","getCategory");
//   getCategories.innerText = "Get Categories"
//   getCategories.addEventListener("click",getCategoriesData);
  
//   let getIngredient = document.createElement("button");
//   getIngredient.setAttribute("id","getIngredient");
//   getIngredient.innerText = "Get Ingredients";
//   getIngredient.addEventListener("click",getIngredientData);
  

//   document.querySelector(".container").append(getCategories,getIngredient);

// };

// // donot chnage the export statement

// if (typeof exports !== "undefined") {
//   module.exports = {
//     getCategoriesData,
//     getIngredientData,
//   };
// }


// https://www.themealdb.com/api.php?ref=apilist.fun

// src/foodApp.js

const getCategoriesData = async () => {
  try {
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    let data = await res.json();
    
    data.meals.forEach(function(el){
      let card = document.createElement("div");

      let idMeal = document.createElement("p");
      idMeal.innerText = el.idMeal;

      let strMeal = document.createElement("h1");
      strMeal.innerText = el.strMeal;

      let strMealThumb = document.createElement("img");
      strMealThumb.src = el.strMealThumb;

      card.append(strMealThumb,strMeal,idMeal);

      document.querySelector(".container").append(card);
    })
    
  } catch (err) {
    console.log(err.message);
  }
};
getCategoriesData();


const getIngredientData = async () => {
  try {
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    let data = await res.json();
    
    data.meals.forEach(function(el){
      let card = document.createElement("div");

      let idMeal = document.createElement("p");
      idMeal.innerText = el.idMeal;

      let strMeal = document.createElement("h1");
      strMeal.innerText = el.strMeal;

      let strMealThumb = document.createElement("img");
      strMealThumb.src = el.strMealThumb;

      card.append(strMealThumb,strMeal,idMeal);

      document.querySelector(".container").append(card);
    })
  } catch (err) {
    console.log(err.message);
  }
};
getIngredientData();

window.onload = function () {
  let card = document.createElement("div");
  card.setAttribute("id","btndiv");

  let getCategoryDataButton = document.createElement("button");
  getCategoryDataButton.innerText = "Get Category"
  getCategoryDataButton.addEventListener("click", getCategoriesData);

  let getIngredientDataButton = document.createElement("button");
  getIngredientDataButton.innerText = "Get Ingredients"
  getIngredientDataButton.addEventListener("click", getIngredientData);

  card.append(getCategoryDataButton,getIngredientDataButton)
  document.querySelector(".container").append(card);
};

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
