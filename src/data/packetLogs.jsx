export const TERMINAL_INITIAL_LOGS = [
  { id: 1, type: 'cyan', text: 'STEELE_CO Local Firewall Engine v4.12 initialized.' },
  { id: 2, type: 'success', text: 'On-premise NAS vault mounted on 10Gbps isolated VLAN.' },
  { id: 3, type: 'warning', text: 'BLOCKED: Smart TV attempted outbound telemetry sync to [vendor-ad-tracker.cloud].' },
  { id: 4, type: 'cyan', text: 'Local LLM Inference Sandbox ready. Zero cloud network egress detected.' },
  { id: 5, type: 'info', text: 'AES-256 local cryptographic key exchange verified.' },
  { id: 6, type: 'warning', text: 'BLOCKED: Outbound diagnostics probe from smart thermostat [DROPPED].' },
  { id: 7, type: 'success', text: 'Zero-Trust Pipe vs. Payload enforcement active.' },
]

export const TERMINAL_ROTATING_LOGS = [
  'CYAN_LOG: Encrypted backup verification complete (0 errors, 100% data integrity).',
  'LOCAL_CORE: Homomorphic compute sandbox processed 14 encrypted packets locally.',
  'BLOCKED: Cloud Ring doorbell attempt to upload unencrypted stream packet.',
  'IDENTITY_VAULT: Zero-Cloud proximity handshake verified.',
  'BLOCKED: Unauthorized telemetry ping from office printer [CONTAINED].',
  'LOCAL_AI: Private vector database re-indexed successfully.',
  'NETWORK_AUDIT: Clean local VLAN boundary active (0 unauthorized egress routes).',
  'BLOCKED: Voice assistant attempting outbound audio sample upload [DENIED].',
  'SECURITY: Local offline snapshot taken at /mnt/sovereign/snapshots/daily_01.',
  'ZERO_CLOUD: Proximity handshake check passed for mobile ignition key.',
]

export const PACKET_LOGS = {
  cloud: [
    { id: 1, time: '12:04:11', device: 'Smart TV', dest: 'ad-collector.samsung.cloud', payload: 'Keystroke & Audio Fingerprint', status: 'TRANSMITTED', color: 'text-alert' },
    { id: 2, time: '12:04:12', device: 'Cloud Doorbell', dest: 's3-video-bucket.aws.com', payload: 'Unencrypted 1080p Stream', status: 'TRANSMITTED', color: 'text-alert' },
    { id: 3, time: '12:04:14', device: 'Smart Vacuum', dest: 'telemetry.robot.io', payload: 'Floorplan Spatial Map JSON', status: 'TRANSMITTED', color: 'text-alert' },
    { id: 4, time: '12:04:18', device: 'Voice Assistant', dest: 'audio-listen.cloud.net', payload: 'Ambient Audio Sample', status: 'TRANSMITTED', color: 'text-alert' },
  ],
  steele: [
    { id: 1, time: '12:04:11', device: 'Smart TV', dest: 'ad-collector.samsung.cloud', payload: 'Keystroke & Audio Fingerprint', status: 'DROP (CONTAINED)', color: 'text-emerald' },
    { id: 2, time: '12:04:12', device: 'Cloud Doorbell', dest: 's3-video-bucket.aws.com', payload: 'Local NAS Vault Sync Only', status: 'LOCAL LAN ONLY', color: 'text-cyan' },
    { id: 3, time: '12:04:14', device: 'Smart Vacuum', dest: 'telemetry.robot.io', payload: 'Spatial Map Saved Locally', status: 'DROP (CONTAINED)', color: 'text-emerald' },
    { id: 4, time: '12:04:18', device: 'Voice Assistant', dest: 'audio-listen.cloud.net', payload: 'Local Voice AI Engine', status: 'LOCAL LAN ONLY', color: 'text-cyan' },
  ],
}
