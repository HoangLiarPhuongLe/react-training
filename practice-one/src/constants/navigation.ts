import Facebook from '../components/Icon/Facebook'
import Instagram from '../components/Icon/Instagram'
import Twitter from '../components/Icon/Twitter'
import Linkedin from '../components/Icon/Linkedin'

export const FOOTER_NAVLIST = [
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

export const HEADER_NAVLIST = [
  {
    to: '#',
    content: 'home',
  },
  {
    to: '#',
    content: 'shop',
  },
  {
    to: '#',
    content: 'about us',
  },
  {
    to: '#',
    content: 'contact',
  },
]
