export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-white">Welcome to RegContest Platform</h1>
      <p className="text-zinc-400 mt-4">The central workspace for your M.Tech project on AI Governance and Contestability-by-Construction.</p>
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3 className="font-semibold">Current Phase</h3>
          <p className="text-emerald-400">Phase 6 - Core Implementation</p>
        </div>
      </div>
    </div>
  );
}
