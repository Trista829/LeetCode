/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 * 输入：x = 123
 * 输出：321
 *
 * 输入：x = -123
 * 输出：-321
 *
 * 输入：x = 120
 * 输出：21
 *
 * 提示：-231 <= x <= 231 - 1
 */

// 方法一：转为字符串
var reverse1 = function(x) {
    let result = parseInt(x.toString().split('').reverse().join(''));
    if (x < 0) {
        result = -result;
    }
    return result;
}

// 方法二：数学法
var reverse2 = function(x) {
    let result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = x/10 | 0;
    }
    return (result | 0 === result) ? result : 0;
}

// 检验
let x1 = 123, x2 = -123, x3 = 120
console.log(reverse1(x1), reverse1(x2), reverse1(x3)); // 321 -321 21
console.log(reverse2(x1), reverse2(x2), reverse2(x3)); // 321 -321 21