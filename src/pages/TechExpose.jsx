import PacketInspector from '../components/PacketInspector'

export default function TechExpose() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-hairline pb-6 space-y-2">
        <div className="text-xs text-cyan font-bold uppercase tracking-widest">// FIELD TEARDOWNS & AUDITS</div>
        <h1 className="text-3xl font-black uppercase text-white">The Tech Exposé & Network Packet Inspector</h1>
        <p className="text-xs text-muted max-w-3xl">
          Zero marketing fluff. Unfiltered network packet captures, hardware teardowns, and exposure of
          corporate data tracking vectors.
        </p>
      </div>

      <PacketInspector />
    </div>
  )
}
