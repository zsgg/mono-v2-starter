/*
bubble
*/
function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function bubbleSort(array) {
    for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
        for (let j = 0; j <= i; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}
bubbleSort([6, 1, 2, 3, 4, 5]); // [1,2,3,4,5,6]

/*
selection
*/
function selectionSort(items) {
    let len = items.length;
    let min;
    for (let i = 0; i < len; i++) {
        // set minimum to this position
        min = i;
        // check the rest of the array to see if anything is smaller
        for (let j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }
        // if the minimum isn't in the position, swap it
        if (i !== min) {
            swap(items, i, min);
        }
    }
    return items;
}
selectionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

/*
insert
*/
function insertionSort(items) {
    let len = items.length; // number of items in the array
    let value; // the value currently being compared
    let i; // index into unsorted section
    let j; // index into sorted section
    for (i = 0; i < len; i++) {
        // store the current value because it may shift later
        value = items[i];
        // Whenever the value in the sorted section is greater than the value
        // in the unsorted section, shift all items in the sorted section
        // over by one. This creates space in which to insert the value.
        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = items[j];
        }
        items[j + 1] = value;
    }
    return items;
}
insertionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

/*
quick
*/
function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSortHelper(items, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(items, index, right);
        }
    }
    return items;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

quickSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

/*
merge
*/
function merge(leftA, rightA) {
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftA.length && rightIndex < rightA.length) {
        if (leftA[leftIndex] < rightA[rightIndex]) {
            results.push(leftA[leftIndex++]);
        } else {
            results.push(rightA[rightIndex++]);
        }
    }
    let leftRemains = leftA.slice(leftIndex);
    let rightRemains = rightA.slice(rightIndex);

    // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
    if (array.length < 2) {
        return array; // Base case: array is now sorted since it's just 1 element
    }

    let midpoint = Math.floor(array.length / 2);
    let leftArray = array.slice(0, midpoint);
    let rightArray = array.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
mergeSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
