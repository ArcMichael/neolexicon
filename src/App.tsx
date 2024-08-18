import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './route/routes';
import { SiderProvider } from './context/sider-context';
import { AccountProvider } from './context/account-context';
import { TokenProvider } from './context/token-context';

function App() {
  return (
    <div className='App' data-testid='routes-element'>
      <BrowserRouter>
        <AccountProvider>
          <TokenProvider>
            <SiderProvider>
              <Routes />
            </SiderProvider>
          </TokenProvider>
        </AccountProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
