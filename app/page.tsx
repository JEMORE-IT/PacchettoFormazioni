import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}
