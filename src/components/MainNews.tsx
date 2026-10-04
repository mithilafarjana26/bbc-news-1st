import Image from 'next/image';
import React from 'react';

const MainNews = ({news}) => {
   const [firstNews,...othersNews2] = news
   console.log(othersNews2)
  //  console.log(firstNews)
    // const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
    // const data =  await res.json()
    // const sections = data.data[0].articles
    // console.log(sections)
    return (
        <div className='flex'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
    className='w-full'
      src={firstNews.imageUrl}
      width={50}
      height={50}
      alt="Shoes" />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>

<div className='grid gap-2'>
 {
  othersNews2.map(on=><div className='card bg-base-100 border-gray-500' key={on.id}>
   <p className='text-red-800'>{firstNews.category}</p>
   <div>{on.title}</div>
  </div>)
 }
</div>
        </div>
    );
};

export default MainNews;