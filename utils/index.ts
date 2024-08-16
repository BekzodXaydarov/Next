const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla"
const options = {
    method: "GET",
    headers:{
        "X-RapidAPI-Key":"ae6fb0928cmshd2cd557e85d26dap129f8djsnaca3134640a9",
        "X-Rapidapi-Host":" cars-by-api-ninjas.p.rapidapi.com"
    }
}

export  async function fetchCars() {
    const headers = options.headers;
    const responses = await fetch(url,{
        headers:headers
    })
    const result = await responses.json()
    return result
}


export const calculateCarRent = (city_mpg:number,year:number)=>{
    const basePricePerDay = 50;
    const mileageFctor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFctor;
    const ageRoute = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRoute;

    return rentalRatePerDay.toFixed(0)
}