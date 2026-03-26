import { Canvas } from '@react-three/fiber';
import { Suspense, Component, ReactNode } from 'react';
import EnergyField from './EnergyField';

// Error boundary to catch WebGL errors
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function Scene() {
  return (
    <ErrorBoundary>
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <EnergyField />
          </Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}
