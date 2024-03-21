import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> :  <Outlet></Outlet>
            }
            <h2>Hello world from my Website</h2>
           
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;