// import icons
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/feature-1.jpg';
import Features2Img from './assets/img/features-2.jpeg';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Web from './assets/img/web.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: '#stats',
  },
  {
    name: 'features',
    href: '#features',
  },
  {
    name: 'contact',
    href: '#contact',
  },
];

export const hero = {
  title: 'Get your WebSite built',
  subtitle:
    'WLDS was founded in 2022 by Thomas Gerber. He wanted to replace the CMS. Ask us for a website and we will make it for you.',
  buttonText: 'Ask',
};

export const stats = [
  {
    value: '4',
    text: 'Year Experience',
  },
  {
    value: '100+',
    text: 'WebSites built',
  },
  {
    value: 'Built',
    text: 'To your needs',
  },
  {
    value: 'Ilimited',
    text: 'Changes',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'We Create your website more aesthetic',
  subtitle:
    'WLDS power is that websites are created with React and Tailwind',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Presentation websites',
      subtitle:
        'Do you need a presentation website?',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Online Shops',
      subtitle:
        'We can also make an Online Shop',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Management websites',
      subtitle:
        'Or maybe you need a management website?',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'One of the best website manufacturers according to your needs',
    subtitle:
      'WLDS is a service company to create websites according to your needs, especially for those who want to create their first website.',
  },
};

export const newInStore = {
  title: 'Follow-up',
  subtitle: 'You will be informed & advised on all aspects of your website.',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'WEB',
      image: <ChairImg />,
    },
    {
      name: 'WEB HOSTING',
      image: <BedImg />,
    },
    {
      name: 'CODE',
      image: <CupboardImg />,
    },
    {
      name: 'NEWSLETTER',
      image: <LightingImg />,
    },
    {
      name: 'ONLINE PAYMENT',
      image: <Web />,
    }
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'What people think',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Design Manager',
      message:
        '“A huge time saving.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'IT',
      message:
        '“This is interesting and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Photographer',
      message:
        '“Really cool.”',
    },
  ],
};

export const newsletter = {
  title: 'Want to be notified of new products?',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Join',
};

export const footer = {
  social: [
    {
      icon: <IoLogoTwitter />,
      href: 'https://twitter.com/WldsCompany',
    },
    {
      icon: <IoLogoInstagram />,
      href: 'https://www.instagram.com/a.wlds/',
    },
    {
      icon: <IoLogoFacebook />,
      href: 'https://www.facebook.com/profile.php?id=100086852616521',
    },
  ],
  copyright: 'WLDS 2022 - All Rights Reserved.',
};
