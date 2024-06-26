"use client"
import React from 'react'
import Layout from '../components/layout'
import Typography from '@mui/material/Typography';
// import PieChart from "./charts/pieChart"
// import AreaChart from "./charts/areaChart"
import dynamic from 'next/dynamic';

const PieChart = dynamic(() => import("./charts/pieChart"),{
  loading: () => <p>Chart Loading..</p>
});

const AreaChart = dynamic(() => import("./charts/areaChart"),{
  loading: () => <p>Chart Loading..</p>
});

const ComboChart = dynamic(() => import("./charts/comboChart"),{
  loading: () => <p>Chart Loading..</p>
});

const LineChart = dynamic(() => import("./charts/lineChart"),{
  loading: () => <p>Chart Loading..</p>
});


export default function Analytics() {
  return (
    <>
      <Layout>
        <>
          <h2 className="text-lg mb-2">Analytics</h2>
          
          <div className="grid grid-cols-12 gap-4">

            <div className="col-span-8 rounded-lg shadow-lg px-3 py-3 bg-white">
              <AreaChart/>
            </div>

            <div className="col-span-4 rounded-lg shadow-lg px-3 py-3 bg-white">
              <ComboChart/>
            </div>

          </div>

          <div className="grid grid-cols-12 gap-4 mt-5"> 
            <div className="col-span-6 row-span-1 rounded-lg shadow-lg px-3 py-3 bg-white">
                <LineChart/>
            </div>

            <div className="col-span-6 row-span-1 rounded-lg shadow-lg px-3 py-3 bg-white">
                <AreaChart/>
            </div>
          </div>

          

          
        </>
      </Layout>
    </>
  )
}
