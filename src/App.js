import AboutPage from "./pages/aboutPage";
import CoursesPage from "./pages/coursesPage";
import PortfolioPage from "./pages/portfolioPage";
import ContactSection from "./component/contactComponent/contactSection";
import ContactPage from "./pages/ContactPage";
import AllServices from "./component/allServices/allServices";
import ServicesPage from "./pages/servicesPage";
import {HashRouter} from "react-router-dom";
import AllRoute from "./component/allRoute/allRoute";


function App() {
  return (
    <HashRouter>
        <AllRoute/>
    </HashRouter>
  );
}

export default App;
