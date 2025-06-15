import React from 'react';
import styles from './articles.module.scss';

export enum ImagePosition {
  left = 'left',
  right = 'right'
}

interface ArticleItemProps {
    title: string;
    content: string;
    imageUrl?: string;
    imagePosition?: ImagePosition
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, content, imageUrl, imagePosition }) => (
  <section className={styles.articleItemContainer}>
    {imageUrl && imagePosition === ImagePosition.left ? <div>
      <img className={styles.articleImage} src={imageUrl}/>
    </div> : null}
    <div className={imageUrl ? styles.articleContent : styles.fullArticleContent}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
    {imageUrl && imagePosition === ImagePosition.right ? <div>
      <img className={styles.articleImage} src={imageUrl}/>
    </div> : null}
  </section>
);

export default ArticleItem;