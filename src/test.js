import React, { useState } from 'react';
import Loadable from './Composants/Store/StoreManagement/Composants/dashboard/Loadable';
 // Assurez-vous de créer ce fichier CSS
 import { lazy } from 'react';
 import ThemeCustomization from './Composants/Store/StoreManagement/Composants/dashboard/themes';
  const DashboardDefault = Loadable(lazy(() => import('./Composants/Store/StoreManagement/Composants/dashboard')));
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
   const items=['Produit 1', 'Produit 2', 'Produit 3']
  const goPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastItem = currentIndex === items.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
   <>
   <ThemeCustomization>
   <DashboardDefault/>
   </ThemeCustomization>
   </>
  );
}

export default Carousel;
