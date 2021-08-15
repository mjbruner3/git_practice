let ranOne = ["mom", "dad", "teacher", "pet", "coach", "friend", "sister", "brother"]
let ranTwo = ["succeed", "fail", "innovate", "learn from your mistakes", "do great things", "make a grave mistake"]
let ranThree = ["make money", "raise a family", "be a great person", "get your dream job", "have fun"]

let num1 = Math.floor(Math.random() * ranOne.length)
let num2 = Math.floor(Math.random() * ranTwo.length)
let num3 = Math.floor(Math.random() * ranThree.length)

console.log(`If you listen to advice given from your ${ranOne[num1]}, then you will
            ${ranTwo[num2]} in order to ${ranThree[num3]}`)
