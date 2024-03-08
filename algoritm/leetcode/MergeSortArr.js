var mergeTwoLists = function (list1, list2) {
    let arr = [...list1, ...list2]

    function sort(arr) {
        let cons = arr[Math.round(arr.length / 2)]

        for (let i = 0; i < arr.length; i++) {
            for (let j = arr.length; j > 0; j--) {
                if(arr[i] > arr[j]){
                    let elem = arr[j]
                    arr[j] = arr[i]
                    arr[i] = elem
                } else if (arr[i] === arr[j]) {
                    let elem = arr[i + 1]
                    arr[i + 1] = arr[j]
                    console.log(arr);
                    arr[j] = elem
                }
            }
        }

        // return arr
    }

    console.log(sort(arr)); 
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));