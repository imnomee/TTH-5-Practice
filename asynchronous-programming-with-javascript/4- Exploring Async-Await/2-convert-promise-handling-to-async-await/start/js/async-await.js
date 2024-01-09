const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

async function getJSON(url) {
    try {
        const response = await fetch(url);
        return await response.json();
        // try will contain all the code that need to be executed
    } catch (err) {
        throw err;
        // will be executed if the exception is thrown
    }
}
// Handle all fetch requests
async function getPeopleInSpace(url) {
    const peopleJson = await getJSON(url);

    const profiles = peopleJson.people.map(async (person) => {
        const craft = person.craft;
        const profileJson = await getJSON(wikiUrl + person.name);

        return { ...profileJson, craft };
    });
    return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
    data.map((person) => {
        const section = document.createElement('section');
        peopleList.appendChild(section);
        // Check if request returns a 'standard' page from Wiki
        if (person.type === 'standard') {
            section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
        } else {
            section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
        }
    });
}

btn.addEventListener('click', (event) => {
    event.target.textContent = 'Loading...';
    getPeopleInSpace(astrosUrl)
        .then(generateHTML)
        .catch(
            (error) =>
                (peopleList.innerHTML = `<h3>Something went wrong</h3>`) +
                console.error(error)
        )
        .finally(() => event.target.remove());
});
