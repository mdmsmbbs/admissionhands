import ApplicationForm from "../Components/ApplicationForm/ApplicationForm";
import Copyright from "../Components/Copyright/Copyright";
import DesktopHeader from "../Components/DesktopHeader";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader/PageHeader";


export default function Contact() {
  return (
    <>
      <Header />
      <DesktopHeader/>
      <PageHeader />
      <ApplicationForm/>
      <Footer/>
       <Copyright/>
    </>
  );
}
