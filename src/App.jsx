import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Banner from './components/banner/Banner';
import Pizza from './components/Pages/Pizza/Pizza';
import Cart from './components/shoppingCart/Cart';
import Address from './components/shippingAddress/Address';
import ConfirmOrder from './components/confirm/ConfirmOrder';
import MyCarousel from './components/banner/Banner';
import MenuLayout from './MenuLayout';
import AddToHomeModal from './components/AddToHome/AddToHome';
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
function App() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [Loading, SetLoading] = useState(true)

  useEffect(() => {
   setTimeout(() => {
    SetLoading(false)
   }, 500);
  }, []);

  const handleInstallClick = () => {
    if (installPrompt instanceof Event) {
      const installEvent = installPrompt;
      installEvent.prompt();
      installEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setInstallPrompt(null);
      });
    }
  };

  const handleCloseClick = () => {
    setInstallPrompt(null);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleClickOutsidePopup = (event) => {
      // Check if the clicked element is not inside the install popup
      if (!event.target.closest('.install-popup')) {
        setInstallPrompt(null);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    document.addEventListener('click', handleClickOutsidePopup);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      document.removeEventListener('click', handleClickOutsidePopup);
    };
  }, []);

  // Get the current route
  const currentRoute = window.location.pathname;

  return (
   <>
        {Loading ? <HashLoader color="#d32e2e" style={{position: 'absolute', top: '50%', left: '50%'}}/> : (
 <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<MyCarousel/>} />
      <Route path="Pizza" element={<Pizza />} />
      <Route path="address" element={<Address />} />
      <Route path="confirm" element={<ConfirmOrder />} />
      {/* <Route path="Pasta" element={<Pasta />} />
      <Route path="Pizza" element={<Pizza />} />
      <Route path="Burger" element={<Burger />} /> */}
      <Route path="cart" element={<Cart />} />
      <Route path="menu" element={<MenuLayout/>} />
      <Route path="MyCarousel" element={<MyCarousel />} />
    </Route>
  </Routes>  
    )}
  {installPrompt && currentRoute === '/' && (
        <AddToHomeModal
        installPrompt={installPrompt}
        onInstallClick={handleInstallClick}
        onCloseClick={handleCloseClick}
        />
      )}
      
   </>
  )
}
export default App
