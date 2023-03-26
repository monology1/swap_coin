import React, { useState } from 'react';
import useTheme from '@/hook/useTheme';
import { lightTheme, darkTheme } from '@/config/theme';
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onToggle: (theme: string) => void;
};

const DarkModeToggle: React.FC<Props> = ({ onToggle }) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    onToggle(theme);
  };

  return (
    <div className="darkmodeButton">
    <button value={theme} onClick={handleToggle} className={`p-2 rounded-full focus:outline-none focus:shadow-outline`}>
      <FontAwesomeIcon className="fa-sm text-purple-400" icon={theme === 'dark' ? faSun : faMoon} />
    </button>
  </div>
  );
};


export default DarkModeToggle;
