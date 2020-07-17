import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '~/components/Repository';

import { Container , Title , Form, Input , Submit, List } from './styles';

export default function Main() {
  return(
  <Container>
    <Title>GLeads</Title>

    <Form>
      <Input
        autoCapitalize = "none"
        autoCorrect= {false}
        placeholder ="Pesquisar Lead"
      />
      <Submit onPress={() => {}}>
        <Icon name="add" size={22} color='#FFF'/>
        </Submit>
    </Form>

    <List
      keyboardShouldPersistTaps="handled"
      data={[
        {
          id: 1,
          name:"Lucas Araújo Alves",
          description: "teste do primeiro lead",
          phone: 85984107183,
          address: "Rua Jaborandi 821 A",

        }
      ]}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Repository data={item} />
        )}
      />
    </Container>

);

}
