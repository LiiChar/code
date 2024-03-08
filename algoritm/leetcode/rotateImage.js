var rotate = function (matrix) {
    const mat = matrix.slice()
    console.log(matrix);
    for (let i = 0; i < mat.length; i++) {
        mat[0][(mat[i].length - 1) - i] = matrix[i][0]
        mat[2][(mat[i].length - 1) - i] = matrix[i][2]
    }
    // console.log(res)
    return mat
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// for (let j = matrix[i].length - 1; j >= 0; j--) {
//     col.push([matrix[i][j]])
// }