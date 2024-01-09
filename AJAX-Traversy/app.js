const textDiv = document.getElementById('text-div');
const btn = document.getElementById('btn');

btn.addEventListener('click', bringFromAPI);

function bringFromAPI() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}
function bringData() {
    const xhr = new XMLHttpRequest(); //create request
    //     console.log(xhr);
    // Open - 3 params
    // type, filename, async or not
    xhr.open('GET', './sampl.txt', true);
    //     xhr.onload = function () {
    //         if (xhr.status === 200) {
    //             console.log(xhr.responseText);
    //         }
    //     };

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }
        xhr.onprogress = function () {
            //optional during loading
            console.log('loading');
        };
        xhr.onerror = function () {
            alert(xhr.statusText);
        };
    };
    //sends request
    xhr.send();
}
