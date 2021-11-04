/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

示例 1：
输入：x = 121
输出：true

示例 2：
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3：
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。

示例 4：
输入：x = -101
输出：false
 
提示：
-231 <= x <= 231 - 1
 
进阶：你能不将整数转为字符串来解决这个问题吗？
*/

// 利用07.整数反转的知识即可

// 转字符串
var isPalindrome1 = function(x) {
    return parseInt(x.toString().split('').reverse().join('')) === x;
};

// 数学法
var isPalindrome2 = function(x) {
    let temp = x;
    let result = 0;
    if (x < 0) return false;
    if (x === 0) return true;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = x/10 | 0
    }
    return (result | 0 === result ? result : 0) === temp;
};

// 双指针
var isPalindrome3 = function(x) {
    const str = x.toString();
    let left = 0, right = str.length - 1;
    if (left < right) {
        if (str[left] !== str[right]) return false;
        left ++;
        right--;
    }
    return true;
};

const x1 = 121, x2 = -121; x3 = 10;
console.log(isPalindrome1(x1));
console.log(isPalindrome1(x2));
console.log(isPalindrome1(x3));

console.log('----------------');

console.log(isPalindrome2(x1));
console.log(isPalindrome2(x2));
console.log(isPalindrome2(x3));

console.log('----------------');

console.log(isPalindrome3(x1));
console.log(isPalindrome3(x2));
console.log(isPalindrome3(x3));