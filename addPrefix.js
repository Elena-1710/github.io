const addPrefix = (names, prefiks) => {
     const newNames = [];

    for (let i = 0; i < names.length; i = i + 1) {
        newNames[i] = `${prefiks} ${names[i]}`;

    }
    return newNames;
}
export default addPrefix;
