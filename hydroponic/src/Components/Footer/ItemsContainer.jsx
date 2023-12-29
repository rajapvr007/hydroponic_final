import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";

function ItemsContainer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 text-center">
        <div>
          <h1 className="text-2xl py-4">Hydroponic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            obcaecati repudiandae consectetur dolore ipsam alias voluptates
            eligendi id voluptate! Cumque doloribus nostrum quia obcaecati,
            magni blanditiis debitis dignissimos quasi alias!
          </p>
        </div>
        <div>
          <h1 className="text-2xl py-4">Quick Links</h1>
          <ul>
            <li className="py-3">
              <Link to="/">Home</Link>
            </li>
            <li className="py-3">
              <Link to="/shop">Shopping</Link>
            </li>
            <li className="py-3">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="py-3">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl py-4">Contact Us</h1>
          <ul>
            <li className="py-3">
              <span className="mx-2">
                <ion-icon name="mail-open-outline"></ion-icon>
              </span>
              Hydroponic@gmail.com
            </li>
            <li className="py-3">
              <span className="mx-2">
                <ion-icon name="location-outline"></ion-icon>
              </span>
              Hyderabad
            </li>
            <li className="py-3">
              <span className="mx-2">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              +040 24025674
            </li>
          </ul>

          {/* <ul className="text-center">
            <div className="flex items-center">
              <span className="mx-2">
                <ion-icon name="mail-open-outline"></ion-icon>
              </span>
              <li className="py-3">Hydroponic@gmail.com</li>
            </div>
            <div className="flex items-center">
              <span className="mx-2">
                <ion-icon name="location-outline"></ion-icon>
              </span>
              <li className="py-3">Hyderabad</li>
            </div>
            <div className="flex items-center">
              <span className="mx-2">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <li className="py-3">+040 24025674</li>
            </div>
          </ul> */}
        </div>

        <div>
          <h1 className="text-2xl py-4">Follow Us</h1>
          <SocialIcons Icons={Icons} />
        </div>
      </div>
    </>
  );
}

export default ItemsContainer;
