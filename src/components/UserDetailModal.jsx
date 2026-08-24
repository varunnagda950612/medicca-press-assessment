import { useEffect, useRef } from "react";

export default function UserDetailModal({ user, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (user) {
      if (!dialogNode.open) dialogNode.showModal();
    } else if (dialogNode.open) {
      dialogNode.close();
    }
  }, [user]);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    // Fires on Escape as well as our own .close() call, so this keeps
    // parent state (selectedUser) in sync with the dialog's real state.
    function handleClose() {
      onClose();
    }
    dialogNode.addEventListener("close", handleClose);
    return () => dialogNode.removeEventListener("close", handleClose);
  }, [onClose]);

  function handleBackdropClick(event) {
    // A click that lands on the <dialog> element itself (not its content)
    // is a click on the backdrop area.
    if (event.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="user-modal m-auto w-11/12 lg:w-full max-w-lg rounded-xl border-0 bg-transparent p-0"
      onClick={handleBackdropClick}
      aria-labelledby="user-modal-title"
    >
      {user && (
        <div className="modal-content overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="modal-header justify-between border-b border-slate-200 p-4">
            <h2
              id="user-modal-title"
              className="text-lg font-semibold text-slate-900"
            >
              {user.name}
            </h2>
            <button
              type="button"
              className="p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm absolute top-3 right-3"
              aria-label="Close"
              onClick={() => dialogRef.current?.close()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>

          <div className="modal-body space-y-4 p-4 pt-0 text-sm">
            <dl className="grid grid-cols-3 gap-x-3 gap-y-3">
              <dt className="col-span-1 font-medium text-slate-600">
                Email ID:
              </dt>
              <dd className="col-span-2 text-slate-700">{user.email}</dd>

              <dt className="col-span-1 font-medium text-slate-600">Company</dt>
              <dd className="col-span-2 text-slate-700">
                {user.company?.name}
                <span className="block text-xs italic text-slate-400">
                  &ldquo;{user.company?.catchPhrase}&rdquo;
                </span>
              </dd>

              <dt className="col-span-1 font-medium text-slate-600">Address</dt>
              <dd className="col-span-2 text-slate-700">
                {user.address?.suite} {user.address?.street},{" "}
                {user.address?.city} {user.address?.zipcode}
              </dd>

              <dt className="col-span-1 font-medium text-slate-600">Phone</dt>
              <dd className="col-span-2 text-slate-700">{user.phone}</dd>

              <dt className="col-span-1 font-medium text-slate-600">Website</dt>
              <dd className="col-span-2 text-indigo-600">
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {user.website}
                </a>
              </dd>
            </dl>
          </div>

          <div className="modal-footer border-t border-slate-200 p-4">
            <button
              type="button"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              onClick={() => dialogRef.current?.close()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
