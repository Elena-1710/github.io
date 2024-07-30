const calculateSum = (coll1) => {
    let sum = 0;

    if (coll1 != [])

        for (let i = 0; i < coll1.length; i += 1) {

            if (coll1[i] % 3 === 0) { sum = sum + coll1[i]; };
        };
    return sum;
};
export default calculateSum;
