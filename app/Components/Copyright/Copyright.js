import Image from "next/image";
import Link from "next/link";

const Copyright = () => {
    return (
        <div className="py-6 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo Section */}
                    <div className="mb-4 md:mb-0">
                        <Link href="/">
                            <Image
                                src="/img/logo.png"
                                alt="Black Logo"
                                width={120}
                                height={40}
                            />
                        </Link>
                    </div>

                    {/* Title Section */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-gray-600 text-sm">
                            Copyright ©2025 <strong>Admission Hands</strong>. All Right Reserved.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <ul className="flex flex-wrap justify-center gap-4 text-sm">
                            <li>
                                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund" className="text-gray-600 hover:text-gray-900">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclosure" className="text-gray-600 hover:text-gray-900">
                                    Disclosure
                                </Link>
                            </li>
                            <li>
                                <Link href="/comments" className="text-gray-600 hover:text-gray-900">
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