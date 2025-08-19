import data from '../content/experience.json'
import { Section, CARItem, EvidenceGallery, SourceFootnotes } from '../index'

export default function Experience() {
  return (
    <Section title="Feedback on your experience">
      {data.items.map((item: any, i: number) => <CARItem key={i} {...item} />)}
      <EvidenceGallery items={data.proofs} />
      <SourceFootnotes ids={data.sources} />
    </Section>
  )
}
