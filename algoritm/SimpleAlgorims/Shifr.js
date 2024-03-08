

let alphaNum = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26, }

function rot13(str, rep) {
  let res = []
  let ValNum = Object.values(alphaNum)
  let ValNume = Object.keys(alphaNum)
  str = str.replace(/\s/g, '_').split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      res[i] = '_'
    }
    if (str[i] === '!') {
      res[i] = '!'
    }
    if (str[i] === '?') {
      res[i] = '?'
    }
    if (str[i] === '.') {
      res[i] = '.'
    }
    if (str[i] === ',') {
      res[i] = ','
    }
    for (let j = 0; j < ValNum.length; j++) {
      if (str[i] === ValNume[j]) {
        res[i] = ValNume.find(function (arg) {

          if (ValNum[j] + rep > 26) {
            let a = Math.abs((ValNum[j] + rep) - 26)
            return alphaNum[arg] === a
          }
          return alphaNum[arg] === ValNum[j] + rep
        })
      }
    }

  }
  return res.join().replace(/,/g, '').replace(/_/g, ' ')
}


function rot13Rev(str, rep) {
  let res = []
  let ValNum = Object.values(alphaNum)
  let ValNume = Object.keys(alphaNum)
  str = str.replace(/\s/g, '_').split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      res[i] = '_'
    }
    if (str[i] === '!') {
      res[i] = '!'
    }
    if (str[i] === '?') {
      res[i] = '?'
    }
    if (str[i] === '.') {
      res[i] = '.'
    }
    if (str[i] === ',') {
      res[i] = ','
    }
    for (let j = 0; j < ValNum.length; j++) {
      if (str[i] === ValNume[j]) {
        res[i] = ValNume.find(function (arg) {

          if (ValNum[j] - rep < 0) {
            let a = Math.abs((26 - Math.abs(ValNum[j] - rep)))
            return alphaNum[arg] === a
          }
          return alphaNum[arg] === ValNum[j] - rep
        })
      }
    }

  }
  return res.join().replace(/,/g, '').replace(/_/g, ' ')
}

// console.log(rot13Rev('I LOVE JUMP.', 4));

function dechiphrator(str) {
  let arr = ['JUMP','LOVE','MAX',  "FLY", "FINGER", 'GREEK', 'FIRST', 'HISTORIAN', 'FIRST', 'SUCH', 'LISTS', 'WAS', 'MADE', 'HERODOTUS', 'ONLY', 'THREE', 'PLACES', 'WERE', 'MENTIONED', 'EVENTUALLY','LIST', 'EXPANDED','SEVEN', 'WONDERS', 'PROBABLY', 'EVERYONE', 'NAME','LEAST', 
  'SOME','THOSE', 'MONUMENTS', 'GREAT', 'PYRAMID', 'GIZA', 'HANGING', 'GARDENS', 'BABYLON', 'LIGHTHOUSE', 'ALEXANDRIA', 'COLOSSUS']
  let near = {}
  for (let i = 1; i < 27; i++) {
    let rot = rot13Rev(str, i)
    for (let k = 0; k < arr.length; k++) {
      if (rot.indexOf(arr[k]) >= 0) {
        if (near[i] === undefined) {
          near[i] = 1
        } else {
          near[i] += 1
        }
      }
    }
  }
  let val = Object.values(near).reduce((acc, arg) => acc > arg ? acc = acc : acc = arg)
  return {'near': near, max: val}
}

let text = `I like movies very much, especially fantasy. My favorite movie is Harry Potter and the Philosopher’s Stone. The movie came out in 2001, but it is still very good. Of course, I have seen all the Harry Potter movies, but the first one is special for me.

The movie is set in modern England and in a fictional place called Hogwarts. The story is a mixture of real-life drama and fantasy. The main character of the movie is a ten-year-old orphan Harry. His parents died when he was a baby, and now he lives with his foster parents and his stepbrother who do not like him. Although Harry has a family, he is a very lonely boy.

What I like about this movie is how drastically Harry’s life changed one day. On his eleventh birthday he was invited to study at Hogwarts, the magic school that, as it turned out, his parents attended. He started learning how to use magic and fly on a broomstick. He found good friends and a new home. At the beginning of the movie, Harry is just an ordinary boy. At the end of the movie, he is a hero and one of the most promising young wizards in Hogwarts.

In the following movies, Harry’s story continues, but I like the first one the most. For me, it is not just a story about magic, wands, spells, it is a story about ordinary people and friendship. Yes, Harry, Ron, and Hermione can cast spells, but do not seem to be some sort of mysterious creatures. For us, they are just normal people. They speak and act like any kids of their age. I like Harry Potter and the Philosopher’s Stone because it is the beginning of their story. The storylines of the main characters develop as they grow up in the other movies, but it is so nice to see them at the beginning of their journey.

In case you have not seen this movie, I would strongly recommend you to watch it, as well as the other Harry Potter movies.`

let shifrText = rot13(text.toLocaleUpperCase(), 5)
let findNumShifr = dechiphrator(shifrText);

console.log(rot13Rev(shifrText, findNumShifr.max));

