type Props = {
  context: string
  actions: string[]
  result: string
  kpis?: string[]
}
export default function CARItem({ context, actions, result, kpis }: Props) {
  return (
    <article className="car">
      <h3>Context</h3><p>{context}</p>
      <h3>Actions</h3>
      <ul>{actions.map((a, i) => <li key={i}>{a}</li>)}</ul>
      <h3>Result</h3><p>{result}</p>
      {kpis?.length ? <p><strong>KPIs:</strong> {kpis.join(' · ')}</p> : null}
    </article>
  )
}
