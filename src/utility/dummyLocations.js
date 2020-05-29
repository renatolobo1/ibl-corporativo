// import { locationsList } from "./constants";
import { createLocationObject } from "./helper";

const convertTolatLng = (latLng, title) => {
  return {
    latLng,
    title
  };
};

const locationsList = {
  LocalizacaoUnidade: convertTolatLng("-9.652641, -35.7209077", "LocalizacaoUnidade"),
  LocalizacaoUsuario: convertTolatLng("-9.652856, -35.7170687", "LocalizacaoUsuario"),
};


const directions = [
  {
    from: locationsList.LocalizacaoUsuario,
    to: locationsList.LocalizacaoUnidade,
    strokeColor: "#f6f"
  },
];
const DummyLocations = directions.map(elem => {
  return createLocationObject(
    elem.from.latLng,
    elem.from.title,
    elem.to.latLng,
    elem.to.title,
    elem.strokeColor
  );
});

export default DummyLocations;
