type Item = { type: 'image'|'video'; src: string; caption?: string }
export default function EvidenceGallery({ items }: { items: Item[] }) {
  if (!items?.length) return null
  return (
    <section aria-label="Evidence">
      <h3>Evidence</h3>
      <ul className="gallery">
        {items.map((it, i) => (
          <li key={i}>
            {it.type === 'image'
              ? <img src={it.src} alt={it.caption || 'evidence'} />
              : <video controls src={it.src} />}
            {it.caption ? <figcaption>{it.caption}</figcaption> : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
