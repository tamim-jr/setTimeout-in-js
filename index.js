function timeFunc(value) {
    console.log(19000);    
};

console.log(1100);
setTimeout (timeFunc, 2000);

setTimeout(function(){
    console.log("This result showing after 3 second later")
}, 3000);
console.log(1200);
console.log(1300);