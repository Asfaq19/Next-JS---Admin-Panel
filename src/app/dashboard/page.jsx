"use client"
import React from 'react'
import Layout from '../components/layout'
import Typography from '@mui/material/Typography';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Circle } from 'rc-progress';
import CountUp from 'react-countup';



export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 gap-6">
          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <PeopleAltIcon fontSize="large"/>
                </div>     
                <div className="ml-5 mt-5 roundprogress mr-5">
                  <Circle percent={75} strokeWidth={10} trailWidth={8} strokeColor="rgb(2,132,199)" trailColor="#b3a4f3" />
                </div>          
              </div>  
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">
                  Total Users
                </div>
                <div className="text-3xl font-semibold">
                    <CountUp start={0} end={127} delay={1}/>
                </div>
              </div>        
            </div>
          </div>
          
          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <PeopleAltIcon fontSize="large"/>
                </div>     
                <div className="ml-5 mt-5 roundprogress mr-5">
                  <Circle percent={75} strokeWidth={10} trailWidth={8} strokeColor="rgb(2,132,199)" trailColor="#b3a4f3" />
                </div>          
              </div>  
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">
                  Total Users
                </div>
                <div className="text-3xl font-semibold">
                  127
                </div>
              </div>        
            </div>
          </div>

          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <PeopleAltIcon fontSize="large"/>
                </div>     
                <div className="ml-5 mt-5 roundprogress mr-5">
                  <Circle percent={75} strokeWidth={10} trailWidth={8} strokeColor="rgb(2,132,199)" trailColor="#b3a4f3" />
                </div>          
              </div>  
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">
                  Total Users
                </div>
                <div className="text-3xl font-semibold">
                  127
                </div>
              </div>        
            </div>
          </div>

          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <PeopleAltIcon fontSize="large"/>
                </div>     
                <div className="ml-5 mt-5 roundprogress mr-5">
                  <Circle percent={75} strokeWidth={10} trailWidth={8} strokeColor="rgb(2,132,199)" trailColor="#b3a4f3" />
                </div>          
              </div>  
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">
                  Total Users
                </div>
                <div className="text-3xl font-semibold">
                  127
                </div>
              </div>        
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
