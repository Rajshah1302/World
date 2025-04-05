"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaScroll, FaCompass, FaCoins, FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function useKeyboardVisible() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const threshold = 150; // height change threshold to detect keyboard
    const initialHeight = window.innerHeight;

    const handleResize = () => {
      const heightDiff = initialHeight - window.innerHeight;
      setKeyboardVisible(heightDiff > threshold);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return keyboardVisible;
}

interface NavItem {
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: '/explorer', icon: <FaHome size={24} /> },           // Home
  { href: '/createListing', icon: <FaScroll size={24} /> },       // Scroll
  { href: '/', icon: <FaCompass size={24} /> },    // Compass
  { href: '/stakeListedProject', icon: <FaCoins size={24} /> },          // Coin
  { href: '/profile', icon: <FaUserCircle size={24} /> },  // Profile Avatar
];

const MobileNavbar: React.FC = () => {
  const pathname = usePathname();
  const keyboardVisible = useKeyboardVisible();

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-sm md:hidden transition-opacity duration-300 ${
        keyboardVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {navItems.map(({ href, icon }, index) => {
        const isActive = pathname === href;
        return (
          <Link
            href={href}
            key={index}
            className={`flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors ${
              isActive ? 'text-indigo-600' : ''
            }`}
          >
            {icon}
          </Link>
        );
      })}
    </nav>
  );
};


export default MobileNavbar;
