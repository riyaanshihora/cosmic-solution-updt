/** A dashed "image goes here" box. Swap for a real <img> when you have a photo. */
export default function ImagePlaceholder({ label, parallax = false }) {
  return (
    <div className="ph">
      <div className="in" data-par={parallax ? '1' : undefined} />
      <span>Image space: {label}</span>
    </div>
  );
}
