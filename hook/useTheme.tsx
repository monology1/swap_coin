import { useRouter } from 'next/router';
import { useState } from 'react';
import { lightTheme, darkTheme } from '@/config/theme';

const useTheme = () => {
  const router = useRouter();
  const [theme, setTheme] = useState(router.pathname === '/dark' ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme((prevTheme:string) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
