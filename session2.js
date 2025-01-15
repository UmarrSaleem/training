// let mydate = new Date();
// console.log(mydate)
// console.log(mydate.toDateString());
// console.log(mydate.toISOString())

// let mynewdate = new Date();
// console.log( "Day is " + mynewdate.getDay())
// console.log( "month is " + mynewdate.getMonth())
// console.log(  "year is " + mynewdate.getFullYear())
// console.log(  "hours is " + mynewdate.getHours())

// console.log(  "millisecond is" + mynewdate.getMilliseconds())
// console.log(mynewdate.getMonth())
// console.log(mynewdate.getFullYear())
// console.log(mynewdate.getHours())
// function first()
// {
//     second()
//     console.log('first')
// }
// function second()
// {
//     console.log('second')
// }
// function firstv2(()=> console.log('first v2'))
// firstv2(()=> console.log('first v2'))
// setTimeout(()=> console.log ('set time out 0'))
//  setTimeout(()=> console.log ('set time out 0'), 0)
//  Promise.resolve().then( ()=> console.log('promis ran') )
// setTimeout(()=> console.log ('set time out 5000'), 5000)
// setTimeout(()=> console.log ('set time out 500'), 500)

// first();

// console.log(x)
// var x= "Hello"

// first();
// function first()
// {
//     console.log('first')
// }

const myarr=[1,2,3,4]
myarr.push(6)
// myarr.push(61)
// myarr.push(26)
// myarr.push(36)
// myarr.push(64)

// myarr.push(65)
// myarr.push(67)
// myarr.push(68)
// console.log(myarr.length)
myarr.pop()

// console.log(myarr.includes(4))
// console.log(myarr)
// console.log(myarr.indexOf(4))
// console.log(myarr.indexOf(6))
// console.log()

// const newar= myarr.join();
// console.log(newar)
// console.log(typeof newar);

// let countryAsia = ['Pakistan', 'india','china']
// let europe = ['germany','france']

// const allcountries = [...countryAsia,...europe]
// console.log(allcountries)
// const allcountries2 = [countryAsia,...europe]
// console.log(allcountries2)

const jsuser={
    user:"Umar",
    email:"ABC@gmail.com",
    password : "****",
    "full name": "Umar Saleem",
    Comments:{
        id: '123456',
        Comment:'this is a comment'
    }
}
console.log('user',jsuser.user)
console.log('email', jsuser.email)
console.log('password', jsuser.password)

console.log('Full name',jsuser["full name"])

const obj1= {1:'a', 2:'b'}
const obj2= {1:'c', 2:'d'}

const obj3={...obj1,...obj2}
console.log(obj3)