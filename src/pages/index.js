import React from 'react';
import Canvas from '../components/Canvas';
import HeaderSection from '../sections/HeaderSection';
import ProjectSection from '../sections/ProjectSection';
import BlogSection from '../sections/BlogSection';
import ContactSection from '../sections/ContactSection';

import 'normalize.css';
import './index.css';

// TODO: Make all content scroll on top of the canvas / header section.
const indexPage = () => (
  <>
    <Canvas />
    <HeaderSection />
    <ProjectSection />
    <BlogSection />
    <ContactSection />
  </>
);

export default indexPage;
