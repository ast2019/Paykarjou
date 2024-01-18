import React from 'react';
import Image from 'next/image';
import { articles } from '../slides/FirstSlide';
import Button from './../shared/Button/index';

function MobileLanding() {
  return (
    <div className="w-full text-txt_primary px-5 flex flex-col gap-7 justify-start items-center">
      {/* first slide header */}
      <div className=" bg-primary h-full flex flex-col items-center justify-between p-5 max-w-sm rounded-b-xl ">
        <div className="flex items-center justify-start gap-3 flex-col">
          <Image
            src={'/assets/images/paykarjoo.png'}
            width={400}
            height={300}
          />
          <h2 className="text-secondary text-center text-xl">
            عضو هیات علمی دانشگاه
          </h2>
          <h2 className="text-secondary text-center text-xl">
            اقتصاد دان وتحلیل گر اقتصادی
          </h2>
        </div>
      </div>
      {/* first style content */}
      <div className=" h-full flex flex-col items-center justify-between gap-5 max-w-sm p-5 ">
        <div className="w-full relative flex items-center">
          <div className=" opacity-70 text-xl ">
            <span>به سمت آینده</span>
          </div>
        </div>
        <div className="flex items-end gap-3 w-full">
          <h1 className="text-2xl font-bold">دکتر کامبیز پیکارجو </h1>
          <span className="text-lg">هستم</span>
        </div>
        <div className="self-start">
          <div className="border-b border-txt_primary w-96 mb-2" />
          <h3 className="font-normal text-xl">خوشبختم از آشنایی شما</h3>
        </div>
        <div className="flex items-center flex-wrap gap-5">
          {articles.map((article) => (
            <Button
              key={article.title}
              title={article.title}
              icon={article.icon}
              className="flex items-center justify-start pr-8 flex-grow basis-60 gap-3 p-2 border border-primary rounded-full hover:text-secondary hover:bg-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileLanding;
