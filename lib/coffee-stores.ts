export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?limit=6&proximity=-79.3789680885594%2C43.653833032607096&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();

    return data.features;
  } catch (error) {
    console.error('Error while fetching coffee stores', error);
  }
};
