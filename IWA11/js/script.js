const oneRoot = {
    root : document.querySelector('[data-key="order1"]'),
    biscuits : document.querySelector('[data-key="order1"] .biscuits .count'),
    donuts : document.querySelector('[data-key="order1"] .donuts .count'),
    pancakes : document.querySelector('[data-key="order1"] .pancakes .count'),
    status : document.querySelector('[data-key="order1"] .status dd')
}

const twoRoot = {
    root : document.querySelector('[data-key="order2"]'),
    biscuits : document.querySelector('[data-key="order2"] .biscuits .count'),
    donuts : document.querySelector('[data-key="order2"] .donuts .count'),
    pancakes : document.querySelector('[data-key="order2"] .pancakes .count'),
    status : document.querySelector('[data-key="order2"] .status dd')
}

const threeRoot = {
    root : document.querySelector('[data-key="order3"]'),
    biscuits : document.querySelector('[data-key="order3"] .biscuits .count'),
    donuts : document.querySelector('[data-key="order3"] .donuts .count'),
    pancakes : document.querySelector('[data-key="order3"] .pancakes .count'),
    status : document.querySelector('[data-key="order3"] .status dd')
}


oneRoot.biscuits.innerText = oneRoot.root.getAttribute("data-biscuits")
oneRoot.donuts.innerText = oneRoot.root.getAttribute("data-donuts")
oneRoot.pancakes.innerText = oneRoot.root.getAttribute("data-pancakes")
oneRoot.status.innerText = oneRoot.root.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

twoRoot.biscuits.innerText = twoRoot.root.getAttribute("data-biscuits")
twoRoot.donuts.innerText = twoRoot.root.getAttribute("data-donuts")
twoRoot.pancakes.innerText = twoRoot.root.getAttribute("data-pancakes")
twoRoot.status.innerText = twoRoot.root.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

threeRoot.biscuits.innerText = threeRoot.root.getAttribute("data-biscuits")
threeRoot.donuts.innerText = threeRoot.root.getAttribute("data-donuts")
threeRoot.pancakes.innerText = threeRoot.root.getAttribute("data-pancakes")
threeRoot.status.innerText = threeRoot.root.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending" 