// ref: https://stackoverflow.com/a/59499895
export {};

// ref: https://react.dev/blog/2024/04/25/react-19-upgrade-guide#the-jsx-namespace-in-typescript
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'demo-badge': any;
    }
  }
}
