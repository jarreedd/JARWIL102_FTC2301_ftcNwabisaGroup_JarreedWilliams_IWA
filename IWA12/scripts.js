const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

let statusBook1 = document.querySelector('#book1 .status')
let reserveBook1 = document.querySelector('#book1 .reserve')
let checkoutBook1 = document.querySelector('#book1 .checkout')
let checkinBook1 = document.querySelector('#book1 .checkin')

let statusBook2 = document.querySelector('#book2 .status')
let reserveBook2 = document.querySelector('#book2 .reserve')
let checkoutBook2 = document.querySelector('#book2 .checkout')
let checkinBook2 = document.querySelector('#book2 .checkin')

let statusBook3 = document.querySelector('#book3 .status')
let reserveBook3 = document.querySelector('#book3 .reserve')
let checkoutBook3 = document.querySelector('#book3 .checkout')
let checkinBook3 = document.querySelector('#book3 .checkin') 

checkinBook1.style.color = ''
statusBook1.style.color = STATUS_MAP[statusBook1.innerHTML].color
if (!STATUS_MAP[statusBook1.innerHTML].canReserve) {
    reserveBook1.disabled = true;
}
if (!STATUS_MAP[statusBook1.innerHTML].canCheckout) {
    checkoutBook1.disabled = true;
}
if (!STATUS_MAP[statusBook1.innerHTML].canCheckIn) {
    checkinBook1.disabled = true;
}

checkinBook2.style.color = ''
statusBook2.style.color = STATUS_MAP[statusBook2.innerHTML].color
if (!STATUS_MAP[statusBook2.innerHTML].canReserve) {
    reserveBook2.disabled = true;
}
if (!STATUS_MAP[statusBook2.innerHTML].canCheckout) {
    checkoutBook2.disabled = true;
}
if (!STATUS_MAP[statusBook2.innerHTML].canCheckIn) {
    checkinBook2.disabled = true;
}

checkinBook3.style.color = ''
statusBook3.style.color = STATUS_MAP[statusBook3.innerHTML].color
if (!STATUS_MAP[statusBook3.innerHTML].canReserve) {
    reserveBook3.disabled = true;
}
if (!STATUS_MAP[statusBook3.innerHTML].canCheckout) {
    checkoutBook3.disabled = true;
}
if (!STATUS_MAP[statusBook3.innerHTML].canCheckIn) {
    checkinBook3.disabled = true;
}