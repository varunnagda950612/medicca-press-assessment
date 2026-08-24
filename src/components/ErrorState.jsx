export default function ErrorState({ message }) {
  return (
    <div className="container py-16 text-center" role="alert">
      <p className="font-medium text-red-600">{message}</p>
    </div>
  )
}
