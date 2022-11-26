import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <div className="container-planet-image">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ `planet-image ${planetName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}` }
          />
        </div>
        <p data-testid="planet-name" className="planets-names">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
