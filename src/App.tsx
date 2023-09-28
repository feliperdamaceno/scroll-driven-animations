import { Box } from './components'

import type { Size } from './components/Box'

function randomizeSize() {
  const variations = ['sm', 'md', 'lg', 'xl']
  const random = Math.floor(Math.random() * variations.length)
  return variations[random] as Size
}

const boxes = Array.from(Array(100).keys())

export default function App() {
  return (
    <main className="flex-grid">
      {boxes.map((box) => (
        <Box size={randomizeSize()}>{box}</Box>
      ))}
    </main>
  )
}
