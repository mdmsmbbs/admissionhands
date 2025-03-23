import Copyright from "../Components/Copyright/Copyright";
import DesktopHeader from "../Components/DesktopHeader";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import PageHeader from "../Components/PageHeader/PageHeader";
import FacultyList from "../Components/Shared/videoPlayer/FacultyList";

export default function Faculty() {
    return (
      <>
        <Header />
        <DesktopHeader/>
        <PageHeader />
        <FacultyList/>
        <Newsletter/>
        <Footer/>
         <Copyright/>
      </>
    );
  }