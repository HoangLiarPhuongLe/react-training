import Facebook from '../components/icon/facebook'
import Instagram from '../components/icon/instagram'
import Twitter from '../components/icon/twitter'
import Linkedin from '../components/icon/linkedin'

export const footerNavList = [
  {
    title: 'home',
    contents: [
      {
        to: '#',
        info: 'product',
      },
      {
        to: '#',
        info: 'categories',
      },
      {
        to: '#',
        info: 'shop',
      },
      {
        to: '#',
        info: 'log in',
      },
    ],
  },
  {
    title: 'shop',
    contents: [
      {
        to: '#',
        info: 't-shirt',
      },
      {
        to: '#',
        info: 'jacket',
      },
      {
        to: '#',
        info: 'shirt',
      },
      {
        to: '#',
        info: 'jens',
      },
    ],
  },
  {
    title: 'categories',
    contents: [
      {
        to: '#',
        info: 'men',
      },
      {
        to: '#',
        info: 'children',
      },
      {
        to: '#',
        info: 'woman',
      },
    ],
  },
  {
    title: 'contact',
    contents: [
      {
        to: '#',
        info: 'mangcoding@gmail.com',
      },
      [
        {
          to: '#',
          info: {
            img: Facebook,
            alt: 'facebook',
          },
        },
        {
          to: '#',
          info: {
            img: Instagram,
            alt: 'instagram',
          },
        },
        {
          to: '#',
          info: {
            img: Linkedin,
            alt: 'linkedin',
          },
        },
        {
          to: '#',
          info: {
            img: Twitter,
            alt: 'twitter',
          },
        },
      ],
    ],
  },
]
