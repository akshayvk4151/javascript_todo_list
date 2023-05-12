

// function solution(number){
//     var multipleOfThree = []
//     var multipleOfFive = []

//     for(let i=1; i<number; i++){
//         if(i%3==0){
//            multipleOfThree.push(i)
//         }

//         if(i%5==0){
//             multipleOfFive.push(i)
//         }
//     }
//     // console.log(multipleOfThree)
//     // console.log(multipleOfFive)
//     let attaching = [...multipleOfThree, ...multipleOfFive]
//     console.log(attaching)
//     let filterboth = [...new Set(attaching)]
//     console.log(filterboth)
//     let sumOfboth = filterboth.reduce((num, acc)=> num+acc)
   
//     return sumOfboth
   

// }


// let result = solution(1000)
// console.log('final result = '+ result)