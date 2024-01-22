const myForm = document.getElementById("myForm");
const unorderList = document.getElementById("containingPlayer");
let arr = [];
// console.log(myForm);
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(myForm.children[0].value);
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const country = document.getElementById("country");
  const score = document.getElementById("score");

  let currentDate = new Date();
  // let getTime = currentDate.getTime();
  let getDate = currentDate.getDate();
  let getMonth = currentDate.getMonth() + 1;
  let getYear = currentDate.getFullYear();
  let date = getDate + "/" + getMonth + "/" + getYear;

  let details = {
    name:( firstName.value + " " + lastName.value).toUpperCase(),
    date: date,
    country: country.value.toUpperCase(),
    score: parseInt(score.value),
  };

  arr.push(details);

   firstName.value = "";
   lastName.value = "";
   country.value = "";
   score.value = "";
  unorderList.innerHTML = "";
  arr.sort(function (a, b) {
      return b.score - a.score;
    });
  
arr.forEach((element,index) => {
  const li = document.createElement("li");

  const name = document.createElement("span");
  const date = document.createElement("span");
  const country = document.createElement("span");
  const score = document.createElement("span");
  const deleteSpan = document.createElement("span");
  const increment = document.createElement("span");
  const decrement = document.createElement("span");


  name.innerText = element.name;
  date.innerText = element.date;
  country.innerText = element.country;
  score.innerText = element.score;
  deleteSpan.innerText = "Delete";
  deleteSpan.className="delete"
  increment.innerText = "Increment";
  increment.className = 'increment'
  decrement.innerText = "Decrement";
  decrement.className = 'decrement';

  increment.addEventListener("click",()=>incrementScore(index));
  decrement.addEventListener("click",()=>decrementScore(index));
  deleteSpan.addEventListener("click",()=>deleteElement(index));

  li.append(name,date,country,score,deleteSpan,increment,decrement);
  unorderList.append(li);
});



  

});

function  updatingUI(){
    unorderList.innerHTML = "";
    arr.sort(function (a, b) {
        return b.score - a.score;
      });
    
  arr.forEach((element,index) => {
    const li = document.createElement("li");

    const name = document.createElement("span");
    const date = document.createElement("span");
    const country = document.createElement("span");
    const score = document.createElement("span");
    const deleteSpan = document.createElement("span");
    const increment = document.createElement("span");
    const decrement = document.createElement("span");


    name.innerText = element.name;
    date.innerText = element.date;
    country.innerText = element.country;
    score.innerText = element.score;
    deleteSpan.innerText = "Delete";
    deleteSpan.className="delete"
    increment.innerText = "Increment";
    increment.className = 'increment'
    decrement.innerText = "Decrement";
    decrement.className = 'decrement';

    increment.addEventListener("click",()=>incrementScore(index));
    decrement.addEventListener("click",()=>decrementScore(index));
    deleteSpan.addEventListener("click",()=>deleteElement(index));

    li.append(name,date,country,score,deleteSpan,increment,decrement);
    unorderList.append(li);

  });
   }



function incrementScore(index){
    arr[index].score+=5;
    updatingUI();
}
function decrementScore(index){
    arr[index].score-=5;
    updatingUI();
}
function deleteElement(index){
    arr.splice(index,1);
    updatingUI();
}

