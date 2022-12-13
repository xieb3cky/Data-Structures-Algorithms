function sortedFrequency(arr, target) {


    let left = 0;
    let right = arr.length - 1;

    if (arr[left] > target) {
        return -1;
    }

    if (arr[right] < target) {
        return -1;
    }

    if (arr[left] === target && arr[right] === target) {
        return arr.length;
    }


    let start = findStart(arr, target);

    let end = findEnd(arr, target);


    return end - start + 1;
}

function findStart(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let md = Math.floor((left + right) / 2)

        if ((md === 0 || arr[md - 1] !== target) && arr[md] === target) {
            return md;
        }
        if (arr[md] < target) {
            left = md + 1;
        } else {
            right = md - 1;
        }
    }

    return -1
}


function findEnd(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let md = Math.floor((left + right) / 2)

        if (md === arr.length - 1 || arr[md] === target && arr[md + 1] !== target) {
            return md;
        }
        if (arr[md] > target) {
            right = md - 1;
        } else {
            left = md + 1;
        }
    }

    return -1
}
module.exports = sortedFrequency