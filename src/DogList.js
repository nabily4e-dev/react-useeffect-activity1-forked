/** @format */

import './styles.css';
import React from 'react';

export default function ShoppingList({ dogsList = [] }) {
  return (
<div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '8px' 
        }}
      >
        {dogsList.map((dog) => (
          <img 
            key={dog} 
            src={dog} 
            alt="cute dog" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto' 
            }}
          />
        ))}
      </div>
  );
}