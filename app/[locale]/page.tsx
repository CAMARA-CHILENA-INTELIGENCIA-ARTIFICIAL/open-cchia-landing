import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Recursos from '@/components/sections/Recursos';
import Proyectos from '@/components/sections/Proyectos';
import Flujo from '@/components/sections/Flujo';
import Reuniones from '@/components/sections/Reuniones';
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
      <CTA />
      <Divider />
      <Recursos />
      <Divider />
      <Proyectos />
      <Divider />
      <Flujo />
      <Divider />
      <Reuniones />
      <Divider />
      <Guias />
      <Footer />
    </>
  );
}
