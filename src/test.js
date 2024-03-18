import React, { useState, useEffect } from 'react';

import ProductItemPlus from './Composants/SwiftCartHome/Product-View/Product-Card/ProductItemPlus';

export default function BasicDemo() {
   
        return (
           <div
           style={{
            display:'flex',
            width: '800px',
            overflow: 'hidden',
            alignItems: 'center',
            padding: '10px',
        }}
           >
             <ProductItemPlus/>
            <ProductItemPlus/>
            <ProductItemPlus/>
           </div>
        );
    };



    

        