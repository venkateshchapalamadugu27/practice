// // var name="Bharath";
// // var age=20;
// // if(age>10){
// // var name="L.Bharath"
// // console.log(name);

// // }
// // console.log(name);
// // Objects
// // let employee={
// //     name:"Neon",
// //     designation:"Manager",
// //     salary:"$100k",
// //     phno:5343675678

// // }
// // console.log(employee)
// // Array
// let employees={ sam,singh,roy}
// console.log(employees)
// Alerts
//alert("Are you sure")
 //prompt:
 //let number1=prompt("enter input")
 //console.log(number1)
 //confirm("are you sure exit")
 // console elements
//  console.log("welcome")
//  console.info("telecom")
//  console.warn("check once")
//  console.error("array out of bonds")
// spread operator
// let i_marks=[23,45,67,89,34,33]
// let e_marks=[5783,8576,98765]
// let results=[23,45,e_marks]
// let final=[...i_marks,...e_marks]
// console.log(final)
// console.log(results)
// Rest parameter
//  function addition(x,y,...remaindata){
//      console.log(x);
//      console.log(y);
//      console.log(remaindata);
//      console.log(typeof(remaindata))
//     }
//     console.log(addition(1,34,5566,6,6,5,44,44,3,))
// Destructuring of array
//let employee=["poorna","ganesh","bharath"]
// let name1=employee[0];
// let name2=employee[1];
// console.log(name1)
// console.log(name2)

//  Destructuring of array

// let employee={
//          uname:"Neon",
//        designation:"Manager",
//        salary:"$100k",
//       phno:5343675678 }
      
// let {uname,designation,...remainList}=employee;
// console.log(uname);
// console.log(designation);
// console.log(remainList);
// FUnction



// Anonymous Function
// let demo=function(x,y){
//   return x+y
// }
// console.log(demo(3,4))


// (function(x,y){
//   return x*y
// })()


//  setTimeout(function(){
//  console.log("welcome")
//  },3000)

 //Arrow fun
//  let demo= (x,y) =>{
//    return x+y
//  }
//  console.log(demo(4,4))


let employees=["thanu","rithwin","venki"]
// for(let i=0;i<employees.length;i++)
// {
//   console.log(employees[i])
// }

//for-in
// for(let i in employees)
// {
//   console.log(i)
// }

//for-of
// for(let i of employees)
// {
//   console.log(i)
// }



// forEach
 let results=employees.forEach(function(element){
   console.log(element+" ok")

 })


//map
let results1=employees.map((element,index)=>{
   return element+"k"+index

  })
  console.log(employees)
/  console.log(results1)
