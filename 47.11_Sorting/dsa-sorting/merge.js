function merge(arrayA, arrayB) {
    let arrayC = [];
    let a = 0;
    let b = 0;
    while (a < arrayA.length && b < arrayB.length) {
        if (arrayA[a] > arrayB[b]) {
            arrayC.push(arrayB[b]);
            b++;
        } else {
            arrayC.push(arrayA[a]);
            a++;
        }
    }

    while (a < arrayA.length) {
        arrayC.push(arrayA[a]);
        a++;
    }
    while (b < arrayB.length) {
        arrayC.push(arrayB[b]);
        b++;
    }

    return arrayC;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort };
