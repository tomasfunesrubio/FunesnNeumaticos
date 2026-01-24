const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "50K+", label: "Neumáticos recapados" },
  { value: "500+", label: "Clientes satisfechos" },
  { value: "50%", label: "Ahorro promedio" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
