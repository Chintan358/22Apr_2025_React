


// console.log(a);
// a = 10
// console.log(a);
// let a;

// test()

// function test() {
//   console.log("test");
// }

// var test = ()=>{
//   console.log("test");

// }

// function test(a)
// {
//     a = 50;
//     console.log(a);   
// }

// var a = 10
// console.log(a);
// test(a)
// console.log(a);



// function demo(p)
// {
//   p.fname="Manav"
//   console.log(p);
  
// }

// person = {
//   fname:"Ronny",
//   lname:"Tailor"
// }

// console.log(person);
// demo(person)
// console.log(person);

// function abc(...a){
//   console.log(a);
// }
// abc(10,20,30,40)

// function xyz()
// {
//     console.log(arguments[0]);
// }
// xyz(10,20,30)


// const details = {
//     fname : "abc",
//     lname : "xyz",
//     fullname : function(){
//         return this.fname+" "+this.lname
//     }
// }
// console.log(details.fullname());



// const details = {
//     fullname : function(email,age){
//         return this.fname+" "+this.lname+" "+email+" "+age
//     }
// }
// person1 = {
//   fname:"Ronny",
//   lname:"Tailor"
// }

// console.log(details.fullname.call(person1,"p1@gmail.com",25));
// console.log(details.fullname.apply(person1,["p1@gmail.com",25]));


const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    console.log(this.firstName,this.lastName);
    
   // let x = document.getElementById("demo");
   // x.innerHTML = this.firstName + " " + this.lastName;
  }
}

// person.display();
// let display = person.display.bind(person);
// setTimeout(display,5000);


// function test(a)
// {
//   console.log(a);
//   a+=1
//   if(a<20){
//     test(a)
//   } 
// }

// test(10)







// currying,closures,recursion,call,apply,bind,this keyword


// function add(a,b)
// {
//     return a+b
// } 

// function mul(a,b)
// {
//    return a*b;
// }


// function apply(x)
// {
//   return x
// }

// k = apply(mul(10,20))
// console.log(k);

