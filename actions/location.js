/* global navigator */

export function locationHasErrored(error) {
  return {
    type: 'LOCATION_HAS_ERRORED',
    hasErrored: error,
  };
}
export function locationIsLoading(bool) {
  return {
    type: 'LOCATION_IS_LOADING',
    isLoading: bool,
  };
}
export function locationFetchDataSuccess(location) {
  return {
    type: 'LOCATION_FETCH_DATA_SUCCESS',
    location,
  };
}

export function locationFetchLocation() {
  return (dispatch) => {
    dispatch(locationIsLoading(true));
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latlon = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          dispatch(locationFetchDataSuccess(latlon));
          dispatch(locationIsLoading(false));
        },
        () => {
          dispatch(locationHasErrored(true));
          dispatch(locationIsLoading(false));
        },
      );
    } else {
      dispatch(locationHasErrored(true));
      dispatch(locationIsLoading(false));
    }
  };
}
