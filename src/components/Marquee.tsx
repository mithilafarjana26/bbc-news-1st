import React from 'react';
import MarqueeText from 'react-marquee-text';
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data =await res.json()
    console.log(data.data)
    const headLines = data.data
    return (
        <div className='bg-red-600 text-white'>
            <MarqueeText className='py-1' direction='right' duration={15}>
      {
        headLines.map((h,idx)=><>
         <span key={idx}>{h.title}</span>
            <span key={idx}>.</span>
        </>)
      }
    </MarqueeText>
        </div>
    );
};

export default Marquee;