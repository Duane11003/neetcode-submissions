class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // iterate over the array
        // start 1 pointer at begnning, 1 pointer at end
        // if sum > target, move end pointer left
        let start = 0;
        let end = numbers.length-1
        while (start < end) {
         if (numbers[start] + numbers[end] === target) {
            return [start + 1, end + 1]
         } 

         if (numbers[start] + numbers[end] > target) {
            end--
         } else {
            start++
         }
        }
        return []
    }
}
