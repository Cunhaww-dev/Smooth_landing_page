export default function Logo({ name }: { name: string }) {
  return (
    <div className="shrink-0">
      <div className="flex h-12 w-48 items-center justify-center rounded-2xl border border-white/10 bg-black text-white/70 backdrop-blur">
        <span className="truncate px-4 text-sm font-medium">{name}</span>
      </div>
    </div>
  )
}
