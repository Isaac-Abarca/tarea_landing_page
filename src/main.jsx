import { CountProvider } from "./context/countContext.jsx";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountProvider>
    <div>
      <App />
    </div>
  </CountProvider>,
)
