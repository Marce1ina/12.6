$(function () {

    var url = 'https://restcountries.eu/rest/v1/name/';
    var $countriesList = $('#countries');

    $('#search').click(searchCountries);

    function searchCountries() {
        var $countryName = $('#country-name').val();
        if (!$countryName.length) {
            $countryName = 'Poland';
        }
        $.ajax({
            url: url + $countryName,
            method: 'GET',
            success: showCountriesList
        });
    }

    function showCountriesList(resp) {
        $countriesList.empty();
        resp.forEach(function (item) {
            var $country = $('<li>');
            var $name = $('<p>').text(item.name);
            var $nativeName = $('<p>').text('Native name: ' + item.nativeName);
            var $capital = $('<p>').text('Capital: ' + item.capital);
            var $area = $('<p>').text('Area: ' + item.area);
            var $population = $('<p>').text('Population: ' + item.population);
            var $region = $('<p>').text('Region: ' + item.region);
            var $subregion = $('<p>').text('Subregion: ' + item.subregion);
            $country.append($name, $nativeName, $capital, $area, $population, $region, $subregion);
            $countriesList.append($country);
        });
    }

});