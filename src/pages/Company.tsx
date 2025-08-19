import data from '../content/company.json'
import { Section } from '../index'

export default function Company() {
  return (
    <Section title="Company">
      <h2>Activity</h2><p>{data.activity}</p>
      <h2>Sector</h2><p>{data.sector}</p>
      <h2>History</h2><p>{data.history}</p>
      <h2>Organization</h2><p>{data.organization}</p>
      <h2>Practices</h2><p>{data.practices}</p>
    </Section>
  )
}
