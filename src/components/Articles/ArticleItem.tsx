import React from 'react';
import styles from './articles.module.scss';

interface ArticleItemProps {
    title: string;
    content: string;
    imageUrl: string;
    imagePosition: 'left' | 'right'
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, content, imageUrl, imagePosition }) => (
  <section className={styles.articleItemContainer}>
    {imagePosition === 'left' ? <div>
      <img className={styles.articleImage} src={imageUrl}/>
    </div> : null}
    <div className={styles.articleContent}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
    {imagePosition === 'right' ? <div>
      <img className={styles.articleImage} src={imageUrl}/>
    </div> : null}
  </section>
);

export default ArticleItem;