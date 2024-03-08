

export default function (text: string) {
    let lenthSpace = 0;
    text.split('').forEach((el: string) => el === ' ' ? lenthSpace++ : '')
    return text.slice(0, 100 - lenthSpace) + '...'
}