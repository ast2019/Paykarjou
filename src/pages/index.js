import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import Slider from '@/components/slides/slider';
import MovieCard from '@/components/shared/MovieCard';
import movie from '../../public/assets/images/paykarjoo.png';
import AudioCard from '@/components/shared/AudioCard';
import Movies from '@/components/slides/Movies';
import MobileLanding from '@/components/MobileLanding';
import request from '@/lib/config';


const inter = Inter({ subsets: ['latin'] });

export default function Home({categories}) {
  
  categories && console.log(categories);
  return (
    <main>
      <div className="hidden md:flex">
        <Slider />
      </div>
      <div className="flex md:hidden">
        <MobileLanding />
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};



export const getServerSideProps = async () => {
   let categories;
  try {
    categories = await request('/page/index');
    
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  console.log(categories?.data?.data);


  return {
    props: {
      categories: categories? categories?.data?.data.data: [],
    },
  };
};

// export const getServerSideProps = async () => {
//   let gallery;
//   try {
//     gallery = await request('/gallery/index');
//   } catch (error) {
//     console.log(JSON.stringify(error, null, 2));
//   }
//   console.log(gallery?.data?.data);
//   return {
//     props: {
//       films: gallery?.data?.data?.data?.filter((item) => item.type === 'video'),
//     },
//   };
// };