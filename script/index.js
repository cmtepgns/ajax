function showCountries() {
  let xhr = new XMLHttpRequest();

  // To inicialize the request
  xhr.open("GET", "https://restcountries.com/v2/all", true);

  // Callback function to handle the response
  xhr.onload = function () {
    if (xhr.status == 200) {
      // console.log('success')
      let countries = JSON.parse(this.response);
      //console.log(countries);
      countries.forEach((country) => {
        const countryCard = document.createElement("div");
        const countryCardImg = document.createElement("img");
        countryCard.innerHTML = country.name;
        countryCardImg.src = country.flag;
        countryCard.append(countryCardImg);
        document.getElementById("feed").appendChild(countryCard);
      });
    }
  };
  xhr.send();
}
