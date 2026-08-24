import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import UserGrid from './components/UserGrid.jsx'
import UserDetailModal from './components/UserDetailModal.jsx'
import LoadingState from './components/LoadingState.jsx'
import ErrorState from './components/ErrorState.jsx'
import { useUsers } from './hooks/useUsers.js'

function App() {
  const { users, isLoading, error } = useUsers()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)

  // Recomputed only when the source list or the search term changes, not
  // on every render (e.g. when the modal opens/closes) - keeps filtering
  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return users

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query),
    )
  }, [users, searchTerm])

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        resultCount={filteredUsers.length}
      />

      <main>
        <section aria-label="User results">
          {isLoading && <LoadingState />}
          {!isLoading && error && <ErrorState message={error} />}
          {!isLoading && !error && (
            <UserGrid users={filteredUsers} onSelectUser={setSelectedUser} />
          )}
        </section>
      </main>

      <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  )
}

export default App
