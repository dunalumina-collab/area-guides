// Clean placeholder/pattern block for an image slot where no legitimately
// usable real photo could be sourced in this pass (see final report for the
// exact list). Never a fake/stock photo standing in for real property
// photography — a textured gold/ivory pattern with a short label instead.

const CAMERA_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
    <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export default function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="ph-img">
      <div>
        {CAMERA_ICON}
        <div className="ph-label">{label}</div>
      </div>
    </div>
  );
}
