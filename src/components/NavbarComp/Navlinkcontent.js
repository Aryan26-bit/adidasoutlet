import React from 'react';
import './Navlinkcontent.scss'; 

const Navlinkcontent = () => {
  return (
    <div className="container">
      <div className="featured">
        <h3>FEATURED</h3>
        <ul>
          <li>Online Exclusives</li>
          <li>Sportswear</li>
          <li>Samba, Gazelle, Spezial</li>
          <li>Football</li>
          <li><b>Personalizable Products</b></li>
          <div className="sale-banner">FESTIVE SALE</div>
          <li><b>Sale</b></li>
        </ul>
      </div>

      <div className="categories">
        <div className="category">
          <h3>DISNEY</h3>
          <img src="\disney.png" alt="Disney" />
          <p>YOUTH 8 - 16 YEARS</p>
          <ul>
            <li>Boys Shoes</li>
            <li>Girls Shoes</li>
            <li>Boys Clothing</li>
            <li>Girls Clothing</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="category">
          <h3>STAR WARS</h3>
          <img src="\starwars.png" alt="Star Wars" />
          <p>KIDS 4 - 8 YEARS</p>
          <ul>
            <li>Boys Shoes</li>
            <li>Girls Shoes</li>
            <li>Boys Clothing</li>
            <li>Girls Clothing</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="category">
          <h3>MARVEL</h3>
          <img src="\marvel.png" alt="Marvel" />
          <p>TODDLERS 0 - 4 YEARS</p>
          <ul>
            <li>Shoes</li>
            <li>Clothing</li>
          </ul>
        </div>

        <div className="category">
          <h3>SPORTS</h3>
          <img src="\sports.png" alt="Sports Shoes" />
          <ul>
            <li>Football</li>
            <li>Running</li>
            <li>Swimming</li>
            <li>Cricket</li>
            <li>Basketball</li>
            <li>Tennis</li>
            <li>Training</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navlinkcontent;
