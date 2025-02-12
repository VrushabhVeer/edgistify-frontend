import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="">
      <Navbar />
      <AllRoutes />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
