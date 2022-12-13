function findRotatedIndex(arr, t) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let md = Math.floor((left + right / 2));

        //check if md = target 

        if (arr[md] === target) {
            return md;
        }

        //check if in left arr 

        if (arr[left] <= arr[md]) {
            if (t > arr[md] || t < arr[left]) {
                left = md + 1;
            }
            else {
                right = md - 1;
            }
        }

        //check if in right arr
        else {
            if (t > arr[right] || t < arr[md]) {
                right = md - 1;
            }
            else {
                left = md + 1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex