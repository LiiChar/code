var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;
    let maxMount = 1;

    while (left < right) {
        const minValue = Math.min(height[left], height[right])
        const distanceValue = Math.abs(right - left)
        maxMount = minValue * distanceValue;
        if ( height[left] <= height[right]) {
            left++
        }else {
            right--
        }
    }
    return maxMount
};

console.log(maxArea([2,3,4,5,18,17,6]));