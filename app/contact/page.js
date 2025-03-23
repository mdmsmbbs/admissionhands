import ContactArea from "../Components/ContactArea/ContactArea";
import Copyright from "../Components/Copyright/Copyright";
import DesktopHeader from "../Components/DesktopHeader";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import PageHeader from "../Components/PageHeader/PageHeader";
import GoogleMap from "../Components/Shared/videoPlayer/GoogleMap";

export default function Contact() {
  return (
    <>
      <Header />
      <DesktopHeader/>
      <PageHeader />
      <ContactArea/>
      <GoogleMap/> 
      <Newsletter/>
      <Footer/>
       <Copyright/>
    </>
  );
}
