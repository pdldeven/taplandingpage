import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import Features from "./sections/Features";
import Middle from "./sections/Middle";
import Cart from "./sections/Cart";
import FeaturedCollection from "./sections/FeaturedCollection";
import Testimonials from "./sections/Testimonials";
import MessageForm from "./sections/MessageForm";
import Accordion from "./sections/Accordion";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Middle />
      <Cart />
      <FeaturedCollection />
      <Testimonials />
      <MessageForm />
      <Accordion />
      <Footer />
    </>
  )
}
