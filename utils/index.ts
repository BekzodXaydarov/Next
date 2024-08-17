import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps) {
  const {manufacturers,year,model,limit,fuel} = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make${manufacturers}&year=${year}&model=${model}&limit=${limit}&full_type=${fuel}`;
  const headers =  {
    "X-RapidAPI-Key": "ae6fb0928cmshd2cd557e85d26dap129f8djsnaca3134640a9",
    "X-Rapidapi-Host": " cars-by-api-ninjas.p.rapidapi.com",
  }
  const responses = await fetch(url, {
    headers: headers,
  });
  const result = await responses.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFctor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFctor;
  const ageRoute = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRoute;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);

  url.searchParams.append("angle", angle);

  return url.toString();
};
