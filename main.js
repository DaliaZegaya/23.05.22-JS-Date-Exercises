// function exercise1 () {
//     var nowDate= new Date ()
//     console.log (nowDate)   
// }
// exercise1 ()

// function exercise2 (someDate) {
//     var nowDate= new Date (someDate)
//     console.log (nowDate)
// }
// exercise2 ("03.01.1999")

// function exercise3 () {
//     var userDate= prompt ("your date")
//     var nowDate= new Date (userDate)
//     console.log(nowDate);
// }
// exercise3 ()

// function exercise4 () {
//     var userDate= prompt ("your date")
//     var nowDate= new Date (userDate).getMonth()
//     return console.log (nowDate)
// }
// exercise4 ()

// function exercise5 () {
//     var userDate= prompt ("your date")
//     return console.log (nowDate= new Date(userDate).getHours())
// }
// exercise5()

// function exercise6 () {
//     var userDate= prompt ("your date")
//     return console.log (nowDate= new Date (userDate).getFullYear())
// }
// exercise6 ()

// function exercise7 () {
//     var userDate= prompt ("your date")
//     return console.log(nowDate= new Date(userDate).getMinutes());
// }
// exercise7()

// function exercise8 () {
//     var userDate1= new Date (prompt ("date 1"))
//     var userDate2= new Date (prompt ("date 2"))
//     if (userDate1 < userDate2) {
//         return console.log (userDate1)
//     }
//     return console.log (userDate2)
// }
// exercise8()

// function exercise9 () {
//     var userDate= new Date (prompt ("your date"))
//     return console.log (new Date().getFullYear()-userDate.getFullYear())
// }
// exercise9 ()

// function exercise10 () {
//     var userDate= new Date (prompt("your date"))
//     var userAge= new Date ().getFullYear()-userDate.getFullYear()
//     if (userAge>18) {
//         alert ("hey there")
//     }
//     else {
//         alert ("you cant enter")
//     }
// }
// exercise10()

// function exercise11 () {
//     var newDate= new Date (prompt("Date"))
//     console.log (newDate.toUTCString())
//     console.log(newDate);
//     console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
// }
// exercise11 ()

// function exercise12 () {
//     var rndMonth= Math.floor(Math.random()*(12-1)+1)
//     var rndDay= Math.floor(Math.random()*(31-1)+1)
//     var rndYear= Math.floor (Math.random()*(2022-1990)+1990)
//     var resultDate= rndMonth+"/"+rndDay+"/"+rndYear
//     console.log (resultDate)
// }
// exercise12()