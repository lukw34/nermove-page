import React from 'react';
import ArticleItem from './ArticleItem';

const articles = {
  step1: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus scelerisque sodales. In at luctus lacus. Aenean ultricies, sapien quis porta lobortis, turpis elit euismod lectus, non mollis nibh augue non risus. Curabitur eu tellus libero.',
    imageUrl: 'https://www.starlash.pl/wp-content/uploads/2018/05/zam%C3%B3wienie.png'
  },
  step2: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet tellus et ullamcorper rhoncus. Pellentesque lectus lorem, efficitur at risus et, ornare bibendum diam.',
    imageUrl: 'https://img.agrofoto.pl/monthly_2021_04/budowa-przyczepy-jednoosiowej-3,5t_l_b9c794b0b9e34c5990ac94bb6f69c9be.jpg'
  },
  step3: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus scelerisque sodales. In at luctus lacus. Aenean ultricies, sapien quis porta lobortis, turpis elit euismod lectus, non mollis nibh augue non risus. Curabitur eu tellus libero.',
    imageUrl: 'https://i.ytimg.com/vi/svI00-kYJ0I/maxresdefault.jpg'
  },
  step4: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet tellus et ullamcorper rhoncus. Pellentesque lectus lorem, efficitur at risus et, ornare bibendum diam.',
    imageUrl: 'https://bi.im-g.pl/im/56/a0/17/z24772694AMP,Street-Food-Polska-Festival-w-Rzeszowie--edycja-VI.jpg'
  }
};

const RealizationArticle = () => (
  <div>
    <ArticleItem content={articles.step1.content} imagePosition="left" imageUrl={articles.step1.imageUrl} title="Etap 1" />
    <ArticleItem content={articles.step2.content} imagePosition="right" imageUrl={articles.step2.imageUrl} title="Etap 2" />
    <ArticleItem content={articles.step3.content} imagePosition="left" imageUrl={articles.step3.imageUrl} title="Etap 3" />
    <ArticleItem content={articles.step4.content} imagePosition="right" imageUrl={articles.step4.imageUrl} title="Etap 4" />
  </div>
);

export default RealizationArticle;