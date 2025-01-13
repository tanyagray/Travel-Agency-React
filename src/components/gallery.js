import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import AgentProfileCard from './agent-profile-card'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className={`gallery-container ${props.rootClassName} `}>
      <Repeater
        items={
          props['agentsArray'] || [
            {
              name: 'with Robin',
              image: 'https://picsum.photos/1280/720',
              topic: 'Strategize gift spending',
            },
            {
              name: 'with Shyla',
              image: 'https://picsum.photos/1280/720',
              topic: 'Ace awkward family convos',
            },
          ]
        }
        renderItem={(agentArrayItem) => (
          <Fragment>
            <AgentProfileCard
              title={agentArrayItem?.topic}
              imageUrl={agentArrayItem?.image}
              subtitle={agentArrayItem?.name}
              rootClassName="agent-profile-cardroot-class-name1"
            ></AgentProfileCard>
          </Fragment>
        )}
      />
    </div>
  )
}

Gallery.defaultProps = {
  agentsArray: [
    {
      name: 'with Robin',
      image: 'https://picsum.photos/1280/720',
      topic: 'Strategize gift spending',
    },
    {
      name: 'with Shyla',
      image: 'https://picsum.photos/1280/720',
      topic: 'Ace awkward family convos',
    },
  ],
  rootClassName: '',
}

Gallery.propTypes = {
  agentsArray: PropTypes.array,
  rootClassName: PropTypes.string,
}

export default Gallery
