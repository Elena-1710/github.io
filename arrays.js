export const swap = (arr) => {
    if (arr.length < 2) { return arr; } else {
        const first = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = first;

        return arr;
    }

}
