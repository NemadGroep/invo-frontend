import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MessageGrid from './components/MetadataGrid'
import { useMetadata } from './hooks/useMetadata'
import { useEffect } from 'react'

function App() {
  const { data: rows, loading, error } = useMetadata(3000)

  if (loading) return <p>Loading…</p>;
  if (error)   return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Invoice Metadata</h1>
      <MessageGrid rows={rows} />
    </div>
  );
}

export default App
