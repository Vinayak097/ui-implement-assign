
import DashboardLayout from '../usecomponents/DashboardLayout';
import { Button } from '../components/ui/button';
import { IoIosArrowForward } from "react-icons/io";
import { ModeToggle } from '../components/mode-toggle';

const Dashboard = () => {
  return (
    <DashboardLayout>
        <div>
            <div className='border-b flex justify-between pr-6 '>
            <h2 className="text-sm text-gray-600 pl-4 p-3 font-semibold">Projects</h2>
            <ModeToggle ></ModeToggle>
            </div>

    <div className='mx-4 '>
      <div className="flex justify-between items-center   mb-6">
        
        <div className="flex mt-5 gap-4 items-center">
        <button  className='bg-green-600 p-0 h-fit py-1 px-2 rounded-md text-white text-xs border-green-500 bg-opacity-80 border '>New project</button>
          <Button  className='h-fit py-1 px-2 border text-xs'>New organization</Button>
        </div>
      </div>
      <div className="bg-dark-200  rounded-lg  border-dark-300">
        <h3 className="text-xl font-semibold mb-4">vinayak20injamure@gmail.com's Org</h3>
        <div className="bg-dark-300 p-6 pb-20 w-fit rounded-lg border border-dark-400">
            <div className='flex justify-between items-center  gap-16'>
                <p>vinayak20injamure@gmail.com</p>
                <IoIosArrowForward></IoIosArrowForward>
            </div>
          <p>aws | ap-southeast-1</p>
        </div>
      </div>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
