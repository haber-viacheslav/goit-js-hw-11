function renderCountriesList(arr) {
  return arr
    .map(country => {
      return `
    <li class="country__item">
      <img class="country__img" src="${country.flags.svg}" alt="${country.name}" width="80">
      <h2>${country.name.official}</h2>
    </li>`;
    })
    .join('');
}

function renderCountryCard(arr) {
  return arr
    .map(country => {
      return `<div class="country-wrapper">
      <img src="${country.flags.svg}" alt="${country.name}" width="160">
      <h2 class='country__title'>${country.name.official}</h2>
      <p class='country__descr'>Capital:<span> ${country.capital}</span></p>
      <p class='country__descr'>Polulation:<span> ${
        country.population
      }</span></p>
      <p class='country__descr'>Languages:<span> ${Object.values(
        country.languages
      )}</span></p></div>`;
    })
    .join('');
}

export { renderCountriesList, renderCountryCard };
