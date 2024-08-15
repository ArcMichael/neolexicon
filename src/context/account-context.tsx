import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface Token {
  token: string;
  // 可以添加更多如token等字段
}

interface TokenContextType {
  token: Token | null;
  login: (token: string) => void; // 可以扩展方法以接受更多参数
  logout: () => void;
}

const defaultContext: TokenContextType = {
  token: null,
  login: () => {}, // 默认无操作
  logout: () => {},
};

const AccountContext = createContext<TokenContextType>(defaultContext);

export const useAccount = () => useContext(AccountContext);

export const AccountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<Token | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('accountToken');
    if (storedToken) {
      setToken({ token: storedToken });
    }
  }, []);

  const login = (token: string) => {
    setToken({ token });
    sessionStorage.setItem('accountToken', token);
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem('accountToken');
  };

  return (
    <AccountContext.Provider value={{ token, login, logout }}>
      {children}
    </AccountContext.Provider>
  );
};
