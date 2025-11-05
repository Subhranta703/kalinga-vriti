import React, { useState } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('kv_token', res.data.token);
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto card">
      <h3 className="text-xl font-semibold mb-4">Welcome Back</h3>
      <form onSubmit={submit} className="space-y-4">
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Email or Username" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Password" />
        <div className="flex items-center justify-between">
          <label className="text-sm"><input type="checkbox" className="mr-2" /> Remember me</label>
          <a className="text-sm text-primary" href="#">Forgot Password?</a>
        </div>
        <button className="w-full px-4 py-2 bg-primary text-white rounded">Login</button>
      </form>
      <div className="mt-4 text-sm">Or Continue With</div>
      <div className="mt-3 text-sm">Don't have an account? <a href="/signup" className="text-primary">Sign Up Now</a></div>
    </div>
  );
}
