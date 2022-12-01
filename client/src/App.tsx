import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import PageRender from './PageRender';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PageRender/> } />
          <Route path='/:page' element={<PageRender/> } />
          <Route path='/:page/:slug' element={<PageRender/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
