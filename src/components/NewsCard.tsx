import Image from 'next/image';
import React from 'react';

const NewsCard = ({news}) => {
    console.log(news)
    return (
        <div>
             <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <Image
                className='w-full'
                  src={news.imageUrl}
                  width={50}
                  height={50}
                  alt="Shoes" />
                  
              </figure>
              <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default NewsCard;