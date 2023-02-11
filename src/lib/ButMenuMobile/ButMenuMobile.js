// import React, { useState } from 'react';

import cn from 'classnames';

import styles from './ButMenuMobile.module.scss';

export default function ButMenuMobile({ isOpenMenuMobile }) {
  // const [mobileMenu, setMobileMenu] = useState(false);

  const onClick = () => {
    console.log('onClick');
    isOpenMenuMobile();
  };

  return (
    <div>
      <button data-menu-button type="button" className={cn(styles.butMenuMobile, styles.isOpen)} onClick={onClick}>
        <svg width={20} viewBox="0 0 18 17.5">
          <line className={styles.hamburgerSvgStyle} y1="1" x2="18" y2="1"></line>
          <line className={styles.hamburgerSvgStyle} y1="7" x2="18" y2="7"></line>
          <line className={styles.hamburgerSvgStyle} y1="13" x2="18" y2="13"></line>
        </svg>
      </button>
    </div>
  );
}

// export default function Button({
//   onClick = () => {},
//   href,
//   children,
//   disabled,
//   type = "button",
//   className,
// }) {
//   const Tag = ({ ...props }) =>
//     href ? <a {...props} /> : <button {...props} />;

//   return (
//     <Tag
//       href={href}
//       onClick={onClick}
//       type={type}
//       className={cn(
//         styles.button,
//         {
//           [styles.buttonDisabled]: disabled,
//         },
//         className
//       )}
//       disabled={disabled}
//     >
//       {children}
//     </Tag>
//   );
// }
