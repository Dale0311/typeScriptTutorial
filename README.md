# React + Typescript tutorial

### what it can do

1. Prevent us from changing the data type of certain variable
2. Help us to find bugs or error that we created
3. Gives us intellisense
4. Prevent us from accessing methods from a certain data types.

```React
//example:

let myAge: number = 22
myAge = myAge.toUpperCase(); -> error, because it is a method for string
```

### best practices

1. create types like components

```React
type ButtonProps = {...types here}
type Color = {...types here}
```

### Types

##### basic types

1. primitive variables types
   let total : number = 0
   let isActive: boolean = true

2. function types
   parameter types,
   return type

```React
function convertTwoNums(num1: number, num2: number, arithmeticOpertor: string) : number {
   ...logic here
}
```

3. array type
   const USER_IDS = number[] -> array which contains only number type

4. Component types

- prop types
- return types -> usually infer

```React
type HomeProps = {bgColor: string, luckyNumber : number}
const Home({bgColor, luckyNumber} : HomeProps){
   ...logic here
}
```

5. function type when it is use as props

```React
type HomeProps = {
   bgColor: string,
   luckyNumber : number,
   handleClick : () => void
   // (isActive: boolean) -> parameters
   // void, number, string, [] -> return type
}
const Home({bgColor, luckyNumber} : HomeProps){
   ...logic here
}
```

##### Union types and literals

Are types that can have multiple data types or specific value of type

```React
type HomeProps= {
   // this is a union type which contains multiple data type
   isActive: boolean | number // say we want it to be true or false, 0 or 1

   // this is a string literals
   bgColor: "red" | "blue" | "violet", // now bg color only accept between the three
   legalAge: 18 | 21 , // legalAge only accept value from either of this two
   }
```

##### Record type

Record<'k', 'v'> is an object type with key type K and value type V . The key type K can be only number , string , or symbol , including their literals. On the value type V is no restriction.

```React
type ButtonProps = {
   borderRadius: Record<string, number>
}
```

### hack

1. create a var that is optional using question (?)

```React
export function convertTwoNum(num1:number, num2:number, arithmeticOp?: string){
   ...logic here
}
```

2. we can pass types to types

```React
type Color = "red" | "blue" | "violet";
type HomeProps= {
   bgColor: Color,
   color: Color
   isActive: boolean | number,
   }
```

3. if we have default value we don't need to create a type

### common words use in typescript

1. infer = meaning typescript can well guess the type of data

### helper types??
