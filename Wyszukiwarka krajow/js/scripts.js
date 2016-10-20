var url = 'https://restcountries.eu/rest/v1/name/'; 
var countriesList = $('#countries');

$('#search').click(searchCountries);
function searchCountries() {
	var countryName = $('#country-name').val();
	
	if(!countryName.length) {countryName = 'Poland';}
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
		/*
		function(res) {
			showCountriesList(res)
		}
		*/
	});
}

function showCountriesList(res) { 
	countriesList.empty(); 
	res.forEach(function(item) {
		$('<li></li>').text(item.name).appendTo(countriesList);
		$('<li></li>').text(item.alpha2Code).appendTo(countriesList);
		$('<li></li>').text(item.capital).appendTo(countriesList);
		//$(countriesList).append("<li>" + item.name + "</li>")
	});
	
	
}