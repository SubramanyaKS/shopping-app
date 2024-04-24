import Categories from '../components/Categories/Categories';
import FeaturedLogic from '../components/Featured/FeaturedLogic';
import Main from '../components/Main';
import TopRatedLogic from '../components/TopRated/TopRatedLogic';

const Home = () => {
  return (
    <div className="home">
      <Main/>
      <Categories/>
      <TopRatedLogic/>
      <FeaturedLogic/>
    </div>
  );
};

export default Home;
