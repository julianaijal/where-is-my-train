export const fetchDepartureData = async (stationCode) => {
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
          'Ocp-Apim-Subscription-Key': 'ns-api',
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
  