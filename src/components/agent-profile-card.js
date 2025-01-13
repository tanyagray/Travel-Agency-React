import React from 'react'

import PropTypes from 'prop-types'

import './agent-profile-card.css'

const AgentProfileCard = (props) => {
  return (
    <div className={`agent-profile-card-container ${props.rootClassName} `}>
      <img
        alt={props.imagealt}
        src={props.imageUrl}
        loading="eager"
        className="agent-profile-card-image"
      />
      <div title="my title" className="agent-profile-card-card-content">
        <div className="agent-profile-card-header">
          <span className="agent-profile-card-title">{props.title}</span>
          <span className="agent-profile-card-subtitle">{props.subtitle}</span>
        </div>
        <div className="agent-profile-card-footer">
          <button type="button" className="agent-profile-card-button button">
            <span className="agent-profile-card-text">New chat</span>
          </button>
        </div>
      </div>
    </div>
  )
}

AgentProfileCard.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  imageUrl: 'null',
  rootClassName: '',
  imagealt: 'image',
}

AgentProfileCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  rootClassName: PropTypes.string,
  imagealt: PropTypes.string,
}

export default AgentProfileCard
