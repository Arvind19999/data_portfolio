import { Route, Routes } from 'react-router-dom';

import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

import About from './pages/About';
import BlogDetails from './pages/BlogDetails';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsPage from './pages/ProjectsPage';
import ServiceDetails from './pages/ServiceDetails';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
