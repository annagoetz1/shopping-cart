import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './nav';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet /> {/* This renders App or Cart depending on route */}
      </main>
    </div>
  );
}
