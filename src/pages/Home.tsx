import data from '../content/home.json'
import { Section } from '../index'

export default function Home() {
  return (
    <Section title={data.title} subtitle={data.tagline}>
      <ul>
        <li>Internship dates: {data.internship.dates}</li>
        <li>Length: {data.internship.length}</li>
        <li>Company: {data.internship.company}</li>
        <li>Workplace tutor: {data.internship.tutor}</li>
      </ul>
    </Section>
  )
}
