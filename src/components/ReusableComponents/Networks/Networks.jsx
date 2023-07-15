import { NetworkList, Link } from './Networks.styled';
import sprite from 'images/icons/networks-sprite.svg';

const Networks = ({
  //пропси для розмірів іконок
  wFacebook,
  hFacebook,
  wYoutube,
  hYoutube,
  wTwitter,
  hTwitter,
  wInstagram,
  hInstagram,
  //пропси для стилів
  hoverColor,
  gap,
  ...props
}) => {
  return (
    <NetworkList>
      <li>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={wFacebook || '20px'} height={hFacebook || '20px'}>
            <use href={`${sprite}#icon-facebook`}></use>
          </svg>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={wYoutube || '20px'} height={hYoutube || '20px'}>
            <use href={`${sprite}#icon-youtube`}></use>
          </svg>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={wTwitter || '20px'} height={hTwitter || '20px'}>
            <use href={`${sprite}#icon-twitter`}></use>
          </svg>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={wInstagram || '20px'} height={hInstagram || '20px'}>
            <use href={`${sprite}#icon-instagram`}></use>
          </svg>
        </Link>
      </li>
    </NetworkList>
  );
};

export default Networks;
