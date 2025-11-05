import React, { useState } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', { name, email, password });
      localStorage.setItem('kv_token', res.data.token);
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto card">
      <h3 className="text-xl font-semibold mb-4">Welcome to Odisha's Digital Temple of Innovation</h3>
      <form onSubmit={submit} className="space-y-4">
        <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 border rounded" placeholder="Full name" />
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Email" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Password" />
        <label className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Receive promotional mails and updates</label>
        <button className="w-full px-4 py-2 bg-primary text-white rounded">Sign Up</button>
      </form>
      <div className="mt-4 text-sm">Already have an account? <a href="/login" className="text-primary">Log in</a></div>
    </div>
  );
}
