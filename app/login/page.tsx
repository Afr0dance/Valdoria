'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

const PASSWORDS: Record<string, string> = {
  china: 'RedLine2024',
  usa: 'Minerals4200',
  valdoria: 'OptionB2024',
}

export default function LoginPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const delegation = searchParams.get('delegation') || 'china'
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const delegationNames: Record<string, string> = {
    china: "People's Republic of China",
    usa: 'United States of America',
    valdoria: 'Republic of Valdoria',
  }

  const delegationColors: Record<string, { border: string; text: string; bg: string }> = {
    china: { border: '#c8102e', text: '#c8102e', bg: 'rgba(200, 16, 46, 0.05)' },
    usa: { border: '#c9a84c', text: '#c9a84c', bg: 'rgba(201, 168, 76, 0.05)' },
    valdoria: { border: '#2d6a2d', text: '#2d6a2d', bg: 'rgba(45, 106, 45, 0.05)' },
  }

  const colors = delegationColors[delegation] || delegationColors.china

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (password === PASSWORDS[delegation as keyof typeof PASSWORDS]) {
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
      background: '#f5f0e8',
      fontFamily: "'IBM Plex Mono', monospace",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#fff',
        border: `2px solid ${colors.border}`,
        padding: '40px 32px',
      }}>
        <div style={{
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: colors.text,
          marginBottom: '8px',
          fontWeight: 600,
        }}>
          CLASSIFIED · DELEGATION EYES ONLY
        </div>

        <h1 style={{
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '0.01em',
          color: '#0e0d0c',
          marginBottom: '8px',
          marginTop: '20px',
        }}>
          {delegationNames[delegation as keyof typeof delegationNames]}
        </h1>

        <p style={{
          fontSize: '12px',
          color: '#7a6f62',
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
              color: '#7a6f62',
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
                border: `1px solid ${error ? '#c8102e' : '#ccc4b0'}`,
                background: error ? 'rgba(200, 16, 46, 0.05)' : '#f5f0e8',
                color: '#0e0d0c',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
              placeholder="Enter access code"
              autoFocus
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(200, 16, 46, 0.1)',
              border: '1px solid #c8102e',
              color: '#c8102e',
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
              background: isLoading ? '#ccc4b0' : colors.border,
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
          color: '#7a6f62',
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
