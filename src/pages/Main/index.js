import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/header';
import Tabs from '~/components/tabs';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title> Saldo disponível</Title>
            <Description>R$ 197.611,56</Description>
          </CardContent>
          <CardFooter>
            <Annotation>Transferência de R$ 20,00 recebida de Diego Schell Fernandes.</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
