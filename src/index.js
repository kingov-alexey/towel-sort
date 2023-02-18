// You should implement your task here.

module.exports = function towelSort(matrix) {
    // разноразмерные матрицы, массив массивов
    console.log("входящий аргумент  matrix", matrix);

    // результирующий одномерный массив
    let result = [];

    //если массив нулевой сразу вывожу
    if (matrix === undefined) {
        console.log("я тут");
        return result;
    }

    //если массив нулевой сразу вывожу
    if (matrix.length === 0) {
        return result;
    }

    let move = "left";

    for (let row of matrix) {
        if (move === "left") {
            result.push(...row);
            move = "right";
        } else {
            result.push(...row.reverse());
            move = "left";
        }
    }

    console.log("проверяю что на выходе: ", result);
    return result;
};
