import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    document
      .querySelectorAll('.proceso-grid .paso, .beneficios-grid .ben-card')
      .forEach((el, i) => {
        ;(el as HTMLElement).style.transitionDelay = `${i * 0.08}s`
      })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          Queule<span>.</span>Ambiental
        </div>
        <ul className="nav-links">
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#beneficios">Beneficios</a></li>
          <li><a href="#cobertura">Cobertura</a></li>
          <li><a href="#valores">Nosotros</a></li>
          <li><a href="#contacto" className="nav-cta">Contactar</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-text">
          <p className="hero-label fade-up">Gestión Responsable y Futuro Sostenible</p>
          <h1 className="hero-headline fade-up delay-1">
            Recolección<br />de <em>Residuos</em><br />Inteligente.
          </h1>
          <p className="hero-sub fade-up delay-2">
            Soluciones eficientes, adaptadas a tus operaciones. Reducimos hasta un 40% tus costos asociados a sobreproducción.
          </p>
          <div className="hero-btns fade-up delay-3">
            <a href="#contacto" className="btn-primary">Solicitar Cotización</a>
            <a href="#proceso" className="btn-outline">Ver Proceso</a>
          </div>
        </div>

        <div className="hero-stats fade-up delay-2">
          <div className="stat-card featured">
            <div>
              <div className="stat-num">40%</div>
              <div className="stat-label">Reducción de costos</div>
            </div>
            <div className="stat-desc">
              Ahorra en comparación al modelo tradicional. El mismo servicio, mejor gestión, menor costo.
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-num">$35</div>
            <div className="stat-label">Por litro</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">5</div>
            <div className="stat-label">Comunas cubiertas</div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <p className="section-label" style={{ justifyContent: 'center' }}>Comparativa</p>
        <h2 className="section-title">Modelo <em>Tradicional</em> vs Queule</h2>
        <div className="pricing-compare">
          <div className="price-card">
            <p className="price-model-name">Modelo Tradicional</p>
            <div className="price-tag">0,0008 <sub>UTM/L</sub></div>
            <p className="price-desc">Tarifa variable según UTM. Mayor costo en períodos de alta inflación.</p>
          </div>
          <div className="vs-badge">VS</div>
          <div className="price-card active">
            <p className="price-model-name">Precio por litro</p>
            <div className="price-tag">$35<sub>/L</sub></div>
            <ul className="price-checks">
              <li>Mismo servicio de recolección</li>
              <li>Precio fijo y predecible</li>
              <li>Mejor gestión y trazabilidad</li>
              <li>Ahorro de hasta un 40%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso">
        <p className="section-label">Cómo trabajamos</p>
        <h2 className="section-title">Nuestro <em>Proceso</em></h2>
        <p style={{ color: 'var(--gris)', maxWidth: '480px', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '0.5rem' }}>
          Un proceso simple, eficiente y trazable. Diseñado para adaptarse a tu operación.
        </p>
        <div className="proceso-grid">
          <div className="paso reveal">
            <div className="paso-num">1</div>
            <div className="paso-title">Evaluación</div>
            <p className="paso-desc">Analizamos tus necesidades y volúmenes de residuos para entender tu operación en detalle.</p>
          </div>
          <div className="paso reveal">
            <div className="paso-num">2</div>
            <div className="paso-title">Planificación</div>
            <p className="paso-desc">Diseñamos rutas y frecuencias a la medida de tus procesos productivos.</p>
          </div>
          <div className="paso reveal">
            <div className="paso-num">3</div>
            <div className="paso-title">Recolección</div>
            <p className="paso-desc">Retiro seguro, eficiente y puntual. Cumplimos con todas las normativas vigentes.</p>
          </div>
          <div className="paso reveal">
            <div className="paso-num">4</div>
            <div className="paso-title">Optimización</div>
            <p className="paso-desc">Mejoramos continuamente para reducir costos y aumentar la eficiencia de tu gestión.</p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios">
        <p className="section-label">Por qué elegirnos</p>
        <h2 className="section-title">Nuestros <em>Beneficios</em></h2>
        <div className="beneficios-grid">
          <div className="ben-card reveal">
            <div className="ben-icon">💰</div>
            <div className="ben-title">Reducción de Costos</div>
            <p className="ben-desc">Ahorra hasta un 40% en comparación al sistema tradicional de gestión de residuos.</p>
          </div>
          <div className="ben-card reveal">
            <div className="ben-icon">📅</div>
            <div className="ben-title">Retiro Programado</div>
            <p className="ben-desc">Frecuencias flexibles y adaptadas a tus necesidades operacionales específicas.</p>
          </div>
          <div className="ben-card reveal">
            <div className="ben-icon">⚙️</div>
            <div className="ben-title">Flexibilidad Operacional</div>
            <p className="ben-desc">Nos adaptamos a tus procesos y volúmenes de producción sin importar el tamaño.</p>
          </div>
          <div className="ben-card reveal">
            <div className="ben-icon">🌿</div>
            <div className="ben-title">Gestión Responsable</div>
            <p className="ben-desc">Comprometidos con el medio ambiente y la sostenibilidad en cada operación.</p>
          </div>
          <div className="ben-card reveal">
            <div className="ben-icon">📋</div>
            <div className="ben-title">Control y Trazabilidad</div>
            <p className="ben-desc">Registro y seguimiento completo para una gestión transparente y documentada.</p>
          </div>
          <div className="ben-card reveal">
            <div className="ben-icon">🛡️</div>
            <div className="ben-title">Seguridad y Confianza</div>
            <p className="ben-desc">Cumplimos con todas las normativas y estándares vigentes en materia ambiental.</p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section id="valores">
        <div>
          <p className="section-label">Quiénes somos</p>
          <h2 className="section-title">Empresa con <em>Propósito</em></h2>
          <p style={{ color: 'var(--gris)', fontSize: '0.92rem', lineHeight: 1.7, marginTop: '1rem', maxWidth: '340px' }}>
            Somos una empresa enfocada en soluciones eficientes para la gestión de sobreproducción de residuos, entregando alternativas competitivas, responsables y adaptadas a las necesidades operacionales de cada cliente.
          </p>
          <div className="valores-list">
            <span className="valor-chip">Integridad</span>
            <span className="valor-chip">Responsabilidad</span>
            <span className="valor-chip">Compromiso</span>
            <span className="valor-chip">Seguridad</span>
            <span className="valor-chip">Sustentabilidad</span>
            <span className="valor-chip">Mejora Continua</span>
          </div>
        </div>

        <div className="valores-mission reveal">
          <p className="mission-label">Nuestra Misión</p>
          <p className="mission-text">
            Entregar soluciones eficientes y responsables para la gestión de residuos, ayudando a empresas a reducir costos y mejorar su operación mediante un servicio confiable, flexible y sustentable.
          </p>
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(91,184,50,0.15)' }}>
            <p className="mission-label">Nuestra Visión</p>
            <p className="mission-text">
              Ser una empresa referente en gestión eficiente de residuos, reconocida por generar soluciones sustentables, competitivas y orientadas a optimizar recursos para nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section id="cobertura">
        <p className="section-label">Dónde operamos</p>
        <h2 className="section-title">Cobertura y <em>Capacidad</em></h2>
        <div className="cobertura-inner">
          <div>
            <p style={{ color: 'var(--gris)', fontSize: '0.9rem', marginBottom: '1.8rem', lineHeight: 1.7 }}>
              Cobertura comunal estratégica con rutas eficientes y adaptadas a cada cliente. Atención programada y respuestas ágiles.
            </p>
            <div className="comunas-grid">
              <span className="comuna-tag">Ñuñoa</span>
              <span className="comuna-tag">Macul</span>
              <span className="comuna-tag">Peñalolén</span>
              <span className="comuna-tag">La Florida</span>
              <span className="comuna-tag">Puente Alto</span>
            </div>
          </div>
          <div className="capacidad-list">
            <div className="cap-item reveal">
              <div className="cap-icon">🚛</div>
              <div>
                <p className="cap-text-title">Flota Moderna</p>
                <p className="cap-text-desc">Para operaciones seguras, eficientes y puntuales en cada retiro.</p>
              </div>
            </div>
            <div className="cap-item reveal">
              <div className="cap-icon">🕐</div>
              <div>
                <p className="cap-text-title">Disponibilidad Operativa</p>
                <p className="cap-text-desc">Coordinación ágil y capacidad operativa según volumen y frecuencia requerida.</p>
              </div>
            </div>
            <div className="cap-item reveal">
              <div className="cap-icon">👷</div>
              <div>
                <p className="cap-text-title">Equipo Capacitado</p>
                <p className="cap-text-desc">Comprometido con la seguridad, el medio ambiente y el servicio al cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section id="contacto">
        <p className="section-label" style={{ justifyContent: 'center' }}>Hablemos</p>
        <h2 className="cta-big">
          Más Eficiencia.<br />
          Menos Costos.<br />
          <em>Mejor Gestión.</em>
        </h2>
        <p className="cta-sub">Encontremos juntos la mejor solución para tu operación.</p>
        <a href="mailto:queuleambiental@gmail.com" className="btn-primary" style={{ position: 'relative', zIndex: 2 }}>
          Escribirnos Ahora
        </a>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <span className="contact-label">Teléfono</span>
            <a href="tel:+56942018346" className="contact-value">+56 9 4201 8346</a>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <span className="contact-label">Email</span>
            <a href="mailto:queuleambiental@gmail.com" className="contact-value">queuleambiental@gmail.com</a>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🌐</div>
            <span className="contact-label">Web</span>
            <a href="https://www.queuleambiental.cl" target="_blank" rel="noreferrer" className="contact-value">
              www.queuleambiental.cl
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Queule<span>.</span>Ambiental</div>
        <p className="footer-tag">Gestión Responsable y Futuro Sostenible</p>
        <p className="footer-copy">© 2025 Queule Ambiental. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}
