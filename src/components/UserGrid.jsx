import UserCard from './UserCard.jsx'

/**
 * Structural layout only lives here via Bootstrap's grid classes
 * (container / row / col-*). Everything inside a column (UserCard) is
 * styled with Tailwind.
 */
export default function UserGrid({ users, onSelectUser }) {
  if (users.length === 0) {
    return (
      <div className="container py-16 text-center">
        <p className="text-slate-500">No users match your search.</p>
      </div>
    )
  }

  return (
    <div className="container py-6">
      <div className="row g-4">
        {users.map((user) => (
          <div key={user.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <UserCard user={user} onSelect={onSelectUser} />
          </div>
        ))}
      </div>
    </div>
  )
}
