var user = {
name: "Dmitry",
age: 16,
hight: "i don't know my hight",
place: "Kiev",

toString: function() {
    return `name: ${this.name}; age: ${this.age}; hight: ${this.hight}; place: ${this.place};`;
 
 }
};

console.log(user.name);
console.log(user.age);
console.log(user.hight);
console.log(user.place);



console.log(user.toString());

let userJSON =  JSON.stringify(user);
console.log(userJSON);

let user2 = JSON.parse(userJSON);
console.log(user2.name);
console.log(user2.age);
console.log(user2.hight);
console.log(user2.place);



let user4 = {
    name: "Gar"
}

let user5 = {
    age: 16
}

let user6 = {
    place: "Kiev"
}

let user7 = {
    name: "Dmitry"
}

Object.assign(user4, user5, user6, user7);
for(let key in user4) {
    console.log(user[key]);
}

let userClone = Object.assign({}, user4);
  for (let key in userClone){
      console.log(userClone[key]);
  }

  var saying= new Map();
  saying.set("first", "+22 922 22 22").set("smone", "+66 666 66 66").set("smth", "+11 111 11 11");
  for (let [key, value] of saying){
      console.log(key + " - " + value); 
  }
  



    

    
