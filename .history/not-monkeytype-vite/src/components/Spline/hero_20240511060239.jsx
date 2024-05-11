import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
  width: 100hv;

   
`;

export class hero_front extends Component {

  render() {
    return (
      <div>
        <Wrapper>
            <Spline scene="https://prod.spline.design/t4n-Ky31HQkhyeIh/scene.splinecode" />        
         </Wrapper>
      </div>
    )
  }
}

export default hero_front
