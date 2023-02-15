import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />

      <div className="featured">
        <div className="content">
          <div className="title">Computer And Laptop</div>
          <div className="description">
            <small>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or
            </small>
          </div>
          <div className="actions">
            <button id="buy-now">Buy Now</button>
            <button id="contact">Contact</button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://www.sciencenews.org/wp-content/uploads/2014/10/re_iStock_000021398013XLarge_feat_free.jpg"
            alt=""
            height="200"
          />
        </div>

        <div id="dot1"></div>
      </div>
    </header>
  );
};

export default Header;
