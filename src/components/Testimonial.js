import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';
// import data
import { testimonial } from '../data';

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div className='lg:max-w-[50%]'>
            {/* title */}
            <h2 className='title mb-9'>{title}</h2>
            <p className='mb-10'>This is a web component you can have on your website.</p>
            {/* slider */}
            <div className='shadow-xl px-10 py-5 rounded-2xl mb-10 lg:mb-0'>
              <TestimonialSlider />
            </div>            
          </div>
          {/* image */}
          <div className='order-1'>
            <img src={image.type} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
