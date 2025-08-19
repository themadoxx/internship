export default function Section({
  title, subtitle, children
}: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section className="section">
      <h1>{title}</h1>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      {children}
    </section>
  )
}
