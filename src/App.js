import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {Provider} from  'react-redux';
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Results from './components/Results';

const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"/watch",
        element:<WatchPage />
      },
      {
        path:"/results",
        element:<Results />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
     <div className="App">
      <RouterProvider router={appRoutes} />
    </div>
    </Provider>

  );
}

export default App;
