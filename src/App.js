
import './App.css';
import { RouterProvider } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import router from './commponents/Routers/Router/Routes';

function App() {
  return (
    <div className="App">
     <RouterProvider
      router={router}
     ></RouterProvider>
     <Toaster  toastOptions={{
    className: 'mt-20',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
      
    },
  }}></Toaster>
    </div>
  );
}

export default App;
