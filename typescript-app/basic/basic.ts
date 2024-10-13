// Primitive Types:

// string
let userName: string
userName = "kjh"
// userName = 123 <- error

// number
let age: number
age = 13

// boolean
let isInstructor: boolean
isInstructor = true

// null
// undefined

// Object Types:

// object
let human: {
  name: string
  age: number
}

human = {
  name: "Jay",
  age: 32,
}

// Array<T>
// 원하는 타입에 [] 배열 기호 함께 작성
let hobbies: string[]
let numbers: number[]

hobbies = ["sport", "cooking"]
numbers = [1, 2, 3]

// Union and Intersection Types:
// Union (A | B)
// 여러 가지 타입 지정 가능
let course: string | number = "react"
course = 123

// Type Aliases (type)
// 반복해서 쓰이는 타입 지정하여 변수로 사용
type Person = {
  name: string
  age: number
}

let person: Person

person = {
  name: "jay",
  age: 26,
}

// Function Types:
// 함수의 매개변수에도 타입 지정 가능
function add(a: number, b: number) {
  return a + b
}

// function add(a: number, b: number): number { ':' 기호 우측에는 반환 시, 타입도 지정 가능(보통은 자동으로 해서 필요 없음.)
//   return a + b
// }

// Generics
// 함수, 클래스, 또는 인터페이스를 작성할 때 타입을 고정하지 않고, 해당 타입을 나중에 지정할 수 있도록 하여, 여러 타입에 대해 동일한 로직을 적용
// -> 재사용 가능한 컴포넌트를 만들 수 있게 해줌

function getFirstElement<T>(arr: T[]): T {
  return arr[0]
}

// 숫자 배열에서 사용
const firstNumber = getFirstElement([1, 2, 3]) // number 타입

// 문자열 배열에서 사용
const firstString = getFirstElement(["a", "b", "c"]) // string 타입
