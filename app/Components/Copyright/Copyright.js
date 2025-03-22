import Image from "next/image";
import Link from "next/link";
import styles from "./Copyright.module.scss";

const Copyright = () => {
    return (
        <div className={styles.copyright}>
            <div className={styles.container}>
                <div className={styles.row}>
                    {/* Logo Section */}
                    <div className={styles.logoSection}>
                        <Link href="/">
                            {/* <a> */}
                            <Image
                                src="/img/logo.png"
                                alt="Black Logo"
                                width={120}
                                height={40}
                            />
                            {/* </a> */}
                        </Link>
                    </div>

                    {/* Title Section */}
                    <div className={styles.titleSection}>
                        <p>
                            Copyright ©2025 <strong>Admission Hands</strong>. All Right Reserved.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className={styles.linksSection}>
                        <ul>
                            <li>
                                <Link href="/privacy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclosure">
                                    Disclosure
                                </Link>
                            </li>
                            <li>
                                <Link href="/comments">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
