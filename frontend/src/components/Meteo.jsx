import PropTypes from "prop-types";
import tempImage from "../assets/temp.png";

function Meteo({ todaysData = [], getConditionImage, fetchedData = {} }) {
  return (
    <div className="App">
      {todaysData &&
        todaysData.slice(0, 1).map((hour) => (
          <div className="case" key={hour}>
            <div>
              <p className="pDH">
                Date : {hour.substr(0, 10)} --- Heure : {hour.substr(11, 5)}
              </p>
              <figure>
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
          </div>
        ))}
    </div>
  );
}

Meteo.propTypes = {
  todaysData: PropTypes.arrayOf(PropTypes.string).isRequired,
  getConditionImage: PropTypes.func.isRequired,
  fetchedData: PropTypes.shape({
    hourly: PropTypes.shape({
      temperature_2m: PropTypes.arrayOf(PropTypes.number),
      time: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default Meteo;
