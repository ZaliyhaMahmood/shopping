import { categories } from "../../components/directory/categories";
import Directory from "../../components/directory/directory";

const Home = () => {
  return (
   <Directory categories={categories}/>
  );
};

export default Home;
