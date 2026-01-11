import { useState } from 'react'
import StickerFilters from '../components/stickers/StickerFilters'
import StickerGrid from '../components/stickers/StickerGrid'

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const stickers = [
    {
      id: 1,
      name: 'Code Hacker Sticker',
      price: 149,
      category: 'Tech',
      imageUrl: 'https://via.placeholder.com/400x300'
    },
    {
      id: 2,
      name: 'Anime Eyes',
      price: 199,
      category: 'Anime',
      imageUrl: 'https://via.placeholder.com/400x300'
    },
    {
      id: 3,
      name: 'Stay Minimal',
      price: 129,
      category: 'Minimal',
      imageUrl: 'https://via.placeholder.com/400x300'
    }
  ]

  const filteredStickers = stickers.filter((sticker) => {
    const matchesSearch = sticker.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      !category || sticker.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="sticker-section">
      <h1 className="text-2xl font-semibold">Sticker Catalog</h1>
      <p className="text-gray-600">
        Browse our latest laptop stickers.
      </p>

      <StickerFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <StickerGrid stickers={filteredStickers} />
    </div>
  )
}

export default Home
