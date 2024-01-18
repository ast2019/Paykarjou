import Head from 'next/head';
import Carousel from '../../components/Carousel/index.js';
import MainLayout from '../../layout/MainLayout.jsx'; 

function Gallery() {
  return (
    <div>
      {/* <Head>
        <title>Next.js Tailwind Carousel</title>
        <meta name="description" content="Next.js with Tailwind CSS and Swiper Carousel" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-secondary">
        
        <Carousel />
      </main>
    </div>
  );
}

Gallery.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Gallery;