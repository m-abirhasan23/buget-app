// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
// helper function
import { fetchData } from "../helper";

// loader function

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// assets 
import wave from '../assets/wave.svg';
// components 
import { Nav } from "../components/Nav";

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div>
        <Nav userName={userName}/>
        <main>
          
          <Outlet/>
        </main>
        <footer>
            <img src={wave} alt="" />
        </footer>
    </div>
  );
};

export default Main;
