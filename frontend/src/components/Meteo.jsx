import PropTypes from "prop-types";
import { useEffect } from "react";
import tempImage from "../assets/temp.png";
import sunImage from "../assets/sun.png";
import cloudImage from "../assets/cloud.png";
import rainImage from "../assets/rain.png";

function Meteo({ todaysData = [], fetchedData = {} }) {
  useEffect(() => {
    // const fetchOneTime = () => fetchOneTime();
  }, []);

  const getConditionImage = (temperature) => {
    if (temperature > 15) {
      return sunImage;
    }
    if (temperature > 10) {
      return cloudImage;
    }
    return rainImage;
  };
  return (
    <div className="AppMeteo">
      {todaysData &&
        todaysData.slice(0, 1).map((hour) => (
          <div className="case" key={hour}>
            <p className="pDH">
              Date : {hour.substr(0, 10)} --- Heure : {hour.substr(11, 5)}
            </p>
            <figure className="meteoFigure">
              <img
                className="iconeMeteo"
                src={getConditionImage(
                  fetchedData.hourly.temperature_2m[
                    fetchedData.hourly.time.indexOf(hour)
                  ]
                )}
                alt="condition"
              />
              <figcaption className="pTemp">
                {
                  fetchedData.hourly.temperature_2m[
                    fetchedData.hourly.time.indexOf(hour)
                  ]
                }{" "}
                °C
                <img className="Temp" src={tempImage} alt="Température" />
              </figcaption>
            </figure>
          </div>
        ))}
    </div>
  );
}

Meteo.propTypes = {
  todaysData: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchedData: PropTypes.shape({
    hourly: PropTypes.shape({
      temperature_2m: PropTypes.arrayOf(PropTypes.number),
      time: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default Meteo;
