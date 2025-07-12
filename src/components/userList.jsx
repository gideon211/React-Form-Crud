import React, { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const UserList = ({ users, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const openEditModal = (user) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setOpen(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editingUser) {
      const updatedUser = { ...editingUser, name, email };
      onEdit(updatedUser); // ✅ Make sure this calls App's handler
    }
    setOpen(false);
    setEditingUser(null);
    setName('');
    setEmail('');
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-slate-800">User List</h2>

      {users.length === 0 ? (
        <p className="text-slate-500">No users added yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white p-4 rounded-xl shadow-md border border-slate-200 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-700">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => openEditModal(user)}
                  className="px-3 py-1 rounded-lg text-sm font-medium bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user)}
                  className="px-3 py-1 rounded-lg text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-100 p-2">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                </div>
                <DialogTitle className="text-lg font-semibold text-slate-800">
                  Edit User
                </DialogTitle>
              </div>

              <form onSubmit={handleUpdate} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:ring-indigo-200 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:ring-indigo-200 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
                  >
                    Done
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UserList;
