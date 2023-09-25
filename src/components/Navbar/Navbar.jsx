import { HiMenu } from 'react-icons/hi';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.menuIcon}>
        <HiMenu />
      </div>
    </div>
  );
}

export default Navbar;
