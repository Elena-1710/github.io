const calculateAverage = (temperatures) => {
    if (temperatures.length === 0) {
        return null;
    };

    let sumTemperatures = 0;
    for (let i = 0; i < temperatures.length; i += 1) {
        sumTemperatures = sumTemperatures + temperatures[i];

    };
    const result = sumTemperatures / temperatures.length;
    return result;
};
export default calculateAverage;
