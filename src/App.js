import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart, Home, ProductPage } from './pages';
import { Header } from 'components';

function cartItems() {
  return [];
}

// function App() {
//   return (
//     <main>
//       <header>
//         90s shop
//         <nav>
//           <ul style={{ listStyleType: 'none', display: 'flex' }}>
//             <li>
//               <a href='/'>Home</a>
//             </li>
//             |
//             <li>
//               <a href='/cart'>Cart ({cartItems().length})</a>
//             </li>
//           </ul>
//         </nav>
//         <hr />
//       </header>

//       {window.location.pathname === '/' && (
//         <div>
//           Welcome to our shop!
//           <p>
//             You are probably interested in <a href='/products/a'>A</a>.
//             <ProductItem />
//           </p>
//           <p>
//             Check out the newest product <a href='/products/b'>B</a>!
//           </p>
//         </div>
//       )}
//       {window.location.pathname === '/products/b' && (
//         <div>
//           <h1>Product B</h1>
//           <p>Price: 30 USD</p>

//           <button onClick={() => console.warn('Not implemented!')}>
//             Add to cart
//           </button>

//           <div>
//             <img src={pictureB} width={640} />
//           </div>
//         </div>
//       )}
//       {window.location.pathname === '/products/a' && (
//         <div>
//           <h1>Product A</h1>
//           <p>Price: 10 USD</p>

//           <button onClick={() => console.warn('Not implemented!')}>
//             Add to cart
//           </button>

//           <div>
//             <img src={pictureA} width={640} />
//           </div>
//         </div>
//       )}
//       {window.location.pathname === '/cart' && (
//         <div>
//           Are you ready to purchase these?
//           <ul>
//             {cartItems().map((cartItem) => (
//               <li key={cartItem}>{cartItem}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </main>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
