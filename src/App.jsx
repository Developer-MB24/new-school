import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./pages/Dashboard";
import HeaderSettings from "./pages/HeaderSettings";
import PageManagement from "./pages/PageManagement";
import ImageManager from "./pages/ImageManager";
import BlogManagement from "./pages/BlogManagement";
import FooterSettings from "./pages/FooterSettings";
import ColorsCustomization from "./pages/ColorsCustomization";

import BlogMedia from "./pages/BlogMedia";
import Seosetting from "./pages/SEOSetting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/header" element={<HeaderSettings />} />
          <Route path="/page-management" element={<PageManagement />} />
          <Route path="/image-manager" element={<ImageManager />} />
          <Route path="/blog-management" element={<BlogManagement />} />
          <Route path="/footer-setting" element={<FooterSettings />} />
          <Route path="/seo-setting" element={<Seosetting />} />
          <Route path="/blog-media" element={<BlogMedia />} />

          <Route
            path="/color-customization"
            element={<ColorsCustomization />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
