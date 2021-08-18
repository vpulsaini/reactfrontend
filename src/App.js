import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import NotesList from './components/NotesList';
function App() {
  return (
    <BrowserRouter>
    <div >
      <Navbar />

        <div>
          <Switch>
            <Route exact path="/" component={NotesList} />
            <Route  path="*" component={NotFound} />
          </Switch>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
