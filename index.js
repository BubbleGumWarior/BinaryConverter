function convertToBindary (number) {
    let binary = (number % 2).toString();
    for (; number > 1; ) {
        number = parseInt(number / 2);
        binary = (number % 2) + (binary);
    }
    return binary;
}

window.onload = function () {
    console.log(convertToBindary(10));
    console.log((10).toString(2));
}