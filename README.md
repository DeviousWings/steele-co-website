# steele-co-website
🛡️ STEELE CO. // Sovereign Hardware Engine

"If your data lives on their cloud, you don't really own your life."

Steele Co. is an advocacy-driven physical trade enterprise specializing in on-premise secure infrastructure, liquid-cooled SOHO server cabinets, whisper-quiet residential racks, and local network defense.

Commercial trade services exist to provide immediate physical containment against corporate data harvesting while directly funding public legislative reform via The Sovereign Digital Identity and Resource Nationalization Act (SDI Act of 2026).

⚡ Quick Deployment (GitHub Pages)

This web engine is engineered as an isolated, high-speed static web application with zero external tracking scripts, zero advertising pixels, and zero third-party telemetry.

Option A: Instant Browser Deployment (Single-File)

Copy the contents of index.html.

Commit index.html to the root directory of your GitHub repository.

In GitHub, go to Settings > Pages.

Set Source to Deploy from a branch, choose main branch and / (root).

Click Save. Your site will be live at https://<your-username>.github.io/<repo-name>/.

🏗️ Web Engine Features

Anti-Cloud Landing Matrix: High-contrast split-screen comparison between on-premise containment and corporate cloud subscription bleed.

Interactive Bill of Materials (BOM) Configurator: Real-time price estimator for 4U Desk Nodes, 12U/24U SOHO Vaults, and Omniscient Home Cores with live component toggles (UPS, GPUs, liquid loops, acoustic paneling).

The SDI Act Reading Room: Full statutory text reader for Titles I, II, and III of the 2026 bill draft.

Constituent Outreach Generator: Automated letter drafting tool formatting formal legislative briefs for Congressional Representatives.

Network Packet Capture Simulator: Live interactive tool demonstrating raw packet telemetry under unsecure cloud vs. Steele Co. armored firewall conditions.

Cloud Bleed ROI Calculator: Financial comparison tool calculating multi-year cloud savings vs. a one-time fixed rack investment.

📄 Trade Philosophy & Guarantees

Fixed Published Price Sheets: Zero hidden diagnostic retainers or predatory hourly billing loops.

"No Data, No Fee" Guarantee: If we deploy a localized backup or failover array and the system fails to restore during integration testing, execution labor costs are $0.

Root Hardware Ownership: Clients receive 100% administrative root credentials for all firewalls, NAS vaults, and AI containers. Zero master backdoors.

🤖 AI Co-Pilot Disclaimer

This platform was built using a combination of hands-on trade skills and AI development tools to save time and keep priorities focused on family and real-world hardware engineering.

📜 License

Distributed under the Open Sovereign Infrastructure License. See LICENSE for details.
steele-co-website/ </br>
├── public/</br>
│   ├── favicon.ico</br>
│   └── robots.txt</br>
├── src/</br>
│   ├── assets/                    # Images, hardware diagrams, branding graphics</br>
│   │   └── server-rack-matrix.svg</br>
│   │</br>
│   ├── components/                # Reusable UI components & modals</br>
│   │   ├── Navbar.jsx             # Top bar, navigation tabs, mobile menu</br>
│   │   ├── Footer.jsx             # Footer with the uplifting AI disclaimer</br>
│   │   ├── TerminalMonitor.jsx    # Simulated "STEELE_DEFENSE_MONITOR" widget</br>
│   │   ├── PacketInspector.jsx    # Interactive packet auditor simulator</br>
│   │   ├── QuoteModal.jsx         # "Secure Space" deployment intake modal</br>
│   │   └── ContractModal.jsx      # "No Data, No Fee" trade code modal</br>
│   │</br>
│   ├── pages/                     # Main view pages</br>
│   │   ├── Home.jsx               # Anti-cloud hero, manifesto & Rossmann code</br>
│   │   ├── SovereignTiers.jsx     # Interactive Configurator, BOM & Tiers</br>
│   │   ├── SdiActVault.jsx        # Bill reading room & Constituent letter builder</br>
│   │   ├── TechExpose.jsx         # Teardowns & Packet audit articles</br>
│   │   └── CloudRoi.jsx           # Financial cloud bleed calculator</br>
│   │</br>
│   ├── data/                      # Hardcoded text, bill statutes & price lists</br>
│   │   ├── tiersData.js           # Baseline hardware BOMs and upgrade pricing</br>
│   │   ├── sdiActText.js          # Full statutory text for Titles I, II, & III</br>
│   │   └── packetLogs.js          # Simulated packet payloads for auditor</br>
│   │</br>
│   ├── styles/                    # Stylesheets and custom CSS variables</br>
│   │   ├── globals.css            # Tailwind directives, color tokens, scrollbars</br>
│   │   └── terminal.css           # Custom terminal glow & matrix effects</br>
│   │</br>
│   ├── App.jsx                    # Root app component (handles active state/tabs)</br>
│   └── main.jsx                   # React entry point</br>
│</br>
├── index.html                     # HTML shell</br>
├── tailwind.config.js             # Tailwind CSS configuration (custom colors)</br>
├── package.json                   # Dependencies (lucide-react, react, etc.)</br>
└── README.md</br>
</br>
