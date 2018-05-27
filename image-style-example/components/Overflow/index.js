import React from 'react';
import { View, Image } from 'react-native';
import sampleImage from '../../images/sample.gif';

const Overflow = props => (
  <View style={props.bodyStyle}>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50 }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ overflow: 'hidden' }} />
    </View>
  </View>
);

Overflow.propTypes = {
  bodyStyle: View.propTypes.style,
};

Overflow.defaultProps = {
  bodyStyle: {},
};

export default Overflow;
