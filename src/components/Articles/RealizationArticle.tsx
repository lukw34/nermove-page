import React from 'react';
import ArticleItem, { ImagePosition } from './ArticleItem';

import step3 from '../../img/realisation/step3.jpg';
import step4 from '../../img/realisation/step4.jpg';
import step5 from '../../img/realisation/step5.jpg';
import step6 from '../../img/realisation/step6.jpg';
import step7 from '../../img/realisation/step7.jpg';

const articles = [{
  key: 'step1', 
  title: 'Kontakt i zapytanie',
  content: 'Wszystko zaczyna się od kontaktu z naszym zespołem. Po przesłaniu zapytania lub nawiązaniu kontaktu, ustalamy szczegóły dotyczące Twoich potrzeb i oczekiwań. Niezależnie od tego, czy interesuje Cię przyczepa gastronomiczna, czy też chcesz stworzyć projekt specjalny, jesteśmy tutaj, aby Ci pomóc!',
  imagePosition: ImagePosition.left,
},
{
  key: 'step2',
  title: 'Konsultacje i dobór rozwiązań',
  content: 'Na podstawie rozmowy i analizy Twoich wymagań, nasi specjaliści zaproponują optymalne rozwiązania. Doradzimy Ci najlepsze opcje w zakresie wyposażenia, wymiarów, układu i wyglądu przyczepy. Ustalimy również termin realizacji i wstępną wycenę.',
  imagePosition: ImagePosition.right
},
{
  key: 'step3',
  title: 'Projektowanie',
  content: 'Po ustaleniu wszystkich szczegółów, przystępujemy do stworzenia indywidualnego projektu Twojej przyczepy. Na tym etapie uwzględniamy Twoje pomysły oraz wymagania, a także dbamy o to, by projekt był funkcjonalny i zgodny z przepisami prawa. Otrzymasz od nas wizualizacje i projekt techniczny, który będzie stanowił podstawę do dalszych prac.',
  imageUrl: step3,
  imagePosition: ImagePosition.left
},
{
  key: 'step4',
  title: 'Akceptacja projektu',
  content: 'Kiedy projekt będzie gotowy, przesyłamy Ci go do akceptacji. Masz możliwość wprowadzenia ewentualnych poprawek, aby wszystko było zgodne z Twoimi oczekiwaniami. Dopiero po ostatecznym zatwierdzeniu projektu rozpoczynamy produkcję.',
  imageUrl: step4,
  imagePosition: ImagePosition.right
},
{
  key: 'step5',
  title: 'Produkcja przyczepy',
  content: 'Po zaakceptowaniu projektu przechodzimy do etapu produkcji. Nasz zespół fachowców starannie wykonuje każdą część przyczepy, dbając o najwyższą jakość i precyzyjne wykonanie. W tym czasie jesteśmy w stałym kontakcie, abyś miał/a pełną pewność, że prace przebiegają zgodnie z planem.',
  imageUrl: step5,
  imagePosition: ImagePosition.left
},
{
  key: 'step6',
  title: 'Kontrola jakości',
  content: 'Po zakończeniu produkcji przyczepa przechodzi dokładną kontrolę jakości. Sprawdzamy wszystkie elementy, zarówno te techniczne, jak i estetyczne, by upewnić się, że spełniają najwyższe standardy. Przeprowadzamy testy funkcjonalne, aby Twój sprzęt był gotowy do pracy od pierwszego dnia.',
  imageUrl: step6,
  imagePosition: ImagePosition.right
},
{
  key: 'step7',
  title: 'Odbiór przyczepy',
  content: 'Po zakończeniu produkcji umawiamy się na odbiór przyczepy. Możesz osobiście odebrać gotowy pojazd lub, jeśli to konieczne, zorganizować transport do wskazanego miejsca. Na miejscu zaprezentujemy Ci wszystkie funkcje i udzielimy wszelkich informacji dotyczących użytkowania.',
  imageUrl: step7,
  imagePosition: ImagePosition.left
}
];

const RealizationArticle = () => (
  <div>
    {articles.map(({title, key, imagePosition, imageUrl, content}) => (
      <ArticleItem content={content} imagePosition={imagePosition} imageUrl={imageUrl} key={key} title={title} />
    ))}
  </div>
);

export default RealizationArticle;