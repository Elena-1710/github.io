const makeCensored = (text, value) => {
    let arr = text.split(' '); // Разделяет строку по раздлеителю
    const newArr = [];   // Формируем новый массив начиная с пустой строки
    for (const word of arr) {
        if (value.includes(word)) {
            newArr.push('$#%!');
        } else {
            newArr.push(word);
        }
    }
    return newArr.join(' ');
};
export default makeCensored;
