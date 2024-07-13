import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
function App() {
  return (
    <div >
        <Router>
        <Navbar/>
        <Routes>
            <Route path = '/'/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
library.add(fab, fas, far)
