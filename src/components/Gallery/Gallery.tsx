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


const vertical = { width: 35, height: 60 };
const horizontal = { width: 5, height: 3 };
const photos = [
  { src: image1, ...vertical },
  { src: image2, ...horizontal },
  { src: image3, ...vertical },
  { src: image4, ...horizontal },
  { src: image5, ...horizontal },
  { src: image6, ...horizontal },
  { src: image7, ...horizontal },
  { src: image8, ...vertical },
  { src: image9, ...horizontal },
  { src: image10, ...vertical },
  { src: image11, ...horizontal },
  { src: image12, ...vertical },

];

const Gallery = () => (
  <RowsPhotoAlbum 
    padding={10} 
    photos={photos}
  />);

export default Gallery;