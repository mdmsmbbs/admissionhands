import Blog from "../Components/Blog/Blog";
import Copyright from "../Components/Copyright/Copyright";
import DesktopHeader from "../Components/DesktopHeader";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import PageHeader from "../Components/PageHeader/PageHeader";


export default function BlogPage() {
  return (
    <>
      <Header />
      <DesktopHeader/>
      <PageHeader />
      <Blog/>
      <Newsletter/>
      <Footer/>
       <Copyright/>
    </>
  );
}
