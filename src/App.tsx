import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './route/routes';
import { SiderProvider } from './context/sider-context';
import { AccountProvider } from './context/account-context';

function App() {
  return (
    <div className='App' data-testid='routes-element'>
      <BrowserRouter>
        <AccountProvider>
          <SiderProvider>
            <Routes />
          </SiderProvider>
        </AccountProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
