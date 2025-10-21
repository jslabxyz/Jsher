export default function DottedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}

