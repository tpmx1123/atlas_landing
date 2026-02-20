import { useEffect, useRef } from 'react'

function App() {
  const animatedRef = useRef(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    const selector = '.service-card, .team-card, .sector-chip, .metric-box, .pillar'
    const els = document.querySelectorAll(selector)
    els.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function animateCounter(el, target, suffix) {
      if (!el) return
      let start = 0
      const duration = 1500
      const step = target / (duration / 16)
      const timer = setInterval(() => {
        start += step
        if (start >= target) {
          el.textContent = target + suffix
          clearInterval(timer)
        } else {
          el.textContent = Math.floor(start) + suffix
        }
      }, 16)
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current.has(entry.target)) {
            animatedRef.current.add(entry.target)
            const text = entry.target.textContent || ''
            const num = parseInt(text.replace(/[^0-9]/g, ''), 10)
            const suffix = text.includes('+') ? '+' : ''
            if (num) animateCounter(entry.target, num, suffix)
          }
        })
      },
      { threshold: 0.5 }
    )

    const counters = document.querySelectorAll('.stat-num, .metric-num')
    counters.forEach((c) => counterObserver.observe(c))
    return () => counterObserver.disconnect()
  }, [])

  const trustLogos = [
    'SBI', 'NaBFID', 'GMR Group', 'Bharat Biotech', 'Bank of Baroda', 'Hetero',
    'Hilton Hotels', 'NABARD', 'Union Bank', 'NCC', 'Canara Bank', 'DSR Group',
    'PNB', 'India Exim Bank'
  ]

  const services = [
    { icon: '📊', num: '01 — TEV', name: 'Techno Economic Viability Report', desc: 'Comprehensive 360° project assessment covering technical soundness, financial metrics (DSCR, IRR, NPV), and regulatory compliance — the gold standard for lender evaluation.' },
    { icon: '📋', num: '02 — DPR', name: 'Detailed Project Report', desc: 'Sector-specific project blueprints built with market analysis, technical specifications, financial models, and risk mitigation frameworks aligned to banking standards.' },
    { icon: '🏗️', num: '03 — LIE', name: "Lender's Independent Engineer", desc: "Mandatory for bank disbursement — our chartered engineers validate physical progress against financial expenditure through structured site inspection and compliance reporting." },
    { icon: '💼', num: '04 — PFA', name: 'Project Finance Advisory', desc: 'End-to-end debt structuring, financial modeling, and lender liaison — from term sheet to financial closure, we navigate the capital stack with precision.' },
    { icon: '📈', num: '05 — BIZ', name: 'Business Consultancy', desc: 'Strategic advisory for growth, M&A, valuations, and turnarounds — delivering structured, data-driven frameworks for complex business decisions.' },
    { icon: '🌱', num: '06 — ESG', name: 'ESG Reporting & Advisory', desc: 'SEBI BRSR, GRI, and SASB-aligned ESG advisory — helping enterprises unlock green financing benefits and demonstrate compliance to institutional lenders.' }
  ]

  const pillars = [
    { icon: '🎯', name: 'Deep Domain Expertise', desc: 'Sector-specific knowledge across 15+ industries from pharma to infrastructure.' },
    { icon: '📡', name: 'Data Driven', desc: 'Every recommendation backed by quantitative analysis and market intelligence.' },
    { icon: '⚡', name: 'Speed & Integrity', desc: 'Time-bound deliverables without compromise on accuracy or quality.' },
    { icon: '🏦', name: 'Bank-Aligned', desc: "Our methodology is calibrated to meet the scrutiny of India's top lending institutions." }
  ]

  const metrics = [
    { num: '600+', label: 'Projects Successfully Delivered', sub: 'Across infrastructure, pharma, energy, real estate & more', featured: true },
    { num: '13+', label: 'Years in Operation', sub: 'Since 2012', featured: false },
    { num: '24', label: 'Bank Empanelments', sub: 'National & private banks', featured: false },
    { num: '8', label: 'Cities Nationwide', sub: 'Pan-India presence', featured: false }
  ]

  const sectors = [
    { icon: '💊', name: 'Pharma' }, { icon: '🛣️', name: 'Roads & Highways' }, { icon: '⚡', name: 'Energy & Renewables' },
    { icon: '🏗️', name: 'Infra & Real Estate' }, { icon: '🏨', name: 'Hospitality' }, { icon: '🏥', name: 'Healthcare' },
    { icon: '🌾', name: 'Agri & Food Processing' }, { icon: '⚙️', name: 'Iron, Steel & Cement' }, { icon: '🚚', name: 'Logistics & Warehousing' },
    { icon: '🚗', name: 'Electric Vehicles' }, { icon: '🧵', name: 'Textiles' }, { icon: '🚙', name: 'Automotive' },
    { icon: '🧪', name: 'Fine Chemicals' }, { icon: '📄', name: 'Paper' }, { icon: '🌐', name: '& More' }
  ]

  const banks = [
    'NaBFID', 'SBI', 'Union Bank of India', 'India Exim Bank', 'Bank of Baroda', 'Central Bank of India',
    'Canara Bank', 'UCO Bank', 'Bank of Maharashtra', 'NABARD', 'PNB', 'Bank of India',
    'IIFL', 'Indian Bank', 'Indian Overseas Bank', '+ 9 More'
  ]

  const clients = [
    'Continental Coffee', 'Bharat Biotech', 'GMR Group', 'MEIL', 'Karkinos Healthcare', 'Hilton Hotels & Resorts',
    'Hetero', 'SAS Infra', 'NCC', 'Vasavi Group', 'Rajapushpa Properties', 'DSR Group', 'Lee Pharma', 'Radha TMT',
    'Devi Fisheries', 'Sentini Flo Pipes', 'Avada Energy', 'RackBank', 'AET', 'Epsilon Carbon'
  ]

  const team = [
    { initials: 'GR', name: 'G. Madhusudhan Rao', role: 'Founder & Managing Director', prev: 'Former senior leader at IDBI, HDFC, ING, and global MNCs. 30 years of financial services leadership.', exp: '30+ YRS EXPERIENCE' },
    { initials: 'JS', name: 'J.S. Subba Rao', role: 'Co-Founder & Chairman', prev: 'Former GM, State Bank Group. SEBI Arbitration Panel Member. 40 years in credit analysis & treasury operations.', exp: '40+ YRS EXPERIENCE' },
    { initials: 'MM', name: 'M.M. Panda', role: 'Director', prev: 'Former DGM, Central Bank of India. Expert in credit analysis and risk management.', exp: '30+ YRS EXPERIENCE' },
    { initials: 'CR', name: 'C.M. Ramesh', role: 'Director', prev: 'CISA & Chartered Accountant. Former Group CFO at Landmark Group (Middle East). 30+ years in finance.', exp: '30+ YRS EXPERIENCE' }
  ]

  const presenceCities = ['Hyderabad', 'Mumbai', 'Pune', 'Chennai', 'Bengaluru', 'Delhi', 'Vijayawada', 'Raipur']

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="Atlas Financial Research & Consulting" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#sectors">Sectors</a></li>
          <li><a href="#banks">Empanelments</a></li>
          <li><a href="#team">Leadership</a></li>
          <li><a href="#contact" className="nav-cta">Get In Touch</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-triangles">
          <div className="tri tri-1" />
          <div className="tri tri-2" />
          <div className="tri tri-3" />
          <div className="tri tri-4" />
          <div className="tri tri-5" />
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-dot" />
            <span>Established 2012 · Hyderabad, India</span>
          </div>

          <h1 className="hero-headline">
            Where Capital<br />Meets <em>Conviction.</em>
          </h1>

          <p className="hero-sub">
            India&apos;s most trusted financial research & consulting firm — empanelled with 24 banks, delivering 600+ projects across infrastructure, pharma, energy, and beyond.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start a Conversation
              <span>→</span>
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
              <span>↓</span>
            </a>
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <div>
                <div className="stat-num">13<span>+</span></div>
                <div className="stat-label">Years of<br />Excellence</div>
              </div>
            </div>
            <div className="stat-item">
              <div>
                <div className="stat-num">24</div>
                <div className="stat-label">Bank<br />Empanelments</div>
              </div>
            </div>
            <div className="stat-item">
              <div>
                <div className="stat-num">600<span>+</span></div>
                <div className="stat-label">Projects<br />Delivered</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      <div className="trust-strip">
        <span className="trust-label">Trusted By</span>
        <div className="trust-logos-wrap">
          <div className="trust-logos">
            {[...trustLogos, ...trustLogos].map((name, i) => (
              <span key={i} className="trust-logo">{name}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="section-tag">
                <div className="section-tag-line" />
                <span>What We Do</span>
              </div>
              <h2 className="section-title">Precision Services for<br /><em>Complex Capital</em> Decisions</h2>
            </div>
            <p className="section-sub">From concept to closure — our advisory services are built on 13+ years of deep domain experience and bank-aligned rigor.</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon-wrap">{s.icon}</div>
                <div className="service-num">{s.num}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why" id="why">
        <div className="container">
          <div className="why-layout">
            <div className="why-left">
              <div className="section-tag">
                <div className="section-tag-line" />
                <span style={{ color: 'white' }}>Why Atlas</span>
              </div>
              <h2 className="section-title">Built on Expertise.<br /><em>Delivered</em> with Integrity.</h2>
              <p className="section-sub">Our leadership team brings over 300+ combined years of experience from India&apos;s top public sector banks, IITs, and global enterprises.</p>

              <div className="why-pillars">
                {pillars.map((p, i) => (
                  <div key={i} className="pillar">
                    <div className="pillar-icon">{p.icon}</div>
                    <div className="pillar-name">{p.name}</div>
                    <div className="pillar-desc">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-right">
              {metrics.map((m, i) => (
                <div key={i} className="metric-box">
                  <div className="metric-num">{m.num}</div>
                  <div className="metric-label">{m.label}</div>
                  <div className="metric-sub">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sectors" id="sectors">
        <div className="container">
          <div className="section-tag">
            <div className="section-tag-line" />
            <span>Sectors</span>
          </div>
          <h2 className="section-title">Industries We <em>Specialize</em> In</h2>

          <div className="sectors-grid">
            {sectors.map((s, i) => (
              <div key={i} className="sector-chip">
                <span className="sector-icon">{s.icon}</span>
                <div className="sector-name">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banks" id="banks">
        <div className="container">
          <div className="banks-intro">
            <div>
              <div className="section-tag">
                <div className="section-tag-line" />
                <span>Empanelments</span>
              </div>
              <h2 className="section-title">Recognized by<br />India&apos;s Leading <em>Banks</em></h2>
              <p className="section-sub">Our work speaks for itself — empanelled as a trusted financial advisory partner across 24 of India&apos;s largest public sector and private financial institutions.</p>
            </div>
            <div className="banks-quote" style={{ background: 'var(--cream)', padding: '36px', borderRadius: '8px', borderLeft: '3px solid var(--red)' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontStyle: 'italic', color: 'var(--navy)', lineHeight: 1.7, marginBottom: '16px' }}>
                &quot;We&apos;ve always believed in letting our work do the talking — and that&apos;s how we became a go-to partner for financial institutions across the board.&quot;
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--grey)' }}>Atlas Leadership</div>
            </div>
          </div>

          <div className="banks-grid">
            {banks.map((name, i) => (
              <div key={i} className="bank-chip">
                <div className="bank-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="clients">
        <div className="clients-inner">
          <div className="clients-header">
            <div className="clients-title">Our Client Associations</div>
          </div>
          <div className="clients-scroll">
            <div className="clients-track">
              {[...clients, ...clients].map((name, i) => (
                <div key={i} className="client-pill">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="team" id="team">
        <div className="container">
          <div className="section-tag">
            <div className="section-tag-line" />
            <span>Leadership</span>
          </div>
          <h2 className="section-title">The Minds Behind <em>Atlas</em></h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>Seasoned professionals from SBI, IDBI, HDFC, IIT, and global institutions — with a collective 300+ years of domain expertise.</p>

          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <div className="team-initials">{t.initials}</div>
                <div className="team-name">{t.name}</div>
                <div className="team-role">{t.role}</div>
                <div className="team-prev">{t.prev}</div>
                <div className="team-exp">{t.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div className="cta-left">
            <div className="section-tag">
              <div className="section-tag-line" />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title" style={{ color: 'white', fontSize: '40px' }}>Let&apos;s Talk About<br /><em style={{ color: 'var(--gold)' }}>Your Project</em></h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '36px' }}>Share your requirements — our advisory team will get back within 24 hours.</p>

            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input id="name" type="text" className="form-input" placeholder="Full name" />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="company">Company</label>
                  <input id="company" type="text" className="form-input" placeholder="Organisation" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" className="form-input" placeholder="+91 00000 00000" />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input" placeholder="you@company.com" />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="service">Service Required</label>
                <select id="service" className="form-select">
                  <option value="">Select a service</option>
                  <option>Techno Economic Viability (TEV)</option>
                  <option>Detailed Project Report (DPR)</option>
                  <option>Lender&apos;s Independent Engineer (LIE)</option>
                  <option>Project Finance Advisory</option>
                  <option>Business Consultancy</option>
                  <option>ESG Reporting</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
                Submit Inquiry →
              </button>
            </form>
          </div>

          <div className="cta-right">
            <div className="cta-right-title">Your Financial<br />Advisory Partner.</div>

            <div className="cta-contact-item">
              <div className="cta-contact-icon">📞</div>
              <div className="cta-contact-text">
                <strong>Call Us</strong>
                +91 40-46000440<br />+91 92465 35360
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-icon">✉️</div>
              <div className="cta-contact-text">
                <strong>Email</strong>
                info@atlasfin.in
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-icon">🌐</div>
              <div className="cta-contact-text">
                <strong>Website</strong>
                www.atlasfin.in
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-icon">📍</div>
              <div className="cta-contact-text">
                <strong>Presence Across India</strong>
                <div className="presence-chips">
                  {presenceCities.map((city, i) => (
                    <span key={i} className="presence-chip">{city}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: 32, height: 32, background: 'var(--red)', borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 14 }}>🌐</div>
            <span style={{ fontFamily: "'DM Sans'", fontWeight: 700, fontSize: 16, letterSpacing: '3px', color: 'white' }}>ATLAS</span>
          </div>
          <span className="footer-copy">© 2025 Atlas Financial Research & Consulting. All rights reserved.</span>
        </div>

        <div className="footer-tagline">Delivering clarity in complex capital markets.</div>

        <ul className="footer-links">
          <li><a href="#/">Privacy Policy</a></li>
          <li><a href="#/">Disclaimer</a></li>
          <li><a href="#/">Sitemap</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App
