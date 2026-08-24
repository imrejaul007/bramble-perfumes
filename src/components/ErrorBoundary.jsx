import { Component } from 'react'
import { AlertTriangle } from 'lucide-react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ background: '#FFFDF7', color: '#2A2018' }}
        >
          <div className="text-center space-y-4 max-w-sm px-6">
            <AlertTriangle
              size={48}
              style={{ color: '#9A7235', margin: '0 auto' }}
            />
            <h1
              className="font-serif text-2xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Something went wrong
            </h1>
            <p className="text-sm" style={{ color: '#7A6A58' }}>
              Please refresh the page to continue. If this persists, contact the
              presentation host.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
