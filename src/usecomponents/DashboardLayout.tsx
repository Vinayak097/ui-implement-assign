import React from 'react';
import { Link } from 'react-router-dom';


const DashboardLayout = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-dark-200 border-r border-dark-300 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="#" className="block py-2 px-3 rounded hover:bg-dark-300">All projects</Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="block py-2 px-3 rounded hover:bg-dark-300">Organizations</Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="block py-2 px-3 rounded hover:bg-dark-300">Preferences</Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="block py-2 px-3 rounded hover:bg-dark-300">Access Tokens</Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="block py-2 px-3 rounded hover:bg-dark-300">Security</Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="block py-2 px-3 rounded hover:bg-dark-300">Audit Logs</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <Link to="#" className="block py-2 px-3 rounded hover:bg-dark-300">Log out</Link>
        </div>
      </aside>
      <main className="flex-1  ">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
