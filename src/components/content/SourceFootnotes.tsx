import sources from '../../content/sources.json'
export default function SourceFootnotes({ ids }: { ids: string[] }) {
  if (!ids?.length) return null
  return (
    <section aria-labelledby="sources-title">
      <h3 id="sources-title">Footnotes</h3>
      <ol>
        {ids.map(id => (
          <li key={id}><a href={sources[id].url} target="_blank" rel="noreferrer">{sources[id].label}</a></li>
        ))}
      </ol>
    </section>
  )
}
