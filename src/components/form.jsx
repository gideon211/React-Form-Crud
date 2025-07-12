import { useState, useEffect } from 'react';

const Form = ({ addUser, editingUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email };
    addUser(newUser);
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-6 transition-all duration-300"
      >
        <h2 className="text-3xl font-semibold text-slate-800 text-center">
          {editingUser ? 'Edit User' : 'Contact Us'}
        </h2>

        <div>
          <label className="block text-sm font-medium text-slate-600">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 shadow-md transition"
        >
          {editingUser ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Form;
