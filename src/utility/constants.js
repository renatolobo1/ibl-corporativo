const key = "AIzaSyByiVhg7D1CD-0ZiAB43aYuqU8OvWtSksU";

export const G_API_URL = `https://maps.googleapis.com/maps/api/js?key=${key}&&v=3.exp&libraries=geometry,drawing,places`;

const convertTolatLng = (latLng, title) => {
  return {
    latLng,
    title
  };
};

export const locationsList = {
  Mumbai: convertTolatLng("-9.652641, -35.7209077", "Mumbai"),
  Pune: convertTolatLng("-9.652856, -35.7170687", "Pune"),
  CurrentLocation: convertTolatLng("-9.652856, -35.7170687", "CurrentLocation"),
};
