const Departures = () => {
  return (
    <main>
      <h1>Vertrektijden</h1>
    </main>
  );
};

export default Departures;


const getDeptarturesData = async (stationCode:string) => {
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
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': 'ns-api',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received:', data);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  
    return getDeptarturesData;
  };