class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numberTracker: Record<number, number> = {}
        // iterate over the array, track the elements that appear the k most times
        // count each time the number appears in the array, if the count is >= k, push that value into the result array
        for (const num of nums) {
            if (numberTracker[num]) {
                numberTracker[num] = numberTracker[num] + 1
            } else {
                numberTracker[num] = 1
            }
        }
        const vals = Object.entries(numberTracker)
        // iterate vals array and any value = k, push the key to that number
        const sortedVals = vals.sort((a, b) => b[1] - a[1])
        
        return sortedVals.slice(0, k).map((val) => Number(val[0]))
    }
}
