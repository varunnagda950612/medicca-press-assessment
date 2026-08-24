export default function LoadingState() {
  return (
    <div className="container py-16 text-center" role="status">
      <div
        className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-500"
        aria-hidden="true"
      />
      <p className="mt-3 text-sm text-slate-500">Loading users&hellip;</p>
    </div>
  )
}
