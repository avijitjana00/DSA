/** problem statement
    Write a function that reverses a string. The input string is given as an array of characters s.

    You must do this by modifying the input array in-place with O(1) extra memory.
 */

const s = ["h","e","l","l","o"]

function reverseString(s){
    console.log(s)
    for(let i = 0; i < s.length/2; i++){
        let temp = s[i];;
        s[i] = s[s.length - 1 - i]
        s[s.length -1 - i] = temp;
    }
    return s;
}

const output = reverseString(s);
console.log(output)