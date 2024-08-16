const  getTotalAmount = (arr, curr) => {
  let result = 0;
  for (const item of arr) {if (curr === item.slice(0, 3)) {
    result = result+Number(item.slice(4, item.length))
    }
}
return result;
};
export default getTotalAmount; 
