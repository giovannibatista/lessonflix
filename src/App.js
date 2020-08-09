import React from 'react';
import Menu from './components/Menu';
//import dadosIniciais from './data/dados_iniciais.json';
import dataLesson from './data/data_lesson.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dataLesson.categorias[0].videos[0].titulo}
        url={dataLesson.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end"}
      />

      <Carousel
        ignoreFirstVideo
        category={dataLesson.categorias[0]}
      />

      <Carousel
        category={dataLesson.categorias[1]}
      />

      <Carousel
        category={dataLesson.categorias[2]}
      />

      <Footer />

    </div>
  );
}

export default App;