import data from '../content/critical.json'
import { Section, SourceFootnotes } from '../index'

export default function CriticalThinking() {
  return (
    <Section title="Critical thinking">
      <h2>Observed practices</h2><p>{data.observed}</p>
      <h2>Prior assumptions</h2><p>{data.assumptions}</p>
      <h2>Confirmations/Invalidations</h2><p>{data.validation}</p>
      <h2>Advantages & limits</h2><p>{data.proscons}</p>
      <SourceFootnotes ids={data.sources} />
    </Section>
  )
}
