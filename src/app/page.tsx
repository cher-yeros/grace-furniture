import Hero from "@/components/Hero";
import PopularProduct from "@/components/PopularProduct";
import Product from "@/components/Product";
import Testimonial from "@/components/Testimonial";
import WeHelp from "@/components/WeHelp";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Hero />

      <Product />

      <WhyChooseUs />
      <WeHelp />

      <PopularProduct />
      <Testimonial />

      <Footer />
    </main>
  );
}
