import {
  Slider,
  FeaturedProducts,
  Categories,
  Contact,
} from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
