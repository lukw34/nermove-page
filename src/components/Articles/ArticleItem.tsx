import React from 'react';
import styles from './articles.module.scss';

interface ArticleItemProps {
    title: string;
    content: string;
    imageUrl?: string;
    imagePosition?: 'left' | 'right'
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, content, imageUrl, imagePosition }) => (
  <section className={styles.articleItemContainer}>
    {imageUrl && imagePosition === 'left' ? <div>
      <img className={styles.articleImage} src={imageUrl}/>
    </div> : null}
    <div className={imageUrl ? styles.articleContent : styles.fullArticleContent}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
    {imageUrl && imagePosition === 'right' ? <div>
      <img className={styles.articleImage} src={imageUrl}/>
    </div> : null}
  </section>
);

export default ArticleItem;