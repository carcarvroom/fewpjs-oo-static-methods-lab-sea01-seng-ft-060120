class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(string) {
    const exceptionWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(' ')
    let newString = []
    stringArray.forEach(word => {
      if (exceptionWords.some(w => w === word)) {
        newString.push(word)
      } else {
        newString.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    })
    newString = newString.join(' ')
    return newString.charAt(0).toUpperCase() + newString.slice(1)

  }
}