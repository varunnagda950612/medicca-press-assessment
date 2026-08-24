/**
 * Page header: title + the search/filter input. Kept as its own component
 * so App.jsx doesn't have to interleave markup with state wiring.
 */
export default function Header({ searchTerm, onSearchChange, resultCount }) {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="container flex flex-col gap-2 py-3 lg:flex-row lg:items-center lg:justify-around lg:gap-4 lg:py-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 lg:text-2xl">
            User Directory
          </h2>
          <p className="text-xs text-slate-500">
            Browse, search and inspect user profiles.
          </p>
        </div>
        <div className="w-full lg:w-3xl m-auto">
          <label htmlFor="user-search" className="sr-only">
            Search by name or email
          </label>
          <input
            id="user-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name or email"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            aria-describedby="user-search-status"
          />
          <p
            id="user-search-status"
            className="mt-1 text-xs text-slate-500"
            aria-live="polite"
          >
            {resultCount} {resultCount === 1 ? "result" : "results"}
          </p>
        </div>
      </div>
    </header>
  );
}
