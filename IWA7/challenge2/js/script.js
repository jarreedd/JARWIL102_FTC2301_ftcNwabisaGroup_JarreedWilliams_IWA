const nickName = "Timmy";
const firstName = "Timothy";

if (nickName || firstName) {
    console.log(`Good Morning, ${nickName || firstName}!`)
} else {
    console.log('Good morning!')
}