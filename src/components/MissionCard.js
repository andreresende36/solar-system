import React from 'react';
import PropTypes from 'prop-types';
import calendarImg from '../images/calendar.png';
import destinationImg from '../images/destination.png';
import point from '../images/point.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <div className="mission-name">
          <p data-testid="mission-name">{name}</p>
        </div>
        <div className="mission-data">
          <div className="mission-year">
            <img src={ calendarImg } alt="calendar" />
            <p data-testid="mission-year">{year}</p>
          </div>
          <div className="mission-country">
            <img src={ point } alt="point" />
            <p data-testid="mission-country" className="country-name">{country}</p>
          </div>
          <div className="mission-destination">
            <img src={ destinationImg } alt="destinationImg" />
            <p data-testid="mission-destination" className="destination-name">
              {destination}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
