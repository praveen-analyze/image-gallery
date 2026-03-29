import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Card from './Card';
import CardInfo from './data';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header />

      <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
      gap: "20px",
      padding:"10px",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
        {
          CardInfo.map((item) => (
            <Card 
              key={item.id} 
              Title={item.Title} 
              Description={item.Description} 
              ImageUrl={item.ImageUrl} 
            />
          ))
        }
      </div>
    </div>
  </>
);