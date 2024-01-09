//Promise constructor takes two functions, one when its fufilled and when its rejected
const order = false;
const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Your order is ready');
        } else {
            reject(Error('Your order cannot be made'));
        }
    }, 1000);
});

console.log(breakfastPromise);

breakfastPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
