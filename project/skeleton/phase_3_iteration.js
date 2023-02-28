// let arr=[5,3,4]

// Array.prototype.bubbleSort=function(){
//     let sorted = false

//     while (!sorted){
//         sorted = true
//         for(let i=0; i < this.length-1;i++){
//             if(this[i]>this[i+1]){
//                 sorted = false
//                 this[i],this[i+1] = this[i+1],this[i]
//             }

//         }

//     }
//     return this
// }

// console.log(arr.bubbleSort())


String.prototype.substrings=function(){
    const newArr = [] //1
    for(let i=0; i <this.length ; i++){
         newArr.push(this[i])
        for(let j=i+1; j < this.length;j++ ){
            newArr.push(this.slice(i,j+1))
        }
    }
return newArr
}

let hello = "hello"
console.log(hello.substrings())
