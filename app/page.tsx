'use client'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0e0d0c',
      color: '#f5f0e8',
      fontFamily: "'IBM Plex Mono', monospace",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '20px',
          opacity: 0.3,
        }}>
          ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
        </div>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          FENNLAND FORUM
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#7a6f62',
          letterSpacing: '0.12em',
          marginBottom: '40px',
          lineHeight: 1.8,
        }}>
          EMERGENCY SPECIAL SESSION · UNGA/SEP/FF/2024/001
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '40px',
        }}>
          <a href="/login?delegation=china" style={{
            padding: '20px',
            border: '2px solid #c8102e',
            color: '#c8102e',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(200, 16, 46, 0.1)'
            e.currentTarget.style.borderColor = '#8a0b1f'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = '#c8102e'
          }}>
            PRC Dossier
          </a>
          <a href="/login?delegation=usa" style={{
            padding: '20px',
            border: '2px solid #c9a84c',
            color: '#c9a84c',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(201, 168, 76, 0.1)'
            e.currentTarget.style.borderColor = '#a68f00'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = '#c9a84c'
          }}>
            USA Dossier
          </a>
          <a href="/login?delegation=valdoria" style={{
            padding: '20px',
            border: '2px solid #2d6a2d',
            color: '#2d6a2d',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(45, 106, 45, 0.1)'
            e.currentTarget.style.borderColor = '#1f4f1f'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = '#2d6a2d'
          }}>
            Valdoria Dossier
          </a>
        </div>
      </div>
    </div>
  )
}
