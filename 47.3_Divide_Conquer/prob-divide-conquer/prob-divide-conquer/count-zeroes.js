function countZeroes(arr) {

    let left = 0;
    let right = arr.length - 1;

    //if all zeros 
    if (arr[left] === 0) {
        return arr.length;
    }

    //if all ones
    if (arr[right] === 1) {
        return 0;
    }

    while (left < right) {
        let md = Math.floor((left + right) / 2);

        //check if found

        if (arr[md - 1] === 1 && arr[md] === 0) {
            return arr.length - md;
        }

        //else check left arr [0,0]

        if (arr[md] === 0) {
            right = md;
        }

        //else check right arr
        else {
            left = md;
        }

    }

    return 0;
}
module.exports = countZeroes