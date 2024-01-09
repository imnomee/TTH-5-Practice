var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', './data/employees.json');
xhr.send();

let roomsxhr = new XMLHttpRequest(); // create request
roomsxhr.onreadystatechange = function () {
    //create callback
    if (roomsxhr.readyState === 4) {
        if (roomsxhr.status === 200) {
            console.log(roomsxhr.responseText);
            const rooms = JSON.parse(roomsxhr.responseText);
            let statusHTML = `<ul class='rooms'>`;
            rooms.forEach((room) => {
                statusHTML += `<li class=${room.available ? 'empty' : 'full'}>${
                    room.room
                }</li>`;
            });
            statusHTML += `</ul>`;
            document.getElementById('roomList').innerHTML = statusHTML;
        } else {
            alert(this.statusText);
        }
    }
};
roomsxhr.open('GET', './data/rooms.json');
roomsxhr.send();
