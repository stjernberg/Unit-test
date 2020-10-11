export const hackerSpeak = (words) => {
    return words.replace(/S/gi, 5).replace(/I/gi, 1).replace(/A/gi, 4).replace(/O/gi, 0).replace(/E/gi, 3)
}