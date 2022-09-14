//OK GO

// 12.09.2022

//TASK 1


// let arr = [1, 1, 3, 1, 1, 1, 1, 1]
// let first = arr[0]
// let last = arr[arr.length - 1]
// let beforeLast = arr[arr.length - 2]

// if (first == last) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != first) {
//             console.log(arr[i])
//         }
//     }
// } else {
//     if (first == beforeLast) {
//         console.log(last)
//     } else {
//         console.log(first)
//     }
// }

//tsk DON'T WORK

// let iterable = [1, 2, 3]
// let r = iterable.split('')
// console.log(r)

// 14.09.2022
// TASK X DON'T WORK :(
// let text = "The sunset sets at twelve o' clock."

// function alphabetPosition(text) {
//     let temp1 = text.split(' ')
//     let temp2 = temp1.join('')
//     let arr = temp2.split('')
//     let newArr = []

//     function test(x) {
//         if (x == 'a' || x == 'b' || x == 'c' || x == 'd' || x == 'e' || x == 'f' || x == 'g' || x == 'h' || x == 'i' || x == 'j' || x == 'k' || x == 'l' || x == 'm' || x == 'n' || x == 'o' || x == 'p' || x == 'q' || x == 'r' || x == 's' || x == 't' || x == 'u' || x == 'w' || x == 'w' | x | x == 'y' || x == 'z')
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (test(arr[i])) {
//             switch (arr[i]) {
//                 case 'a':
//                     newArr.push(1)
//                     break
//                 case 'b':
//                     newArr.push(2)
//                     break
//                 case 'c':
//                     newArr.push(3)
//                     break
//                 case 'd':
//                     newArr.push(4)
//                     break
//                 case 'e':
//                     newArr.push(5)
//                     break
//                 case 'f':
//                     newArr.push(6)
//                     break
//                 case 'g':
//                     newArr.push(7)
//                     break
//                 case 'h':
//                     newArr.push(8)
//                     break
//                 case 'i':
//                     newArr.push(9)
//                     break
//                 case 'j':
//                     newArr.push(10)
//                     break
//                 case 'k':
//                     newArr.push(11)
//                     break
//                 case 'l':
//                     newArr.push(12)
//                     break
//                 case 'm':
//                     newArr.push(13)
//                     break
//                 case 'n':
//                     newArr.push(14)
//                     break
//                 case 'o':
//                     newArr.push(15)
//                     break
//                 case 'p':
//                     newArr.push(16)
//                     break
//                 case 'q':
//                     newArr.push(17)
//                     break
//                 case 'r':
//                     newArr.push(18)
//                     break
//                 case 's':
//                     newArr.push(19)
//                     break
//                 case 't':
//                     newArr.push(20)
//                     break
//                 case 'u':
//                     newArr.push(21)
//                     break
//                 case 'v':
//                     newArr.push(22)
//                     break
//                 case 'w':
//                     newArr.push(23)
//                     break
//                 case 'x':
//                     newArr.push(24)
//                     break
//                 case 'y':
//                     newArr.push(25)
//                     break
//                 case 'z':
//                     newArr.push(26)
//                     break
//                 default:
//                     break
//             }
//         }
//     }
//     let res = newArr.join(' ')
//     return res
// }

// //let result = alphabetPosition(text)
// console.log(alphabetPosition(text))

//task x
// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     var classAvg = 0;
//     for (var i = 0; i < classPoints.length; i++){
//       classAvg += classPoints[i]; 
//     }
//     classAvg = classAvg/classPoints.length; 
//     return yourPoints > classAvg;
//   }