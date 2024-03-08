

function binary_search(arr, target) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = (min + max);
        let guess = arr[mid];

        if (guess === target) {
            return mid;
        } else if (guess > target) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return null;
}

console.log(binary_search([1, 3, 5, 7, 9, 13], 3));
