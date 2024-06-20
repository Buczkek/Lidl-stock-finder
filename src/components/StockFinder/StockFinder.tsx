import React from 'react';
import ProductLinkExtracter from "../ProductLinkExtracter/ProductLinkExtracter";

function StockFinder() {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const {latitude, longitude} = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          },
        (error) => {
            console.error("Error occurred while getting location", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };



    return (
        <>
          <ProductLinkExtracter/>
          <button onClick={getUserLocation}>Get User Location</button>
        </>
    );
}

export default StockFinder;
