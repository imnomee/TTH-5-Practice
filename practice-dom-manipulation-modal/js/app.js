let countries = [];
const modalContent = document.querySelector('.modal-content');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.modal-close');
const container = document.querySelector('.countries');
//========================
//  Your Code Goes Here
//------------------------
container.addEventListener('click', (e) => {
    const countryCard = e.target.closest('.country');
    countries.forEach((country) => {
        if (country.name.common === countryCard.dataset.name) {
            const name = countryCard.dataset.name;
            const flag = country.flags.svg;
            const population = country.population;
            const region = country.region;
            const capital = country.capital;
            console.log(country);
            const html = `
            <h2>${name}</h2>
          <div class="flag">
            <img src="${flag}" alt="" />
          </div>
          <div class="content">
            <h3>Population:</h3>
            <p>${population}</p>
            <h3>Region:</h3>
            <p>${region}</p>
            <h3>Capital:</h3>
            <p>${capital}</p>
          </div>`;
            modalContent.innerHTML = html;
            overlay.classList.add('open');
        }
    });
});
// Create a click event listener on the container element
//   Make sure that only clicks on the country element are targeted
//     Get the country name from the clicked element
//     Find the country object in the countries array that matches the name

//   update the modal content with the country data
//   add the open class to the overlay element

// Create a click event listener on the close button
//   remove the open class from the overlay element

//========================
//  EXTRA CREDIT
//------------------------
closeButton.addEventListener('click', (e) => {
    if (e.target.className === 'modal-close') {
        overlay.classList.remove('open');
    }
});
// Close the modal when the user clicks outside of the modal
overlay.addEventListener('click', (e) => {
    const outside = !e.target.closest('.modal');
    if (outside) {
        overlay.classList.remove('open');
    }
});
// Close the modal when the user presses the escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.classList.remove('open');
    }
});
//========================
//  FETCH DATA
//------------------------
async function getCountries() {
    const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region'
    );
    const data = await response.json();
    countries = data;
    displayCountries(data);
    return data;
}

function displayCountries(countries) {
    const countriesHTML = countries
        .map(
            (country) => `
          <div class="country" data-name="${country.name.common}">
              <h3 class="country-name">${country.name.common}</h3>
              <img class="country-flag" src="${country.flags.svg}" />
          </div>
      `
        )
        .join('');
    container.innerHTML = countriesHTML;
}

getCountries();
