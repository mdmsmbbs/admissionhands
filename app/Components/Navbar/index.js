import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <img
            className={styles.logo}
            src="/img/black-logo.png"
            alt="black-logo"
          />
        </Link>
        <button className={styles.toggler} aria-controls="navbarMenu">
          <span className={styles.burgerMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </span>
        </button>
        <div className={styles.menu} id="navbarMenu">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                Home
              </Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/" className={styles.dropdownLink}>
                    Home Demo - One
                  </Link>
                </li>
                <li>
                  <Link href="/index-2" className={styles.dropdownLink}>
                    Home Demo - Two
                  </Link>
                </li>
                <li>
                  <Link href="/index-3" className={styles.dropdownLink}>
                    Home Demo - Three
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                Pages
              </Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/university-overview" className={styles.dropdownLink}>
                    University Overview
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.dropdownLink}>
                    Blog
                  </Link>
                  <ul className={styles.subDropdown}>
                    <li>
                      <Link href="/blog-style-one" className={styles.dropdownLink}>
                        Blog Style One
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-style-two" className={styles.dropdownLink}>
                        Blog Style Two
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details" className={styles.dropdownLink}>
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/register" className={styles.dropdownLink}>
                    Register Now
                  </Link>
                </li>
                <li>
                  <Link href="/login" className={styles.dropdownLink}>
                    Log In Now
                  </Link>
                </li>
                <li>
                  <Link href="/application" className={styles.dropdownLink}>
                    Application Form
                  </Link>
                </li>
              </ul>
            </li>
            {/* Add other sections here */}
          </ul>
          <div className={styles.options}>
            <Link href="/application" className={styles.button}>
              Application Form <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
