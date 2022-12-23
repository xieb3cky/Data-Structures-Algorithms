function bubbleSort(arr) {
    let made_changes = true;

    while (made_changes) {
        made_changes = false;
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                made_changes = true;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr
}

module.exports = bubbleSort;