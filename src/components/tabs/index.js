import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabsItem, TabsText,
} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabsText> Indicar amigo </TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabsText> Cobrar </TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabsText> Depositar </TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabsText> Transferir </TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabsText> Bloquear Cartão </TabsText>
        </TabsItem>
      </TabsContainer>
    </Container>
  );
}
