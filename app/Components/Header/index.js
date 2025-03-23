// Import necessary modules
import styles from './header.module.scss';
import Link from 'next/link';
import { IoCallOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";

const Header = () => {
    return (
        <div className={styles.topHeader}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.leftSection}>
                        <div className={styles.contactList}>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <a className={styles.link} href="tel:9711110766">
                                        <i className={styles.iconMessage}>
                                            <IoCallOutline />
                                        </i>
                                        +91 9711110766
                                    </a>
                                </li>
                                <li className={styles.listItem}>
                                    <a className={styles.link} href="mailto:mdms.mbbs1@gmail.com">

                                        <i className={styles.iconMessage}>
                                            <TiMessage />
                                        </i>
                                        mdms.mbbs1@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.socialList}>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <ul className={styles.pageLinks}>
                                        <li className={styles.pageLinkItem}>
                                            <Link className={styles.link} href="/faculty">
                                                Faculty
                                            </Link>
                                        </li>
                                        <li className={styles.pageLinkItem}>
                                            <Link className={styles.link} href="/university-life">
                                                Community
                                            </Link>
                                        </li>
                                        {/* <li className={styles.pageLinkItem}>
                      <Link className={styles.link} href="/login">
                        Log in
                      </Link>
                    </li> */}
                                        {/* <li className={styles.pageLinkItem}>
                      <Link className={styles.link} href="/register">
                        Register
                      </Link>
                    </li> */}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
