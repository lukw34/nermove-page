import React from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import image1 from '../../img/gallery/1.jpg';
import image2 from '../../img/gallery/2.jpg';
import image3 from '../../img/gallery/3.jpg';
import image4 from '../../img/gallery/4.jpg';
import image5 from '../../img/gallery/5.jpg';
import image6 from '../../img/gallery/6.jpg';
import image7 from '../../img/gallery/7.jpg';
import image8 from '../../img/gallery/8.jpg';
import image9 from '../../img/gallery/9.jpg';
import image10 from '../../img/gallery/10.jpg';
import image11 from '../../img/gallery/11.jpg';
import image12 from '../../img/gallery/12.jpg';
import image13 from '../../img/gallery/13.jpg';
import image14 from '../../img/gallery/14.jpg';
import image15 from '../../img/gallery/15.jpg';
import image16 from '../../img/gallery/16.jpg';
import image17 from '../../img/gallery/17.jpg';
import image18 from '../../img/gallery/18.jpg';
import image19 from '../../img/gallery/19.jpg';
import image20 from '../../img/gallery/20.jpg';
import image21 from '../../img/gallery/21.jpg';
import image22 from '../../img/gallery/22.jpg';
import image23 from '../../img/gallery/23.jpg';

const vertical = { width: 5, height: 6 };
const horizontal = { width: 5, height: 3 };
const photos = [
  { src: image1, ...vertical },
  { src: image2, ...horizontal },
  { src: image3, ...horizontal },
  { src: image4, ...horizontal },
  { src: image5, ...vertical },
  { src: image6, ...vertical },
  { src: image7, ...vertical },
  { src: image8, ...horizontal },
  { src: image9, ...horizontal },
  { src: image10, ...horizontal },
  { src: image11, ...horizontal },
  { src: image12, ...horizontal },
  { src: image13, ...horizontal },
  { src: image14, ...horizontal },
  { src: image15, ...horizontal },
  { src: image16, ...horizontal },
  { src: image17, ...horizontal },
  { src: image18, ...vertical },
  { src: image19, ...vertical },
  { src: image20, ...vertical },
  { src: image21, ...horizontal },
  { src: image22, ...vertical },
  { src: image23, ...horizontal },
];

const Gallery = () => (
  <RowsPhotoAlbum 
    padding={15} 
    photos={photos}
  />);

export default Gallery;