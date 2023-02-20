import PreviewPage from './pages/PreviewPage/PreviewPage';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PreviewPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
