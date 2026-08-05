class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const stringWithoutSpaces = s.toLowerCase().replace(/[^\w]/g, "")
        let begin = 0
        let end = stringWithoutSpaces.length -1
        while (begin < end) {
            if (stringWithoutSpaces[begin] !== stringWithoutSpaces[end]) {
                return false
            } else {
                begin++
                end--
            }
        }
    return true
    }
}
