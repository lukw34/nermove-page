import React from 'react';
import styles from './articles.module.scss';

interface ArticleItemProps {
    title: string;
    children: React.ReactNode
}

const CustomArticleItem: React.FC<ArticleItemProps> = ({ title, children }) => (
  <section className={styles.customArticleItemContainer}>
    <div className={styles.fullArticleContent}>
      <h3>{title}</h3>
      {children}
    </div>
  </section>
);

export default CustomArticleItem;