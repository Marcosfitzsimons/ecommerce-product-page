import { useState } from 'react'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import Product from './components/Product'

import ImageProduct1 from './assets/image-product-1.jpg'
import ImageProduct2 from './assets/image-product-2.jpg'
import ImageProduct3 from './assets/image-product-3.jpg'
import ImageProduct4 from './assets/image-product-4.jpg'
import ImageThumbnailProduct1 from './assets/image-product-1-thumbnail.jpg'
import ImageThumbnailProduct2 from './assets/image-product-2-thumbnail.jpg'
import ImageThumbnailProduct3 from './assets/image-product-3-thumbnail.jpg'
import ImageThumbnailProduct4 from './assets/image-product-4-thumbnail.jpg'


function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(true)
  const [cartCount, setCartCount] = useState(0)

  const slides = [
    {
      id: 1,
      image: ImageProduct1,
      imageThumbnail: ImageThumbnailProduct1
    },
    {
      id: 2,
      image: ImageProduct2,
      imageThumbnail: ImageThumbnailProduct2,
    },
    {
      id: 3,
      image: ImageProduct3,
      imageThumbnail: ImageThumbnailProduct3,
    },
    {
      id: 4,
      image: ImageProduct4,
      imageThumbnail: ImageThumbnailProduct4,
    }
  ]

  return (
    <div className="App">
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showCart={showCart}
        setShowCart={setShowCart}
        cartCount={cartCount}
        setCartCount={setCartCount} />
      <main>
        <div className="image-carousel-container w-full h-[320px]">
          <ImageCarousel slides={slides} />
        </div>
        <Product />
      </main>
    </div>
  );
}

export default App;
