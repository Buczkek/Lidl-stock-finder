import React from 'react';

function ProductLinkExtracter() {

  return (
      <>
          <h1>Product Link Extracter</h1>
          <h2>Extract the product id from the given website</h2>
          <form>
              <input type="text" placeholder="Enter the website URL"></input>
              <button>Extract</button>
          </form>
      </>
  );
}

export default ProductLinkExtracter;