import { Sidebar } from '../components/DashboardComponent/Sideabar';
import React, { ReactNode } from 'react';


interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="grid gap-4 p-4 grid-cols-[220px,_1fr] bg-[#F5F7F9]">
            <Sidebar />
            {/* <div className="flex-1 max-md:h-full  p-5"> */}
                {children}
            {/* </div> */}
        </div>
    );
};

export default DashboardLayout;