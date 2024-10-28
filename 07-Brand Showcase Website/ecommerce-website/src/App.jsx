// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // importing the pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Contact from './pages/Contact';

// // importing components
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import Footer from './components/Footer';

// // importing ProductProvider
// import { ProductProvider } from './contexts/ProductContext';

// function App() {
//   return (
//     <Router>
//       <ProductProvider> {/* Providing context to all components */}
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/products/:id" element={<Products />} />
//         </Routes>
//         <Sidebar />
//         <Footer />
//       </ProductProvider>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

import { ProductProvider } from './contexts/ProductContext';

function App() {
  console.log("App component is rendering"); // Check console

  return (
    <Router>
      <ProductProvider>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </Router>
  );
}

export default App;
