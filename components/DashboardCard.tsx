import React from 'react';

interface DashboardCardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, children }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                    {icon}
                </div>
                <div className="text-gray-900">
                    {children}
                </div>
            </div>
        </div>
    );
};