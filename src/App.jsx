import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MessageGrid from './components/MetadataGrid'
import DiscreteSlider from './components/DiscreteSlider'
import { useMetadata } from './hooks/useMetadata'
import { useEffect } from 'react'

function App() {
  const { data: rows, loading, error } = useMetadata(3000)

  if (loading) return <p>Loading…</p>;
  if (error)   return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div>
      <DiscreteSlider/>
      <h1>Wachtrij</h1>
      <MessageGrid rows={rows} />
    </div>
  );
}

export default App
