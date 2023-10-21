import blogImage1 from '../assets/component-02/Image-01.jpg';
import blogImage1Large from '../assets/component-02/Image-01@2x.jpg';
import blogImage2 from '../assets/component-02/Image-02.jpg';
import blogImage2Large from '../assets/component-02/Image-02@2x.jpg';
import blogImage3 from '../assets/component-02/Image-03.jpg';
import blogImage3Large from '../assets/component-02/Image-03@2x.jpg';

type Image = {
  default: string;
  large: string;
};

type Post = {
  id: number;
  title: string;
  href: string;
  image: Image;
  description: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'Summer Lunch Menu By Mark Best',
    href: '#',
    image: {
      default: blogImage1,
      large: blogImage1Large,
    },
    description:
      "AEG ambassador Mark Best's summer eats are guaranted to help you make the most of the warmer weather and entertaining at home.",
  },
  {
    id: 2,
    title: 'A Traditional Christmas Eve, Mark Best Style',
    href: '#',
    image: {
      default: blogImage2,
      large: blogImage2Large,
    },
    description:
      "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
  },
  {
    id: 3,
    title: 'Taking Taste Further',
    href: '#',
    image: {
      default: blogImage3,
      large: blogImage3Large,
    },
    description:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
  },
];
