const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = ((leoBalance*-1) + (sarahBalance*-1)).toFixed(2)
const leo = `${leoName} ${leoSurname.trim()} (Owed: R${(leoBalance*-1).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R${(sarahBalance*-1).toFixed(2)})`
const total = "Total amount owed: R"
const lineBreak = '\n'
const result = lineBreak+ leo +lineBreak+ sarah +lineBreak+lineBreak+ divider +lineBreak+ total + owed +lineBreak+ divider

console.log(result)