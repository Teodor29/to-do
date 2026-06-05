import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa6'
import { AiOutlineDelete } from 'react-icons/ai'
import { LuClipboardCheck } from 'react-icons/lu'

const ConfirmDialog = ({ onConfirm, onCancel }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    onClick={onCancel}
  >
    <div className="absolute bg-surface border border-border rounded-xl p-5 mx-4 w-full max-w-xs shadow-2xl">
      <p className="mb-4">Do you want to delete all completed todos?</p>
      <div className="flex gap-2 justify-end">
        <button onClick={onCancel} className="btn">
          Cancel
        </button>
        <button onClick={onConfirm} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
)

const Header = () => {
  const location = useLocation()
  const isHistory = location.pathname === '/history'
  const [showConfirm, setShowConfirm] = useState(false)

  const handleConfirm = () => {
    localStorage.removeItem('removedTodos')
    window.location.reload()
  }

  return (
    <>
      {showConfirm && (
        <ConfirmDialog
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      <div className="container text-accent max-w-xl mx-auto items-center justify-between p-4 pb-2 md:pt-8 flex">
        {isHistory ? (
          <>
            <Link
              to="/"
              className="font-semibold hover:text-accent-hover flex items-center gap-2 py-2"
            >
              <FaAngleLeft className="text-xl" />
              To Do List
            </Link>
            <button
              className="btn btn-danger border-none gap-1.5"
              onClick={() => setShowConfirm(true)}
            >
              <AiOutlineDelete />
              Clear
            </button>
          </>
        ) : (
          <>
            <h1 className="font-bold text-2xl md:text-3xl">To Do List</h1>
            <Link
              to="/history"
              className="hover:text-accent-hover text-2xl p-2 flex items-center justify-center"
            >
              <LuClipboardCheck />
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default Header
