const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
let country = 'RSA'
let customer = 1
let currency
let shipping

const calcShipping = () => {
    if (country === 'RSA') {
        currency = 'R';
        shipping = 400;

        if (items >= 1000 && customer !== 1) {
            console.log(FREE_WARNING)
        } else if (items >= 1000 && customer === 1) {
            shipping = 0
        }
    
    } else if (country === 'NAM') {
        currency = '$';
        shipping = 600;
        items *= 0.06;

        if (items >= 60 && customer !== 1) {
            console.log(FREE_WARNING)
        } else if (items >= 60 && customer === 1) {
            shipping = 0;
        }
    
    } else {
        currency = '$';
        shipping = 800;
        items *= 0.06;
    }
}


const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

let items = shoes + toys + shirts + batteries + pens

calcShipping();
country == 'NK' ? console.log(BANNED_WARNING) : console.log('Price: ' + currency + parseInt(items + shipping))