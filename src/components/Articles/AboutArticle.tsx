import React from 'react';
import ArticleItem from './ArticleItem';

const articles = {
  kamil: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus scelerisque sodales. In at luctus lacus. Aenean ultricies, sapien quis porta lobortis, turpis elit euismod lectus, non mollis nibh augue non risus. Curabitur eu tellus libero.',
    imageUrl: 'https://i.pinimg.com/736x/cd/cf/d4/cdcfd46533870d1938c0dc6452518695.jpg'
  },
  loczek: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet tellus et ullamcorper rhoncus. Pellentesque lectus lorem, efficitur at risus et, ornare bibendum diam.',
    imageUrl: 'https://static.wikia.nocookie.net/deathbattlefanon/images/8/84/Jerry-minion-transparent-0.png'
  }
};

const AboutArticle = () => (
  <div>
    <ArticleItem content={articles.kamil.content} imagePosition="left" imageUrl={articles.kamil.imageUrl} title="Kamil" />
    <ArticleItem content={articles.loczek.content} imagePosition="right" imageUrl={articles.loczek.imageUrl} title="Loczek" />
  </div>
);

export default AboutArticle;