/**
 * A single user's summary card. All visual styling (color, spacing,
 * shadow, hover state) is Tailwind; the entry animation comes from the
 * custom .card-enter-animation class defined in animations.css.
 */
export default function UserCard({ user, onSelect }) {
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(user);
    }
  }

  return (
    <article
      className="flex flex-col card-enter-animation group h-full cursor-pointer rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onClick={() => onSelect(user)}
      onKeyDown={handleKeyDown}
    >
      <h3 className="text-base font-semibold text-slate-900">{user.name}</h3>
      <div className="mb-4 mt-1 text-xs font-medium text-indigo-600">
        <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
          @{user.username}
        </span>
      </div>

      <dl className="space-y-1.5 text-sm">
        <div className="flex gap-1.5">
          <dt className="font-medium text-slate-600">Email ID:</dt>
          <dd className="truncate text-slate-500">{user.email}</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="font-medium text-slate-600">Company:</dt>
          <dd className="truncate text-slate-500">{user.company?.name}</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="font-medium text-slate-600">City:</dt>
          <dd className="truncate text-slate-500">{user.address?.city}</dd>
        </div>
      </dl>

      <span className="mt-auto inline-block text-xs font-medium text-indigo-500 group-hover:underline">
        View full details &rarr;
      </span>
    </article>
  );
}
