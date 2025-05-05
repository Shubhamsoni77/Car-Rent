import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, BarChart3, Users, Star } from 'lucide-react';




const SideBar = () => {

  const menuItems = [
    { icon: Car, label: 'AdminDashBoard', path: '/admin' },
    { icon: Car, label: 'Cars', path: '/admin/cars' },
    { icon: BarChart3, label: 'Rentals', path: '/admin/rentals' },
    { icon: Star, label: 'Reviews', path: '/admin/reviews' },
    
  ];

  return (
      <div className="bg-white h-auto w-64 mt-20 fixed left-0 top-0 shadow-lg">
        <div className="p-6">
          <Link className="text-2xl font-bold text-gray-800">CarRent <span>Admin</span> </Link>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }
  
  export default SideBar
  


  // const menuItems = [
  //   { icon: Car, label: 'Cars', path: '/admin/cars' },
  //   { icon: BarChart3, label: 'Rentals', path: '/admin/rentals' },
  //   { icon: Star, label: 'Reviews', path: '/admin/reviews' },
  //   { icon: Users, label: 'Users', path: '/admin/users' },
  // ];