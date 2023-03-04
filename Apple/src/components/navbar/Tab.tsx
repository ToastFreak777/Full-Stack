import styles from "./Tab.module.sass";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

const Tab = ({ type }: { type: string }) => {
  const [searchTerm, setSearchTerm] = useState("");

  let tab;
  const BASE_APPLE_SEARCH_URL = `https://www.apple.com/`;

  const handleSubmit = () => {
    let search = `us/search/${searchTerm}?src=globalnav`;
    setSearchTerm("");
    const form = document.querySelector("form");
    form?.setAttribute("action", `${BASE_APPLE_SEARCH_URL}${search}`);
  };

  switch (type) {
    case "Store":
      tab = (
        <>
          <ul>
            <li>
              <h3>Shop</h3>
              <p>Shop The Latest</p>
              <p>Mac</p>
              <p>iPad</p>
              <p>iPhone</p>
              <p>Apple Watch</p>
              <p>Accessories</p>
            </li>
            <li>
              <h3>Quick Links</h3>
              <p>Find a Store</p>
              <p>Order Status</p>
              <p>Financing</p>
              <p>Apple Trade In</p>
            </li>
            <li>
              <h3>Shop Special Stores</h3>
              <p>Certified Refurbished</p>
              <p>Education</p>
              <p>Business</p>
              <p>Veterans % Military</p>
              <p>Government</p>
            </li>
          </ul>
        </>
      );
      break;
    case "Mac":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore Mac</h3>
              <p>MacBook Air</p>
              <p>MackBook Pro</p>
              <p>iMac</p>
              <p>Mac mini</p>
              <p>Mac Studio</p>
              <p>Mac Pro</p>
              <p>Displays</p>
              <div className={styles.small}>
                <p>Compare Mac</p>
                <p>Why Mac</p>
                <p>Explore All Mac</p>
              </div>
            </li>
            <li>
              <h3>Shop Mac</h3>
              <p>Shop Mac</p>
              <p>Mac Accessories</p>
              <p>Financing</p>
              <p>Apple Trade In</p>
            </li>
            <li>
              <h3>More from Mac</h3>
              <p>Mac Support</p>
              <p>MacOS</p>
              <p>Ventura</p>
              <p>Continuity</p>
              <p>iCloud</p>
              <p>Mac for Business</p>
              <p>Education</p>
            </li>
          </ul>
        </>
      );
      break;
    case "iPad":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore iPad</h3>
              <p>iPad Pro</p>
              <p>iPad Air</p>
              <p>iPad</p>
              <p>iPad mini</p>
              <p>Apple Pencil</p>
              <p>Keyboards</p>
              <div className={styles.small}>
                <p>Compare iPad</p>
                <p>Why iPad</p>
                <p>Explore All iPad</p>
              </div>
            </li>
            <li>
              <h3>Shop iPad</h3>
              <p>Shop iPad</p>
              <p>iPad Accessories</p>
              <p>Financing</p>
              <p>Apple Trade In</p>
            </li>
            <li>
              <h3>More from iPad</h3>
              <p>iPad Support</p>
              <p>iPadOS 16</p>
              <p>iCloud</p>
              <p>Education</p>
            </li>
          </ul>
        </>
      );
      break;
    case "iPhone":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore iPhone</h3>
              <p>iPhone 14 Pro</p>
              <p>iPhone 14</p>
              <p>iPhone 13</p>
              <p>iPhone 12</p>
              <p>iPhone SE</p>
              <p>Keyboards</p>
              <div className={styles.small}>
                <p>Compare iPhone</p>
                <p>Switch To iPhone</p>
                <p>Explore All iPhone</p>
              </div>
            </li>
            <li>
              <h3>Shop iPhone</h3>
              <p>Shop iPhone</p>
              <p>iPhone Accessories</p>
              <p>Apple Trade In</p>
              <p>Carrier Deals</p>
              <p>Financing</p>
            </li>
            <li>
              <h3>More from iPhone</h3>
              <p>iPhone Support</p>
              <p>iOS 16</p>
              <p>iPhone Privacy</p>
              <p>iCloud</p>
              <p>Wallet, Pay, Card</p>
              <p>Siri</p>
            </li>
          </ul>
        </>
      );
      break;
    case "Watch":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore Watch</h3>
              <p>Apple Watch Ultra</p>
              <p>Apple Watch Series 8</p>
              <p>Apple Watch SE</p>
              <p>Apple Watch Nike</p>
              <p>Apple Watch Hermès</p>
              <div className={styles.small}>
                <p>Compare Watch</p>
                <p>Why Apple Watch</p>
                <p>Explore All Apple Watch</p>
              </div>
            </li>
            <li>
              <h3>Shop Watch</h3>
              <p>Shop Watch</p>
              <p>Apple Watch Studio</p>
              <p>Apple Watch Bands</p>
              <p>Watch Accessories</p>
              <p>Financing</p>
              <p>Apple Trade In</p>
            </li>
            <li>
              <h3>More from Watch</h3>
              <p>Apple Watch Support</p>
              <p>watchOS 9</p>
              <p>Apple Fitness+</p>
            </li>
          </ul>
        </>
      );
      break;
    case "AirPods":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore AirPods</h3>
              <p>AirPods 2nd Generation</p>
              <p>AirPods 3rd Generation</p>
              <p>AirPods Pro 2nd Generation</p>
              <p>AirPods Max</p>
              <div className={styles.small}>
                <p>Compare AirPods</p>
                <p>Explore All AirPods</p>
              </div>
            </li>
            <li>
              <h3>Shop AirPods</h3>
              <p>Shop AirPods</p>
              <p>AirPods Accessories</p>
            </li>
            <li>
              <h3>More from AirPods</h3>
              <p>AirPods Support</p>
              <p>Apple Music</p>
            </li>
          </ul>
        </>
      );
      break;
    case "Tv & Home":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore Tv & Home</h3>
              <p>Apple TV 4k</p>
              <p>HomePod</p>
              <p>HomePod mini</p>
              <div className={styles.small}>
                <p>Explore All Tv & Home</p>
              </div>
            </li>
            <li>
              <h3>Shop Tv & Home</h3>
              <p>Shop Apple Tv 4k</p>
              <p>Shop HomePod</p>
              <p>Shop HomePod mini</p>
              <p>Shop Siri Remote</p>
              <p>Tv & Home Accessories</p>
            </li>
            <li>
              <h3>More from Tv & Home</h3>
              <p>Apple Tv Support</p>
              <p>HomePod Support</p>
              <p>Apple Tv App</p>
              <p>Home App</p>
              <p>Apple Music</p>
              <p>Siri</p>
              <p>AirPlay</p>
            </li>
          </ul>
        </>
      );
      break;
    case "Entertainment":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore Entertainment</h3>
              <p>Apple One</p>
              <p>Apple Tv+</p>
              <p>Apple Music</p>
              <p>Apple Arcade</p>
              <p>Apple Fitness+</p>
              <p>Apple News+</p>
              <p>Apple Podcasts+</p>
              <p>Apple Books</p>
              <p>Apple Store</p>
              <div className={styles.small}>
                <p>Explore Entertainment</p>
              </div>
            </li>
            <li>
              <h3>Support</h3>
              <p>Apple Tv+ Support</p>
              <p>Apple Music Support</p>
            </li>
          </ul>
        </>
      );
      break;
    case "Accessories":
      tab = (
        <>
          <ul>
            <li>
              <h3>Shop Accessories</h3>
              <p>Mac</p>
              <p>iPad</p>
              <p>iPhone</p>
              <p>Apple Watch</p>
              <p>AirPods</p>
              <p>Tv & Home</p>
              <div className={styles.small}>
                <p>Shop All Accessories</p>
              </div>
            </li>
            <li>
              <h3>Explore Accessories</h3>
              <p>Made by Apple</p>
              <p>Beats by Dr.Dre</p>
              <p>AirTag</p>
            </li>
          </ul>
        </>
      );
      break;
    case "Support":
      tab = (
        <>
          <ul>
            <li>
              <h3>Explore Support</h3>
              <p>iPhone</p>
              <p>Mac</p>
              <p>iPad</p>
              <p>Watch</p>
              <p>AirPods</p>
              <p>Music</p>
              <p>Tv</p>
              <div className={styles.small}>
                <p>Shop Support</p>
              </div>
            </li>
            <li>
              <h3>Get Help</h3>
              <p>Communities</p>
              <p>Check Coverage</p>
              <p>Repair</p>
              <p>Contact Us</p>
            </li>
            <li>
              <h3>Helpful Topics</h3>
              <p>Get AppleCare+</p>
              <p>Apple ID & Password</p>
              <p>Billing & Subscriptions</p>
              <p>Find My</p>
              <p>Accessibility</p>
            </li>
          </ul>
        </>
      );
      break;
    case "Searchbar":
      tab = (
        <>
          <form
            target="_blank"
            className={styles.wrapper}
            onSubmit={handleSubmit}
          >
            <SearchIcon />
            <input
              placeholder="Search apple.com"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            {/* x icon coming soon */}
          </form>
          <ul>
            <li>
              <h3>Quick Links</h3>
              <div className={styles.small}>
                <p>Visiting an Apple Store FAQ</p>
                <p>AirPods</p>
                <p>AirTag</p>
                <p>AppleCare+</p>
                <p>Apple Gift Card</p>
              </div>
            </li>
          </ul>
        </>
      );
      break;
    case "Bag":
      tab = (
        <>
          <ul>
            <li>
              <h3>My Profile</h3>
              <div className={styles.small}>
                <p>Orders</p>
                <p>Your Saves</p>
                <p>Account</p>
                <p>Sign In</p>
              </div>
            </li>
          </ul>
        </>
      );
      break;

    default:
      tab = null;
  }

  return tab;
};

export default Tab;
