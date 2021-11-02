/**
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 */

// 方法一：暴力破解
var towSum1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// 方法二：map集合
var towSum2 = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let x = target - nums[i];
        if (map.has(x)) {
            return [map.get(x), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// 检验
let nums1 = [2,7,11,15], nums2 = [3,2,4];
let target1 = 9, target2 = 6;
console.log(towSum1(nums1, target1), towSum2(nums2, target2)); // [0, 1] [1, 2]