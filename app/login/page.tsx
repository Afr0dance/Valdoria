'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const delegation = 'valdoria'
  const correctPassword = 'OptionB2024'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (password === correctPassword) {
      const token = `${delegation}:${Date.now()}`
      document.cookie = `auth_token=${token}; path=/; max-age=86400`
      router.push(`/${delegation}`)
    } else {
      setError('Access Denied. Incorrect credentials.')
      setPassword('')
    }
    setIsLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f2f4ee',
      fontFamily: "'JetBrains Mono', monospace",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#fff',
        border: '2px solid #2d6a2d',
        padding: '40px 32px',
      }}>
        <div style={{
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#2d6a2d',
          marginBottom: '8px',
          fontWeight: 600,
        }}>
          CONFIDENTIAL · EYES ONLY
        </div>

        <h1 style={{
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '0.01em',
          color: '#1a2010',
          marginBottom: '8px',
          marginTop: '20px',
        }}>
          Republic of Valdoria
        </h1>

        <p style={{
          fontSize: '12px',
          color: '#6a7a5a',
          marginBottom: '30px',
          lineHeight: 1.6,
        }}>
          FENNLAND FORUM · EMERGENCY SPECIAL SESSION
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6a7a5a',
              marginBottom: '8px',
              fontWeight: 600,
            }}>
              Access Code
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                border: `1px solid ${error ? '#2d6a2d' : '#c8d0b8'}`,
                background: error ? 'rgba(45, 106, 45, 0.05)' : '#f2f4ee',
                color: '#1a2010',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
              placeholder="Enter access code"
              autoFocus
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(45, 106, 45, 0.1)',
              border: '1px solid #2d6a2d',
              color: '#2d6a2d',
              padding: '12px 14px',
              fontSize: '12px',
              marginBottom: '20px',
              lineHeight: 1.5,
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: isLoading ? '#c8d0b8' : '#2d6a2d',
              color: '#fff',
              border: 'none',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              opacity: isLoading ? 0.6 : 1,
            }}>
            {isLoading ? 'Verifying...' : 'Unlock Dossier'}
          </button>
        </form>

        <div style={{
          fontSize: '9px',
          color: '#6a7a5a',
          marginTop: '20px',
          textAlign: 'center',
          letterSpacing: '0.08em',
        }}>
          FENNLAND FORUM · UNGA/SEP/FF/2024/001
        </div>
      </div>
    </div>
  )
}
