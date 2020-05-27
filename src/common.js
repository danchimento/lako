const px = value => `${value}px`;
const val = value => {
    if (value.toString().indexOf('px') >= 0) {
        return parseInt(value.replace('px', ''));
    } else {
        return parseInt(value);
    }
}

export {
    px,
    val
}