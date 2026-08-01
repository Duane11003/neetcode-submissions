class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        const countsS = {}
        const countsT = {}
     for (const char of s) {
        if (!countsS[char]) {
         countsS[char] = 1
        } else {
         countsS[char] = countsS[char] + 1
        }
     }

     for (const char of t) {
      if (!countsT[char]) {
         countsT[char] = 1
      } else {
         countsT[char] = countsT[char] + 1
      }
     } 

     const sKeys = Object.keys(countsS)
     const tKeys = Object.keys(countsT)
      
      if (sKeys.length !== tKeys.length) return false

      for (const key of sKeys) {
         if (countsS[key] !== countsT[key]) return false
      }
return true
      
}
}