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
  const [showCart, setShowCart] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [price, setPrice] = useState(0)

  const handleShowMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  const handleShowCart = () => {
    setShowCart((prevValue) => !prevValue);
  };

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
        handleShowMenu={handleShowMenu}
        showCart={showCart}
        handleShowCart={handleShowCart}
        setPrice={setPrice}
        price={price} />

      <main className="md:flex md:items-center md:justify-around md:container md:mx-auto xl:px-20 md:h-[70vh]">
        <div className="image-carousel-container w-full h-[320px] md:h-[420px] lg:h-[460px] md:w-[45%] lg:w-[460px]">
          <ImageCarousel slides={slides} />
        </div>
        <Product cartCount={cartCount} setCartCount={setCartCount} setPrice={setPrice} />
      </main>
    </div>
  );
}

export default App;
