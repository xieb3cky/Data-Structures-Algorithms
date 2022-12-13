function findFloor(arr, target) {
    let left = 0;
    let right = arr.length - 1;


    while (left < right) {
        let m = Math.floor((left + right) / 2);

        if (arr[m] < target && arr[m + 1] >= target) {
            return arr[m];
        }

        if (arr[m] > target) {
            right = m - 1;
        }
        else {
            left = m + 1;
        }
    }


}
module.exports = findFloor