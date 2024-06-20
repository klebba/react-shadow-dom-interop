import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './demo/demo-badge.js';

console.log(`React version ${React.version}`);

function Demo() {
  return (
    <>
      <h3>Colors</h3>
      <demo-badge color="Indigo">indigo</demo-badge>&nbsp;
      <demo-badge color="Purple">purple</demo-badge>&nbsp;
      <demo-badge color="Yellow">yellow</demo-badge>&nbsp;
      <demo-badge color="Green">green</demo-badge>&nbsp;
      <demo-badge color="Gray">gray</demo-badge>&nbsp;
      <demo-badge color="Red">red</demo-badge>

      <h3>Status</h3>
      <demo-badge color="NEW">new</demo-badge>&nbsp;
      <demo-badge color="IN_PROGRESS">in progress</demo-badge>&nbsp;
      <demo-badge color="COMPLETE">complete</demo-badge>&nbsp;
      <demo-badge color="UNKNOWN">unknown</demo-badge>&nbsp;
      <demo-badge color="FAILURE">failure</demo-badge>

      <h3>Truncated, Borderless &amp; Loading</h3>
      <demo-badge>long labels are truncated</demo-badge>&nbsp;
      <demo-badge borderless>borderless</demo-badge>&nbsp;
      <demo-badge loading>loading</demo-badge>

      <h3>Menu</h3>
      <demo-badge type="menu-trigger">Select</demo-badge>
    </>
  )
}

const root = createRoot(document.getElementById('root')!);
root.render(<Demo/>);
