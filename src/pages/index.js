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
        <Slider categories={categories} />
      </div>
      <div className="flex md:hidden">
     
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};



export const getServerSideProps = async () => {
  let categories = []; 
  try {
    const response = await request('/page/index');
    categories = response?.data?.data?.data || []; 
  } catch (error) {
    console.error('API Error:', error);
  }
  return {
    props: { categories },
  };
};

