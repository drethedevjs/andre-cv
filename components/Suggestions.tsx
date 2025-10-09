export default function Suggestions({
  suggestions
}: {
  suggestions: string[];
}) {
  return (
    <section id="suggestions" className="mb-10 mx-5">
      <h2 className="mb-4 p-2 cv-gradient">Suggestions</h2>
      {suggestions.map((s, idx) => (
        <p
          key={idx}
          className="p-3 border-2 border-gray-300 rounded-md text-xl italic mb-3"
        >
          {s}
        </p>
      ))}
    </section>
  );
}
