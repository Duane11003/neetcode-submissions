class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const strMap: Record<string, string[]> = {}
        for (const char of strs) {
            const key = char.split('').sort().join()
            if (!strMap[key]) {
                strMap[key] = [char]
            } else {
                strMap[key].push(char)
            }
            
        }
        return Object.values(strMap)

    }
}
