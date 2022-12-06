/**
 * @param {string} s
 * @return {number}
 */

//   s = "R L R R L L R L R L"
//        + - + + - - + - + -
//         0   +2 -2   0   0
//count    0     0     0   0
//ANSWER   1.    1.    1.  1 = 4

//    s = "R L R R R L L R L L"
//         - + - - - + + - + +
//          0    -3   +2 -1 +2
//COUNT       0           0
//ANSWER.     1           1 = 2

//      s = "L L L L R R R R"
//           + + + + - - - -
//              +4      -4
//COUNT              0
//ANSWER             1 


var balancedStringSplit = function(s) {
    let counter = 0
    let answer = 0
    for(let i = 0; i < s.length; i++){
        // console.log(s[i])
        if(s[i] === 'L'){
            counter++
        } else {
            counter --
        }
        if(counter === 0){
            answer++
        }
        console.log("count", counter)
    }
    return answer
};