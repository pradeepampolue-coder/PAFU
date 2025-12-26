
import React from 'react';
import { User, AppView } from '../types';

interface DashboardProps {
  currentUser: User;
  otherUser: User;
  onNavigate: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser, otherUser, onNavigate }) => {
  return (
    <div className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex justify-between items-start">
        <div>
          <h2 className="text-slate-400 text-sm font-light mb-1">Welcome, {currentUser.name}</h2>
          <h1 className="text-3xl font-serif font-bold text-rose-500">Sanctuary</h1>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 rounded-full ${otherUser.isOnline ? 'bg-green-500' : 'bg-slate-600'} shadow-[0_0_8px_rgba(34,197,94,0.4)]`}></span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              {otherUser.name} is {otherUser.isOnline ? 'Here' : 'Away'}
            </span>
          </div>
          <span className="text-[10px] text-slate-500">Last login: {new Date(currentUser.lastLogin).toLocaleTimeString()}</span>
        </div>
      </header>

      <section className="relative h-48 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
        <img 
          src="https://picsum.photos/seed/love/800/400" 
          alt="Shared memory" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <h3 className="text-xl font-serif font-bold text-white mb-1">Our Space</h3>
          <p className="text-slate-300 text-xs italic">"Two hearts, one digital home."</p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => onNavigate('chat')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center group-hover:bg-rose-500/20">
            <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Private Chat</span>
        </button>

        <button 
          onClick={() => onNavigate('location')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Live GPS</span>
        </button>

        <button 
          onClick={() => onNavigate('vault')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/20">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Secret Vault</span>
        </button>

        <button 
          onClick={() => onNavigate('calling')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Video Call</span>
        </button>
      </div>

      <footer className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/50">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Privacy Status</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-xs text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            End-to-end encryption active
          </li>
          <li className="flex items-center gap-3 text-xs text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            No third-party access allowed
          </li>
          <li className="flex items-center gap-3 text-xs text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
            Location sharing is currently OFF
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Dashboard;
