import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";

const Header = () => {
  return (
    <header>
      <DesktopHeader />
      <MobileHeader />
      {/* This div adds spacing below the fixed header */}
      <div className="h-[70px] md:h-[96px]"></div>
    </header>
  );
};

export default Header;
