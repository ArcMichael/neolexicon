import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface TokenContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  removeToken: () => void;
}

const TokenContext = createContext<TokenContextProps | undefined>(undefined);

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem('eudicToken');
  });

  const setToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem('eudicToken', newToken);
      setTokenState(newToken);
    } else {
      localStorage.removeItem('eudicToken');
      setTokenState(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem('eudicToken');
    setTokenState(null);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('eudicToken');
    if (savedToken !== null) {
      setTokenState(savedToken);
    }
  }, []);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        removeToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
