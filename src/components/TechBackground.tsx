const CODE_SNIPPETS = [
  'const solution = await build();',
  'function createValue(): ROI {}',
  '<Innovation render="digital" />',
  'npm run transform-business',
  'git push origin excellence',
  'SELECT * FROM future WHERE quality = 100',
  'docker run --name enterprise .',
  'return res.json({ status: "success" })',
  'useState<Growth>(Infinity)',
  'async function scale(): Promise<void> {}',
  '{ "client": "satisfied", "uptime": "99.9%" }',
  'export const expertise = 10_000_000;',
  'interface Enterprise extends Innovation {}',
  '=> Promise<DeliveredOnTime>',
  'type Future = Tech & Vision & Execution',
  'class Solution extends Legacy { upgrade() {} }',
  '#include <best-practices.h>',
  'import { expertise } from "@thulir/infotech"',
  '01010100 01101000 01110101 01101100 01101001 01110010',
  '/* Building tomorrow, today */',
];

const BINARY_COL_1 = Array(80).fill(null).map(() => Math.round(Math.random())).join('\n');
const BINARY_COL_2 = Array(80).fill(null).map(() => Math.round(Math.random())).join('\n');

export default function TechBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Dot grid */}
      <div className="tech-grid-dots absolute inset-0 opacity-60" />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Floating code snippets */}
      {CODE_SNIPPETS.map((snippet, i) => (
        <div
          key={i}
          className="code-float"
          style={{
            left: `${(i * 5 + (i % 3) * 3) % 90}%`,
            animationDelay: `${(i * 1.4) % 22}s`,
            animationDuration: `${22 + (i % 6) * 5}s`,
          }}
        >
          {snippet}
        </div>
      ))}

      {/* Ambient orbs */}
      <div className="orb-primary" />
      <div className="orb-secondary" />

      {/* Binary side streams */}
      <div className="binary-stream left-3">
        <div
          className="binary-stream-inner"
          style={{ animationDuration: '10s' }}
        >
          {BINARY_COL_1}
        </div>
      </div>
      <div className="binary-stream right-3">
        <div
          className="binary-stream-inner"
          style={{ animationDuration: '14s', animationDelay: '-4s' }}
        >
          {BINARY_COL_2}
        </div>
      </div>
    </div>
  );
}
