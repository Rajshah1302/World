"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaSearch, FaScroll } from 'react-icons/fa';

interface NavItem {
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    href: '/',
    icon: <FaHome size={24} />,
  },
  {
    href: '/search',
    icon: <FaSearch size={24} />,
  },
  {
    href: '/scroll',
    icon: <FaScroll size={24} />,
  },
];

const MobileNavbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-sm md:hidden">
      {navItems.map(({ href, icon }, index) => {
        const isActive = pathname === href;
        return (
          <Link 
            href={href} 
            key={index} 
            className={`flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors ${isActive ? 'text-indigo-600' : ''}`}
          >
            {icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNavbar;
