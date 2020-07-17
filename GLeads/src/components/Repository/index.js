import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Name, Description, Stats, Stat, StatCount } from './styles';

export default function Repository( {data}){
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      
      
      <Stats>
        <Stat>
          <Icon name="phone" size={16} color="#333"/>
          <StatCount>{data.phone}</StatCount>
          <Icon name="address-card" size={16} color="#333"/>
          <StatCount>{data.address}</StatCount>
        </Stat>
      </Stats>

    </Container>
  );
}

