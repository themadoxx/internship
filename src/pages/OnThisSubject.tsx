import data from '../content/onthissubject.json'
import { Section, SourceFootnotes } from '../index'

export default function OnThisSubject() {
  return (
    <Section title="On this subject">
      <h2>CV</h2>
      <p><a href={data.cv.url} target="_blank" rel="noreferrer">{data.cv.label}</a></p>
      <h2>Career coherence</h2><p>{data.career}</p>
      <SourceFootnotes ids={data.sources} />
    </Section>
  )
}
