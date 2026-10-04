import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';
// import Category from '@/type/category';


// interface NavLinksProps {
//   categories: Category[];
// }

const Navbar = () => {
    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle:'full'
    })
    console.log(date)
    return (
  <div>
      <div className='flex justify-between'>
        <div>

        </div>
         <div className='flex items-center justify-center'>
            <div>
                <Image src={'/logo.webp'} alt='logo of bbc news' height={50} width={50}></Image>
            </div>
            <div>
                <h3>Bangla News 24</h3>
                <p>Date: {date}</p>
            </div>
        </div>

<div>
    <button className='btn'>সাইন ইন</button>
<button className='btn btn-error'>সাইন আপ</button>
</div>

    </div>
    <Navlinks></Navlinks>
  
  </div>
    );
};

export default Navbar;