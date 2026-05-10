import Link from 'next/link';
import { Home, FileText, CheckSquare, Layers, BookOpen, Rocket, Map } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-72 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-semibold tracking-tight">RegContest</h1>
        <p className="text-zinc-400 text-sm">Platform</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 text-zinc-100">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/project-plan" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 text-zinc-100">
          <FileText size={20} />
          <span>Project Plan</span>
        </Link>
        <Link href="/checklist" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 text-zinc-100">
          <CheckSquare size={20} />
          <span>Checklist</span>
        </Link>
        <Link href="/architecture" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 text-zinc-100">
          <Layers size={20} />
          <span>Architecture</span>
        </Link>
        <Link href="/references" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 text-zinc-100">
          <BookOpen size={20} />
          <span>References</span>
        </Link>
        <Link href="/demo" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 text-zinc-100">
          <Rocket size={20} />
          <span>Demo</span>
        </Link>
      </nav>
    </div>
  );
}
