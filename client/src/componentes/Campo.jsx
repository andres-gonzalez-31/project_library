export default function Campo({ etiqueta, error, ...props }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm text-papel/80 mb-1">{etiqueta}</span>
      <input
        {...props}
        className="w-full px-3 py-2 rounded bg-papel/95 text-tinta outline-none
                   border-2 border-transparent focus:border-cuero transition"
      />
      {error && <span className="block text-sm text-red-300 mt-1">{error}</span>}
    </label>
  );
}