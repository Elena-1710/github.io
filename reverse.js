export const reverse = (arr) => {
    for (let i = 0; i < arr.length / 2; i = i + 1) {
        const first = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = first;
    }
    return arr;
}
