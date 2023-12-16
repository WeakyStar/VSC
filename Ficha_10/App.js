import React from 'react';
import NewInfo from './NewInfo';
import 'styles/styles.css';

function App() {
  const news = [
    [
      "Henry Kissinger morre aos 100 anos",
      "Henry Kissinger, figura incontornável da diplomacia mundial...",
      "Kissinger morreu na sua casa no Connecticut, de acordo com um comunicado da sua empresa de consultoria geopolítica, Kissinger Associates Inc. Não foram, para já, mencionadas as circunstâncias da morte.<br><br>O comunicado refere que Kissinger será sepultado numa cerimónia privada da família, a que se seguirá posteriormente uma cerimónia pública em Nova Iorque.<br><br><b>Kissinger esteve ativo no final da vida, participando em reuniões na Casa Branca, publicando um livro sobre estilos de liderança e testemunhando perante uma comissão do Senado sobre a ameaça nuclear da Coreia do Norte.</b> Em julho de 2023, fez uma visita surpresa a Pequim para se encontrar com o presidente chinês Xi Jinping.<br><br>Durante a década de 1970, em plena Guerra Fria, participou em muitos dos acontecimentos globais que mudaram a época da década, enquanto era conselheiro de segurança nacional e secretário de Estado do presidente republicano Richard Nixon."
    ],
    [
      "Segunda Notícia",
      "Lead da Segunda Notícia...",
      "Texto da Segunda Notícia..."
    ]
  ];

  return (
    <div className="App">
      <NewInfo news={news} />
    </div>
  );
}

export default App;
