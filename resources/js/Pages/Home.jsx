import Contact from "@/Sections/Contact";
import Features from "@/Sections/Features";
import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import Popup from "@/Sections/Popup";
import Slider from "@/Sections/Slider";



export default function Home() {
  return (
   <>
   <div>
  {/* back to top start */}
  <div className="back-to-top-wrapper">
    <button id="back_to_top" type="button" className="back-to-top-btn">
      <svg width={12} height={7} viewBox="0 0 12 7" fill="none">
        <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg> 
    </button>
  </div>
  {/* back to top end */}
  {/* search popup start */}
  <Popup></Popup>
  {/* search popup end */}
  {/* header top area start */}
 <Header></Header>
  <main>
    {/* slider area start */}
    <Slider></Slider>
    {/* slider area end */}
    {/* contact area start */}
    <Contact></Contact>
    {/* contact area end */}
    {/* features area start */}
    <Features></Features>
    {/* features area end */}
  </main>
  <Footer></Footer>
</div>

   </>
  )
}
