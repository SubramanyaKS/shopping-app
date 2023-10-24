import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Main from '../components/Main';
import TopRated from '../components/TopRated';

const Home = () => {
  return (
    <div className="home">
      <Main/>
      <Categories/>
      <TopRated/>
      <Featured/>
    </div>
  );
};

export default Home;
