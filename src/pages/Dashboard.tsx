// src/components/Dashboard.js


const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-gray-800 p-4">
                    <div className="text-xl font-bold mb-4 ">Dashboard</div>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Projects</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Organizations</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Account</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Documentation</a></li>
                    </ul>
                </div>
                {/* Main Content */}
                <div className="flex-1 p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Projects</h1>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">New Project</button>
                    </div>
                    <div className="mt-6">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <p>No projects</p>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">New Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
