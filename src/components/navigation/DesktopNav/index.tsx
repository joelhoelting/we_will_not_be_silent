import classNames from 'classnames';
import styles from './styles.module.scss';

const pages: {
  [key: string]: {
    path: string;
    title: string;
  };
} = {
  home: {
    path: '/',
    title: 'Home',
  },
  messages: {
    path: '/messages',
    title: 'Embody the Message',
  },
  images: {
    path: '/images',
    title: 'Images',
  },
  contact: {
    path: '/contact',
    title: 'Contact',
  },
  about: {
    path: '/about',
    title: 'About',
  },
  donate: {
    path: 'donate',
    title: 'Donate',
  },
};

export default function DesktopNav() {
  return (
    <nav className={classNames(styles.wrapper)}>
      <ul className="flex flex-row w-4/5 justify-center">
        {Object.keys(pages).map(key => {
          const { path, title } = pages[key];
          return (
            <li key={title} className="fw-black">
              <a href={path}>{title}</a>
            </li>
          );
        })}
        {/* {% if cart.item_count > 0 %}
      <li><a href="/cart">CART</a></li>
    {% endif %} */}
      </ul>
    </nav>
  );
}
