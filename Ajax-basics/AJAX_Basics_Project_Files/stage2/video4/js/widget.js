const list = document.getElementById('employeeList');

let xhr = new XMLHttpRequest(); // create request
xhr.onreadystatechange = function () {
    //create callback
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let employees = JSON.parse(xhr.responseText);
            // console.log(employees);
            //     xhr.responseText; //we get json data and not formated html data
            let statusHTML = `<ul class='bulleted'>`;
            employees.forEach((emp) => {
                statusHTML += `<li class=${emp.inoffice ? 'in' : 'out'}>${
                    emp.name
                }</li>`;
            });
            statusHTML += `</ul>`;
            list.innerHTML = statusHTML;
        } else {
            alert(xhr.statusText);
        }
    }
};
xhr.open('GET', './data/employees.json');
xhr.send();
