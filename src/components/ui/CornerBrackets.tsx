interface Props {
  size?: number;
  opacity?: number;
}

export default function CornerBrackets({ size = 18, opacity = 0.4 }: Props) {
  const s = `${size}px`;
  const color = `rgba(16,185,129,${opacity})`;
  const base: React.CSSProperties = { position: 'absolute', width: s, height: s, borderColor: color, borderWidth: '1.5px' };
  return (
    <>
      <div style={{ ...base, top: 0, left: 0, borderRight: 'none', borderBottom: 'none' }} />
      <div style={{ ...base, top: 0, right: 0, borderLeft: 'none', borderBottom: 'none' }} />
      <div style={{ ...base, bottom: 0, left: 0, borderRight: 'none', borderTop: 'none' }} />
      <div style={{ ...base, bottom: 0, right: 0, borderLeft: 'none', borderTop: 'none' }} />
    </>
  );
}
