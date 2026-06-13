import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Recursos from '@/components/sections/Recursos';
import Proyectos from '@/components/sections/Proyectos';
import Flujo from '@/components/sections/Flujo';
import Guias from '@/components/sections/Guias';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

function Divider() {
  return <div className="divider" />;
}

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />
      <Hero />
      <Divider />
      <Proyectos />
      <Divider />
      <Recursos />
      <Divider />
      <Flujo />
      <Divider />
      <Guias />
      <Divider />
      <CTA />
      <Footer />
    </>
  );
}
