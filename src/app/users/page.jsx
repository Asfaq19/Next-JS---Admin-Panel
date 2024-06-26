"use client"
import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout'
import UsersList from './usersList';


export default function Users() {
  
  return (
      <Layout>
        <UsersList/>
      </Layout>
  )
}
