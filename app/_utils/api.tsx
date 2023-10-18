const BASE_URL = 'https://gateway.apiportal.ns.nl';
const apiKey = process.env.ns_api|| '';



export const getStationCodes = async (stationName:string) => {
  const headers = new Headers();
  headers.append('Ocp-Apim-Subscription-Key', apiKey);

  const endpoint = `${BASE_URL}/reisinformatie-api/api/v2/stations?q=${stationName}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      return data.payload;
    } else {
      throw new Error(`Error fetching station codes: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`There was a problem with the fetch operation: ${error}`);
  }
};

export const fetchDepartureData = async (stationCode:string) => {
  const baseUrl =
    'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures';
  const queryParams = {
    lang: 'en',
    station: stationCode,
    maxJourneys: 10,
  };

  const queryString = Object.keys(queryParams)
    .map((key) => key + '=' + queryParams[key])
    .join('&');
  const url = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.payload.departures;
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};
