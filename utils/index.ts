import { CarProps } from "@/types";

// export const calculateCarRent = (city_mpg: number, year: number) => {
// 	const basePricePerDay = 50; // Base rental price per day in dollars
// 	const mileageFactor = 0.1; // Additional rate per mile driven
// 	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
// 	// Calculate additional rate based on mileage and age
// 	const mileageRate = city_mpg * mileageFactor;
// 	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
// 	// Calculate total rental rate per day
// 	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
// 	return rentalRatePerDay.toFixed(0);
//   };

export const fetchCars = async () => {
	try {
		const headers = {
			'x-rapidapi-key': '9803fff763msh838d46198e892c6p1b8465jsncb058bd6784a',
			'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
		};

		const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, model, year } = car;
  
	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(" ")[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	// url.searchParams.append('zoomLevel', zoomLevel);
	url.searchParams.append('angle', `${angle}`);
  
	return `${url}`;
  } 
