import React from 'react';
import * as S from './styles';
import Calendar from '../Calendar';

const App = () => {
  return (
    <S.Wrapper>
      <S.LeftColumn>poly-cal</S.LeftColumn>
      <Calendar />
    </S.Wrapper>
  );
};

export default App;
