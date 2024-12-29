

export const fetchCars = async () => {
	const headers = {
		'x-rapidapi-key': '9803fff763msh838d46198e892c6p1b8465jsncb058bd6784a',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
		headers: headers
	}) ;

	const result = await response.json()
	return result

}