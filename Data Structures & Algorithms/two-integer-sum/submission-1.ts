class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const indexedArr = nums.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0])
        let start = 0;
        let end = nums.length-1
        while (start < end) {
            let first = indexedArr[start][0]
            let last = indexedArr[end][0]
            if (first + last === target) {
                return [indexedArr[start][1], indexedArr[end][1]].sort((a, b) => a - b)
            } else if (first + last > target) {
                end--
            } else {
                start++
            }
        }
    return []
    }
}
