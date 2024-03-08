// Перевод числа в греческий, потом сделаю наоборот

function convertToRoman(num) {
    let ret = []
    let nem = num
    while (0 < nem) {
      if (nem < 10) {
        if (nem < 10 && 3 < nem) {
          if (nem === 6) {
            ret.push('VI')
            nem -= 6
          } else if (nem === 4) {
            ret.push('IV')
            nem -= 4
          } else if (nem === 9) {
            nem -= 9
            ret.push('IX')
          } else if (nem > 4 && nem < 10) {
            ret.push('V')
            nem -= 5
          } else {
            nem -= 1
            ret.push('I')
          }
        } else {
          nem -= 1
          ret.push('I')
        }
      } else if (nem > 9) {
        if (nem > 39 && nem < 50) {
          ret.push('XL')
          nem -= 40
        } else if (nem > 59 && nem < 90) {
          ret.push('L')
          nem -= 50
        } else if (nem > 89 && nem < 100) {
          ret.push('XC')
          nem -= 90
        } else if (nem > 100 && nem < 400) {
          ret.push('C')
          nem -= 100
        } else if (399 < nem && nem < 500) {
          ret.push('CD')
          nem -= 400
        } else if (499 < nem && nem < 900) {
          ret.push('D')
          nem -= 500
        } else if (899 < nem && nem < 1000) {
          ret.push('CM')
          nem -= 900
        } else if (nem > 999) {
          ret.push('M')
          nem -= 1000
        } else if (9 < nem && nem < 100) {
          ret.push('X')
          nem -= 10
        }
      }

    }
    return ret.join().replace(/,/g, '')
  }

  console.log(convertToRoman(17));