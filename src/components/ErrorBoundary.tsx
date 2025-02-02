import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onCaughtError?: (error: Error, info: { componentStack: string }) => void;
  onUncaughtError?: (error: Error) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    if (this.props.onCaughtError) {
      this.props.onCaughtError(error, info);
    }
    if (this.props.onUncaughtError) {
      this.props.onUncaughtError(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with the modal.</h1>;
    }

    return this.props.children;
  }
} 