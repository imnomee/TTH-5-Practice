async function getCountries(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Something went wrong');
        const data = await response.json().then(displayCountries);
    } catch (error) {
        console.log(error);
    }
}
//1. Create an async function called getCountries
//  - retrieve the name, capital, population and flags for all countries.
//  - Convert the response to JSON.
//  - pass the data to the displayCountries function.
//  - Catch any errors and log them to the console.
function displayCountries(data) {
    const countries = document.querySelector('.countries');
    data.forEach((country) => {
        const name = country.name.common;
        const capital = country.capital;
        const population = country.population;
        const region = country.region;
        const flag = country.flags.svg;
        const item = document.createElement('div');
        item.classList.add('country');
        item.innerHTML = `
      <h3 class="country-name">${name}</h3>
      <img class="country-flag" src='${flag}' />
      <div class="content">
            <h3>Capital</h3>
            <p>${capital}</p>
            <h3>Population</h3>
            <p>${population}</p>
            <h3>Region</h3>
            <p>${region}</p>
            </div>
      `;
        countries.appendChild(item);
    });
}
//2. Create a displayCountries function that takes in an array of countries.
//  - Loop over the array of countries.
//      - Create a div for each country.
//      - Add the country name and flag to the div with the provided HTML structure.
//      - Add the created div to the `.countries` container element.

//3. Call the getCountries function.
getCountries('https://restcountries.com/v3.1/all');
/* <div class="country">
    <h3 class="country-name">${name}</h3>
    <img class="country-flag" src="https://flagcdn.com/nl.svg" />
    <div class="content">
        <h3>Capital</h3>
        <p>Amsterdam</p>
        <h3>Population</h3>
        <p>16.655.799</p>
        <h3>Region</h3>
        <p>Europe</p>
    </div>
</div>; */
