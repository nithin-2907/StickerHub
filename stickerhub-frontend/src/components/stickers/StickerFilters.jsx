function StickerFilters({ search, setSearch, category, setCategory }) {
  return (
    <div className="sticker-filters">
      <input
        type="text"
        placeholder="Search stickers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-input"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="filter-select"
      >
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Anime">Anime</option>
        <option value="Quotes">Quotes</option>
        <option value="Minimal">Minimal</option>
      </select>
    </div>
  )
}

export default StickerFilters
