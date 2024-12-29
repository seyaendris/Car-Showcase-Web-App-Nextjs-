export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
	return rentalRatePerDay.toFixed(0);
  };

export const fetchCars = async () => {
	try {
		const headers = {
			'x-rapidapi-key': '9803fff763msh838d46198e892c6p1b8465jsncb058bd6784a',
			'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
		};

		const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
			headers: headers
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error: any) {
		console.error('Error fetching cars:', error.message);
		throw error;
	}
};

