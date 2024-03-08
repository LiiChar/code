
var groupAnagrams = function (strs) {
    const obj = new Map();
    for (let i = 0; i < strs.length; i++) {
        let str = [...strs[i]].sort((a, b) => a.localeCompare(b)).join('');
        if (obj.has(str)) {
            obj.set(str, [...obj.get(str), strs[i]])
        } else {
            obj.set(str, [strs[i]])
        }
    }
    let result = []
    for (let amount of obj.values()) {
        result.push(amount)
    }
    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));