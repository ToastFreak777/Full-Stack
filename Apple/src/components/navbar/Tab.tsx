import "./Tab.module.sass";

const Tab = ({ type }: { type: string }) => {
  let tab;

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
              <div className="small">
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

    default:
      tab = null;
  }

  return tab;
};

export default Tab;
