import React from 'react';
import '../../scss/global/navbar.scss';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="global-nav">
      <div className="global-nav__left">
        <Link className={'global-nav__left--branding-text'} to={'/'}>
          Buildup
        </Link>
      </div>
      <div className="global-nav__center">
        <input
          className="global-nav__input"
          type="text"
          placeholder="search your style here"
        />
        <div className="global-nav__search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z"
              stroke="#ADADAD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="global-nav__right">
        <Link to={'/my-cart'}>
          <div className="global-nav__cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clip-path="url(#clip0_507_103)">
                <path
                  d="M0 0.916656H4.367L4.86658 2.74999H21.4381L18.0776 12.8333H7.13167L6.67333 14.6667H20.1667V16.5H4.32667L5.46883 11.9267L2.96633 2.74999H0V0.916656ZM7.117 11H16.7557L18.8953 4.58332H5.36708L7.117 11ZM3.66667 19.25C3.66667 18.7638 3.85982 18.2974 4.20364 17.9536C4.54745 17.6098 5.01377 17.4167 5.5 17.4167C5.98623 17.4167 6.45255 17.6098 6.79636 17.9536C7.14018 18.2974 7.33333 18.7638 7.33333 19.25C7.33333 19.7362 7.14018 20.2025 6.79636 20.5464C6.45255 20.8902 5.98623 21.0833 5.5 21.0833C5.01377 21.0833 4.54745 20.8902 4.20364 20.5464C3.85982 20.2025 3.66667 19.7362 3.66667 19.25ZM16.5 19.25C16.5 18.7638 16.6932 18.2974 17.037 17.9536C17.3808 17.6098 17.8471 17.4167 18.3333 17.4167C18.8196 17.4167 19.2859 17.6098 19.6297 17.9536C19.9735 18.2974 20.1667 18.7638 20.1667 19.25C20.1667 19.7362 19.9735 20.2025 19.6297 20.5464C19.2859 20.8902 18.8196 21.0833 18.3333 21.0833C17.8471 21.0833 17.3808 20.8902 17.037 20.5464C16.6932 20.2025 16.5 19.7362 16.5 19.25Z"
                  fill="#252525"
                />
              </g>
              <defs>
                <clipPath id="clip0_507_103">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
        <Link to={'/register'} className={'global-nav__link'}>
          <div>Sign up</div>
        </Link>
        <Link to={'/sign-in'} className={'global-nav__link'}>
          <div>Log in</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
