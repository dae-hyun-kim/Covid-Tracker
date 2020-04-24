import React from 'react'
import psa from '../assets/images/psa.gif'

export default class Guidelines extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="headings">World Health Organization</h1>
        <p>Public Service Announcement</p>
        <div className="mt-3">
          <img src={psa} alt="psa" className="mt-5"/>
          <h3 className="mt-3">STAY HOME. SAVE LIVES.</h3>
          <h6 className="mb-3">Help stop coronavirus</h6>
          <div className="mb-5">
            <p>1. <span className="bold">STAY</span> home as much as you can</p>
            <p>2. <span className="bold">KEEP</span> a safe distance</p>
            <p>3. <span className="bold">WASH</span> hands often</p>
            <p>4. <span className="bold">COVER</span> your cough</p>
            <p>5. <span className="bold">SICK?</span> Call ahead</p>
          </div>
        </div>
      </div>
    )
  }
}
