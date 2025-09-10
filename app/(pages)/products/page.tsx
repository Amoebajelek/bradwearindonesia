import AllProducts from "@/app/_components/AllProducts";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
   
         {/* Navbar */}
         <Navbar />
         {/* End Navbar */}
   
         {/* Contents */}
         <div className="flex flex-col h-fit w-full px-6 py-12 lg:p-20 justify-start gap-5">
           <AllProducts />
         </div>
         {/* End Content */}
         
         {/* Footer */}
         <Footer />
         {/* End Footer */}
   
       </div>
  );
}
