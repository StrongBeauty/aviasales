export const loadApi = async (departureCity: string, arrivalCity: string, date: string) => {
  try {
    const result = await fetch(
      `http://localhost:8080/api/v1/trips/?departureCity=${departureCity}&arrivalCity=${arrivalCity}&date=${date}`
    );
    return result.json();
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.log(e);
  }
};

export const postApi = async (tripId: number | undefined, object: {}) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('data', JSON.stringify(object));

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(`http://localhost:8080/api/v1/trips/${tripId}`, requestOptions);
    return response.status;
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.log(e);
  }
};
