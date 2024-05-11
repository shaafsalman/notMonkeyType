import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1; 
   
`;

export class hero_front extends Component {

  render() {
    return (
      <div>
            <Spline scene="https://prod.spline.design/t4n-Ky31HQkhyeIh/scene.splinecode" />        
      </div>
    )
  }
}

export default hero_front
