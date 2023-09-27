
import React from 'react';
import Chart from 'react-google-charts';


const PieChart = () => {
    return (
        <div className='w-10/12 m-auto'>
            <Chart
                chartType="PieChart"
                data={[
                    ["Category", "Value"], 
                    ["Your Donation", 5.98],
                    ["Total Donation", 12],
                    
                ]}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
};


export default PieChart;
