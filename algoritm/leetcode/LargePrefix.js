var longestCommonPrefix = function (strs) {
    let firstElem = strs[0]
    for (let i = 0; i < strs.length; i++) {
        if (!strs[i].includes(firstElem)) {
            firstElem = firstElem.slice(0, -1)
            i = --i
        }
    }
    return firstElem
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));