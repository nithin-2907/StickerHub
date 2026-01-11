import StickerCard from './StickerCard'

function StickerGrid({ stickers }) {
  return (
    <div className="sticker-grid">
      {stickers.map((sticker) => (
        <StickerCard key={sticker.id} sticker={sticker} />
      ))}
    </div>
  )
}

export default StickerGrid
