console.log("Hello World")
console.warn("Error 405")
// document.write("Hello World")

let name = 2
console.log(name)
name = "Prayansh"
console.log(name)

// Variables

var _user = 3
_user = 4
console.log(_user)

// Null

let value = null
console.log(value)

// Const

const data = 3
console.log(data)

// Number

var age = 11 , pass = 111
console.log(age, pass)

// string

let user123 ="Prayansh", user = 'My brother is Parthiv'

let val = `I Want to print : ${user123}`

// console.log(user123, user)

// Boolean

let x= 3, y= 4
console.log(x>y)
console.log(x<y)

// BigInt

let n = BigInt(1111111111112222222222233333777777722222411111)
console.log(n)
console.log(typeof n)

let m = 100n , b= 200n
console.log(m+b)

// Symbol

let sym = Symbol('unique')
console.log(sym)

// Object

let obj = {
    name1:'Prapti',
    age1: 6,
    coder: false 
}
console.log(obj)
console.log(typeof obj.coder)

// Array

let dataarr =['name','age',45, true]
console.log(dataarr)



// Function

let dataobj= "hi"
function create(){
    return "dataobj"
}

// Operators

// Arithmetic operator

let e = 2 , r = 9
console.log(e+r)
console.log(e/r)
console.log(e**r)
console.log(e*r)

let counter = 5;
counter++
++counter
console.log(counter)

// Assignment operator

let slice = 9
slice = slice + 2
slice += 3
console.log(slice)

let etc= 4
etc /=1
console.log(etc)
etc %=1
console.log(etc)

// Comparision

let result = (5 == '5')
console.log(result)

let result2 = (5 ==='5')
console.log(result2)

let AB = 7 , bd = 5
let data32 = AB+    bd;
console.log(data32)

let res = (5>3 && 5 == 5)
console.log(res)
