import React from 'react';
import ArticleItem, { ImagePosition } from './ArticleItem';

import q2 from '../../img/neroliving/2.jpg';
import q3 from '../../img/neroliving/3.jpg';
import q4 from '../../img/neroliving/4.jpg';
import q5 from '../../img/neroliving/5.jpg';
import { StrongLinkButton } from '../Button/StrongLinkButton';

const articles = [{
  key: 'Q1', 
  title: 'NeroLiving -  Całoroczne Domy Mobilne i Modułowe',
}, {
  key: 'Q2',
  title: 'Co zyskasz korzystajac z naszej oferty ?',
  content: 'Z pasją zajmujemy się projektowaniem, produkcją i sprzedażą wysokiej jakości domków mobilnych. Nasze produkty są doskonałą alternatywą dla tradycyjnych rozwiązań mieszkaniowych, oferując komfort, funkcjonalność i mobilność.',
  imageUrl: q2,
  imagePosition: ImagePosition.left,
},
{
  key: 'Q3',
  title: 'Jaka jest nasza misja ?',
  content: 'Chcemy zapewnić naszym klientom wolności i elastyczności w wyborze miejsca zamieszkania. Dążymy do tego, aby dostarczyć innowacyjne i przyjazne środowisku rozwiązania mieszkaniowe, które spełniają najwyższe standardy jakości i estetyki',
  imageUrl: q3,
  imagePosition: ImagePosition.right,

}, {
  key: 'Q4',
  title: 'Co oferujemy ?',
  content: 'Oferujemy różnorodne modele domków modułowych, które są starannie zaprojektowane, aby sprostać różnorodnym potrzebom klientów. Nasze produkty charakteryzują się nie tylko wysoką jakością wykonania, ale także funkcjonalnością, ekologicznymi rozwiązaniami i atrakcyjnym designem',
  imageUrl: q4,
  imagePosition: ImagePosition.left,

}, {
  key: 'Q5',
  title: 'Co znajdziesz w naszej ofercie ?',
  content: 'W naszej ofercie znajdują się domki mobilne o różnych rozmiarach, od małych i przytulnych, po przestronne rodzinne domki. Każdy model jest dostępny w różnych wariantach wyposażenia, aby spełnić indywidualne preferencje klientów.',
  imageUrl: q5,
  imagePosition: ImagePosition.right,

}];

const NerolivingDetails = () => (
  <div>
    {articles.map(({title, key, imagePosition, content, imageUrl}) => (
      <ArticleItem content={content} imagePosition={imagePosition} imageUrl={imageUrl} key={key} title={title} />
    ))}
    <div>
      <StrongLinkButton title="Sprawdż naszą ofertę Domków Modułowych" to="/house" />
    </div>
  </div>
);

export default NerolivingDetails;