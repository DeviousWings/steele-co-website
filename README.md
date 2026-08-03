# steele-co-website

# 🛡️ STEELE CO. // Sovereign Hardware Engin

"If your data lives on their cloud, you don't really own your life."

Steele Co. is an advocacy-driven physical trade enterprise specializing in on-premise secure infrastructure, liquid-cooled SOHO server cabinets, whisper-quiet residential racks, and local network defense.

Commercial trade services exist to provide immediate physical containment against corporate data harvesting while directly funding public legislative reform via The Sovereign Digital Identity and Resource Nationalization Act (SDI Act of 2026).

#📐 Financial & Cryptographic Models

The architecture and financial transition models embedded in this web engine rely on precise mathematical formulations:

1. Cloud Bleed Savings Formula

The multi-year net capital savings $S_{\text{net}}$ over a projection horizon of $N$ years is calculated as:

$$S_{\text{net}} = \left( 12 \times N \times \sum C_{\text{monthly}} \right) - I_{\text{steele}}$$

Where:

$C_{\text{monthly}} = C_{\text{storage}} + C_{\text{SaaS/AI}} + C_{\text{cameras}} + C_{\text{egress}}$ represents the total monthly cloud subscription bleed.

$I_{\text{steele}}$ represents the one-time fixed capital investment for the Steele Co. hardware deployment (e.g., $\$7,800$ for Tier 2 SOHO Vault).

2. Investment Break-Even Timeline

The break-even point in months $M_{\text{breakeven}}$ is determined by:

$$M_{\text{breakeven}} = \left\lceil \frac{I_{\text{steele}}}{\sum C_{\text{monthly}}} \right\rceil$$

3. Blind Homomorphic Containment

Local homomorphic compute sandboxes execute private inferences without network egress following:

$$f(E(\text{Data})) = E(f(\text{Data}))$$

⚡ Quick Deployment (GitHub Pages)

This web engine is engineered as an isolated, high-speed static web application with zero external tracking scripts, zero advertising pixels, and zero third-party telemetry.

Direct Browser Deployment (Single-File)

Copy the contents of index.html.

Commit index.html to the root directory of your GitHub repository.

In GitHub, go to Settings > Pages.

Set Source to Deploy from a branch, choose main branch and / (root).

Click Save. Your site will be live at https://<your-username>.github.io/<repo-name>/.

🛠️ System Architecture & File Structure

steele-co-website/
├── index.html              # Complete Single-File React Engine + Tailwind + Lucide Icons
├── domain_strategy.md      # Dual-Domain Commercial vs. Legislative Strategy
├── robots.txt              # Zero-Tracking Privacy-First Search Indexing Protocol
└── README.md               # Repository Specification & Trade Documentation


🏗️ Web Engine Features

Anti-Cloud Landing Matrix: High-contrast split-screen comparison between on-premise containment and corporate cloud subscription bleed.

Interactive Bill of Materials (BOM) Configurator: Real-time price estimator for Tier 1 (Desk Node), Tier 2 (SOHO Vault), and Tier 3 (Home Core) platforms with live component toggles (UPS, GPUs, liquid loops, acoustic paneling).

The SDI Act Reading Room: Full statutory text reader for Titles I, II, and III of the 2026 bill draft.

Constituent Outreach Generator: Automated letter drafting tool formatting formal legislative briefs for Congressional Representatives.

Network Packet Capture Simulator: Live interactive tool demonstrating raw packet telemetry under unsecure cloud vs. Steele Co. armored firewall conditions.

Cloud Bleed ROI Calculator: Financial comparison tool calculating multi-year cloud savings vs. a one-time fixed rack investment.

📦 Sovereign Infrastructure Tiers

Platform Tier

Chassis Form

Baseline Storage

Target Environment

Base Rate

Tier 1: Sovereign Desk Node

4U Desktop Acoustic

Up to 32TB ZFS

Private Journaling, Local Smart Home

$\$2,450$

Tier 2: Enterprise SOHO Vault

12U/24U Liquid-Cooled

Up to 64TB ZFS

Law Offices, CPAs, Remote Executives

$\$7,800$

Tier 3: Omniscient Home Core

High-Density Rack Array

Up to 128TB ZFS

Estates, Offline AI Vision, 10Gbps LAN

$\$18,500$

📄 Trade Philosophy & Guarantees

Fixed Published Price Sheets: Zero hidden diagnostic retainers or predatory hourly billing loops.

"No Data, No Fee" Guarantee: If we deploy a localized backup or failover array and the system fails to restore during integration testing, execution labor costs are $\$0$.

Root Hardware Ownership: Clients receive $100\%$ administrative root credentials for all firewalls, NAS vaults, and AI containers. Zero master backdoors.

🤖 Radical Transparency Note

🤖 Full Disclosure: This site was built using a mix of AI assistance and my expert web dev skills. Look, I’m just a guy on a budget with very little free time, and every hour saved wrestling with React code at 2 AM is an extra hour I get to spend playing with my kids and hanging out with my family. Hardware is my trade—AI was just my shortcut home for dinner!

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
