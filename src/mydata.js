function mydata() {
    let arr = [];
    for (let i = 0; i < 11; i++) {
        arr.push('Log(' + i + ')=' + Math.log(i));
    }
    return arr;
}

export default mydata;