import { images } from "../assets";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiFilament,
  SiExpress,
} from "react-icons/si";
import { FaPhp, FaGolang, FaSquareXTwitter } from "react-icons/fa6";
import { FaNodeJs, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

// Bilingual content note: every long-form field below is `{ id, en }`.
// `en` is the original English copy (already reviewed/shipped); `id` is a
// fresh Indonesian translation of that same text (drafted by Claude, not
// independently fact-checked against the "en" side beyond being a faithful
// translation — skim it once for tone/accuracy). Resolve either with
// `useTranslate()` from `src/i18n/LanguageContext.jsx`, e.g. `t(HERO_CONTENT)`.
export const HERO_CONTENT = {
  id: `Saya seorang Backend Developer yang fokus membangun sistem yang scalable, berperforma tinggi, dan arsitektur backend yang bersih. Di peran saya saat ini, saya menghadirkan 8 project CMS FilamentPHP kustom untuk klien enterprise, membangun CMS LMS internal CBNCloud (terintegrasi SSO dengan Cloudia CRM, melayani 86 karyawan), dan membawa Budget Controller (mini-ERP) dari tahap early-stage hingga rilis produksi. Saya juga mendiagnosis dan menyelesaikan gangguan produksi pada Sistem Notifikasi Sertifikat SSL CBNCloud — memulihkan alert masa berlaku untuk 20+ klien enterprise — lalu memindahkannya ke pipeline GitOps (ArgoCD di OKD) dengan pengamanan CI yang lebih ketat. Saya senang menulis kode yang efisien, menyelesaikan masalah kompleks, dan terus meningkatkan performa sistem.`,
  en: `I’m a Backend Developer focused on building scalable, high-performance systems and clean backend architectures. At my current role, I’ve delivered 8 custom FilamentPHP CMS projects for enterprise clients, built CBNCloud’s internal LMS CMS (SSO-integrated with Cloudia CRM, serving 86 employees), and took the Budget Controller mini-ERP from an early-stage build through to production launch. I also diagnosed and resolved a production outage in CBNCloud’s SSL Certificate Notification System — restoring expiry alerts for 20+ enterprise clients — then re-platformed it onto a GitOps (ArgoCD on OKD) pipeline with hardened CI safeguards. I’m passionate about writing efficient code, solving complex problems, and continuously improving system performance.`,
};

export const ABOUT_TEXT = {
  id: `Backend Developer dengan pengalaman kuat membangun, memelihara, dan mengoptimalkan aplikasi server-side yang scalable dan aman menggunakan PHP, Laravel, dan Go. Di CBNCloud, menghadirkan 8 project CMS FilamentPHP kustom untuk klien di sektor perbankan, hospitality, dan pendidikan/LMS, membangun CMS LMS internal perusahaan (terintegrasi SSO dengan Cloudia CRM, melayani 86 karyawan), dan mengambil alih Budget Controller (mini-ERP) dari tahap early-stage hingga rilis produksi. Juga berkontribusi pada fitur backend Cloudia CRM dan CMS Website CBNCloud. Berpengalaman mendiagnosis dan menyelesaikan insiden produksi — termasuk memulihkan alert masa berlaku sertifikat SSL otomatis untuk 20+ klien enterprise dan memindahkan sistem tersebut ke pipeline GitOps (ArgoCD/OKD) dengan pengamanan CI yang lebih ketat. Juga mendukung klien enterprise eksternal seperti SPPI (LSP), memelihara platform CMS mereka dan turut menghantarkan upgrade sistem Fase 2.`,
  en: `Backend Developer with strong experience building, maintaining, and optimizing scalable and secure server-side applications using PHP, Laravel, and Go. At CBNCloud, delivered 8 custom FilamentPHP CMS projects across banking, hospitality, and education/LMS clients, built the company’s internal LMS CMS (SSO-integrated with Cloudia CRM, serving 86 employees), and took over the Budget Controller mini-ERP from an early-stage build through to production launch. Also contributed backend features to the Cloudia CRM and CBNCloud Website CMS. Experienced in diagnosing and resolving production incidents — including restoring automated SSL certificate expiry alerts for 20+ enterprise clients and re-platforming that system onto a GitOps (ArgoCD/OKD) pipeline with hardened CI safeguards. Also supports external enterprise clients like SPPI (LSP), maintaining their CMS platforms and co-delivering a Phase 2 system upgrade.`,
};

// `role` and `company` are left as plain strings (not translated): job
// titles like "Back End Developer" and company names are conventionally
// kept as-is in Indonesian resumes/portfolios too.
export const EXPERIENCES = [
  {
    year: { id: "Desember 2024 - Sekarang", en: "December 2024 - Present" },
    role: "Back End Developer",
    company: "PT. Cyberindo Mega Persada",
    description: {
      id: "Mendiagnosis dan menyelesaikan gangguan produksi pada Sistem Notifikasi Sertifikat SSL milik CBNCloud, memulihkan alert otomatis masa berlaku sertifikat untuk account manager di 20+ klien enterprise lintas sektor perbankan, asuransi, dan manufaktur, lalu memindahkan deployment-nya ke pipeline GitOps (ArgoCD di OKD) dengan pengamanan CI yang lebih ketat untuk mencegah kejadian serupa terulang. Membangun dan memelihara CMS Learning Management System (LMS) internal dengan integrasi SSO ke Cloudia CRM, melayani 86 karyawan dan mensentralisasi manajemen pelatihan di balik satu login yang aman. Menghadirkan 8 project CMS FilamentPHP kustom untuk klien di sektor perbankan, hospitality, dan pendidikan/LMS. Mengambil alih Budget Controller, mini-ERP internal, dari tahap early-stage dan mengembangkannya hingga rilis produksi. Juga berkontribusi pada fitur backend Cloudia CRM dan CMS Website CBNCloud, serta memelihara dan mengembangkan platform CMS untuk klien enterprise SPPI (LSP), menangani laporan masalah end-to-end dan turut menghantarkan upgrade sistem Fase 2 mereka.",
      en: "Diagnosed and resolved a production outage in CBNCloud's SSL Certificate Notification System, restoring automated expiry alerts to account managers for 20+ enterprise clients across banking, insurance, and manufacturing, then re-platformed its deployment onto a GitOps pipeline (ArgoCD on OKD) with hardened CI safeguards to prevent recurrence. Built and maintained an internal Learning Management System (LMS) CMS with SSO integration to Cloudia CRM, serving 86 employees and centralizing training management behind a single secure login. Delivered 8 custom FilamentPHP CMS projects for clients across banking, hospitality, and education/LMS sectors. Took over Budget Controller, an internal mini-ERP, from an early-stage build and developed it through to production launch. Also contributed backend features to Cloudia CRM and the CBNCloud Website CMS, and maintained and evolved CMS platforms for enterprise client SPPI (LSP), handling reported issues end-to-end and co-delivering its Phase 2 system upgrade.",
    },
  },
  {
    year: { id: "Mei 2024 - Sep 2024", en: "May 2024 - Sep 2024" },
    role: "Full Stack Web Development Bootcamp Student",
    company: "Purwadhika Digital Technology School",
    description: {
      id: "Saya belajar membangun aplikasi web lengkap dari nol. Saya mengembangkan skill front-end menggunakan HTML, CSS, JavaScript, TypeScript, React.js, Next.js, dan Tailwind CSS, sementara di sisi back-end saya menggunakan Node.js, Express.js, MySQL, dan Prisma untuk membuat dan menguji API. Saya juga menggunakan Git dan GitHub untuk version control dan kolaborasi. Di akhir program, saya punya pengalaman langsung dengan seluruh siklus pengembangan dan percaya diri membangun, menguji, dan men-deploy aplikasi full-stack.",
      en: `I
learn to build a complete web applications from scratch. I developed front-end skills using HTML, CSS,
JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS, while on the back end, I worked with
Node.js, Express.js, MySQL, and Prisma to create and test APIs. I also used Git and GitHub for version
control and collaboration. By the end of the program, I had hands-on experience with the full development
lifecycle and was confident in building, testing, and deploying full-stack applications.`,
    },
  },
  {
    year: { id: "Agu 2023 - Nov 2023", en: "Aug 2023 - Nov 2023" },
    role: "Design Engineering Intern",
    company: "PT Innomotics Motors and Solutions",
    description: {
      id: "Memeriksa diagram skematik, memeriksa daftar I/O, memahami logika program, memahami ruang lingkup proyek, mempelajari pemecahan masalah.",
      en: "Check the schematic diagram, Check the I/O list, Understand the logic of a program, Understand the scope of the project, Learn problem-solving",
    },
  },
  {
    year: { id: "Jul 2022 - Agu 2022", en: "Jul 2022 - Aug 2022" },
    role: "Electrical Engineering Intern",
    company: "PT. Graha Usaha Teknik",
    description: {
      id: "Mempelajari proses implementasi proyek mulai dari tahap engineering, dilanjutkan proses pembelian material yang dibutuhkan, pengaturan pengiriman barang untuk dipasang di lokasi kerja (site), prosedur pemasangan peralatan di lapangan (site), hingga proses pengujian sebagaimana tercantum dalam laporan progres kerja.",
      en: "Studying the project implementation process starts with engineering, followed by the process of purchasing the required materials, arranging the delivery of goods to be installed at the work location (site), procedures for installing equipment in the field (site), and subsequent testing as outlined in a work progress report.",
    },
  },
];

export const CONTACT = {
  name: "Sultan Muhammad Dhavi",
  address: "Jakarta, Indonesia",
  phoneNo: "+62 851 7336 5093 ",
  email: "sultanmuhammaddhavi@gmail.com",
};

// Shared by Navbar.jsx and CommandPalette.jsx — single source so the two
// never drift out of sync.
export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/sultan-muhammad-dhavi/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/dhavisiregar",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/dhavisiregar/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://x.com/plagoande",
    icon: FaSquareXTwitter,
    label: "Twitter",
  },
];

// Command palette "Fun Fact" easter egg. These are genuine placeholders, not
// drafted guesses — Claude has no real personal facts about you to fill
// these with responsibly. Replace each one, then delete this comment note.
export const FUN_FACTS = [
  {
    id: "Saya suka musik metal!",
    en: "I like metal music!",
  },
  {
    id: "FREE PALESTINE!",
    en: "FREE PALESTINE!",
  },
];

// These fields render directly in the project detail modal:
//   - longDescription: currently mirrors `description`; expand with more detail if you want.
//   - problemStatement / challenges: drafted (from `description` alone, since
//     there was no first-hand info on these projects) and confirmed accurate
//     by the project owner. Delete the `challenges` field entirely for a
//     project if it doesn't apply.
//   - repoLink: `null` means "no public repo" and the modal hides the GitHub
//     button entirely — set a real URL to show it.
//   - images: array (first item is the card thumbnail); add more entries to
//     enable the carousel in the modal.
//   - status: drives the "Live"/"Offline"/"N/A" badge on the project card.
//     This is manual, not an automated uptime check (see CLAUDE.md) — when a
//     deployed demo goes down, flip its status to "offline" yourself; use
//     "n/a" for projects with no live demo (`link` would be null/absent too
//     in that case) and "live" otherwise.
//   - title / technologies: NOT translated (project names and tech names are
//     proper nouns — same in both languages).
export const PROJECTS = [
  {
    id: 11,
    title: "Budget Controller — Enterprise Budget & Approval System",
    description: {
      id: "Sistem internal untuk merencanakan, melacak, dan menyetujui pengeluaran budget di seluruh divisi perusahaan, yang saya ambil alih dari tahap early-stage dan kembangkan hingga rilis produksi — sebuah micro-frontend (React host + 3 remote via Webpack Module Federation) di atas 5 microservice Go/Echo independen yang berbagi satu database MySQL. Mencakup budgeting per COA/divisi/tahun, alur approval bertingkat untuk Form Request/Cash Advance/Request Special (Manager → GM → Director → Accounting → Finance), serta sinkronisasi langsung dengan Cloudia SSO dan Mekari Jurnal untuk pencatatan akuntansi.",
      en: "An internal system for planning, tracking, and approving company-wide budget spend, which I took over from an early-stage build and developed through to production launch — a micro-frontend (React host + three Module Federation remotes) on top of five independent Go/Echo microservices sharing one MySQL database. Covers budget planning per COA/division/year, multi-stage Form Request/Cash Advance/Request Special approval flows (Manager → GM → Director → Accounting → Finance), and direct sync with Cloudia SSO and Mekari Jurnal for accounting entries.",
    },
    longDescription: {
      id: "Sistem internal untuk merencanakan, melacak, dan menyetujui pengeluaran budget di seluruh divisi perusahaan, yang saya ambil alih dari tahap early-stage dan kembangkan hingga rilis produksi — sebuah micro-frontend (React host + 3 remote via Webpack Module Federation) di atas 5 microservice Go/Echo independen yang berbagi satu database MySQL. Mencakup budgeting per COA/divisi/tahun, alur approval bertingkat untuk Form Request/Cash Advance/Request Special (Manager → GM → Director → Accounting → Finance), serta sinkronisasi langsung dengan Cloudia SSO dan Mekari Jurnal untuk pencatatan akuntansi.",
      en: "An internal system for planning, tracking, and approving company-wide budget spend, which I took over from an early-stage build and developed through to production launch — a micro-frontend (React host + three Module Federation remotes) on top of five independent Go/Echo microservices sharing one MySQL database. Covers budget planning per COA/division/year, multi-stage Form Request/Cash Advance/Request Special approval flows (Manager → GM → Director → Accounting → Finance), and direct sync with Cloudia SSO and Mekari Jurnal for accounting entries.",
    },
    problemStatement: {
      id: "Perencanaan budget, pengajuan pengeluaran, dan approval berjenjang berjalan tanpa satu sistem yang menyatukan semuanya — tidak ada satu sumber data soal sisa budget tiap divisi, tidak ada routing approval otomatis ke Manager/GM/Director yang tepat, dan tidak ada koneksi langsung ke sistem akuntansi perusahaan (Mekari Jurnal) setelah pengajuan disetujui.",
      en: "Budget planning, spend requests, and multi-level approvals ran without a single system tying them together — no shared source of truth for how much each division could still spend, no automatic sign-off routing to the right Manager/GM/Director, and no direct link into the company's accounting system (Mekari Jurnal) once a request was approved.",
    },
    challenges: {
      id: "Saya mengambil alih sistem ini dari tahap early-stage dan harus membawa logika approval-nya sampai siap produksi: apakah suatu divisi butuh sign-off GM/Director — dan di ambang batas nominal berapa — itu flag di data divisi itu sendiri, dan approval Manager/GM bersifat identity-based (persis orang yang ditunjuk Cloudia untuk divisi itu), bukan sekadar role-based, sementara tahap Director/Accounting/Finance tetap role-based — semua itu harus konsisten di 4 aplikasi React terpisah (micro-frontend) dan 5 service Go terpisah, masing-masing memegang bagiannya sendiri dari satu database MySQL yang sama, tanpa duplikasi business rule di tiap modul/service.",
      en: "I inherited this from an early-stage build and had to take its approval logic all the way to production-ready: whether a division needs GM/Director sign-off — and at what amount thresholds — is a flag on the division's own data, and Manager/GM approval is identity-based (the exact person Cloudia designates for that division) rather than just role-based, while Director/Accounting/Finance stages stay role-based — all of that had to stay consistent across four separate React apps (micro-frontend) and five separate Go services, each owning its own slice of one shared MySQL database, without duplicating business rules per module or per service.",
    },
    images: [images["16.webp"]],
    link: null, // internal-only tool, no public URL — see repoLink note below
    status: "n/a",
    repoLink: null, // private company repo (GitLab)
    technologies: ["React", "Golang", "MySQL", "Webpack Module Federation"],
  },
  {
    id: 1,
    title: "CMS Development — Multiple Clients",
    description: {
      id: "Membangun dan menghadirkan sistem manajemen konten (CMS) untuk berbagai klien nyata di berbagai industri menggunakan Laravel & Filament. Setiap CMS memungkinkan tim non-teknis mengelola konten website mereka secara mandiri — tanpa perlu coding. Klien meliputi: Bank INA (perbankan), AAJI (asuransi & LMS korporat), Hotel Osaka PIK 2, Sinabung Hotel, Eastern Hotel (hospitality), CBNCloud (LMS internal), BDR, dan NLIID (company profile).",
      en: "Built and delivered content management systems for multiple real-world clients across various industries using Laravel & Filament. Each CMS empowers non-technical teams to independently manage their website content — no code required. Clients include: Bank INA (banking), AAJI (insurance & corporate LMS), Hotel Osaka PIK 2, Sinabung Hotel, Eastern Hotel, (hospitality), CBNCloud (internal LMS), BDR, and NLIID (company profiles).",
    },
    longDescription: {
      id: "Membangun dan menghadirkan sistem manajemen konten (CMS) untuk berbagai klien nyata di berbagai industri menggunakan Laravel & Filament. Setiap CMS memungkinkan tim non-teknis mengelola konten website mereka secara mandiri — tanpa perlu coding. Klien meliputi: Bank INA (perbankan), AAJI (asuransi & LMS korporat), Hotel Osaka PIK 2, Sinabung Hotel, Eastern Hotel (hospitality), CBNCloud (LMS internal), BDR, dan NLIID (company profile).",
      en: "Built and delivered content management systems for multiple real-world clients across various industries using Laravel & Filament. Each CMS empowers non-technical teams to independently manage their website content — no code required. Clients include: Bank INA (banking), AAJI (insurance & corporate LMS), Hotel Osaka PIK 2, Sinabung Hotel, Eastern Hotel, (hospitality), CBNCloud (internal LMS), BDR, and NLIID (company profiles).",
    },
    problemStatement: {
      id: "Setiap klien bergantung pada developer untuk setiap perubahan konten, tanpa cara bagi staf non-teknis untuk mengelola sendiri website atau konten internal mereka di berbagai kasus penggunaan perbankan, hospitality, dan LMS internal.",
      en: "Each client relied on developers for every content update, with no way for non-technical staff to manage their own website or internal content across banking, hospitality, and internal-LMS use cases.",
    },
    challenges: {
      id: "Setiap klien butuh CMS yang dibentuk sesuai domain berbeda (perbankan, listing hospitality, konten LMS internal) di atas satu fondasi Laravel/Filament yang sama, sehingga admin panel dan struktur permission harus tetap fleksibel per klien tanpa menduplikasi codebase. Integrasi SSO Cloudia CRM milik CBNCloud juga berarti pengguna LMS internal tidak perlu login terpisah.",
      en: "Every client needed a CMS shaped around a different domain (banking, hospitality listings, internal LMS content) on a shared Laravel/Filament foundation, so the admin panel and permission structure had to stay flexible per client without duplicating the codebase. Integrating CBNCloud's Cloudia CRM SSO also meant internal LMS users didn't need a separate login.",
    },
    images: [images["7.webp"]],
    // Client work (banking/hospitality/internal platforms) — no public demo,
    // same as Budget Controller (id: 11).
    link: null,
    status: "n/a",
    repoLink: null,
    technologies: ["Laravel", "FilamentPHP", "PHP", "MySQL"],
  },
  {
    id: 2,
    title: "GrocerGo — Online Grocery Web App",
    description: {
      id: "GrocerGo adalah platform e-commerce grocery full-stack yang sadar lokasi, saya rancang dan bangun sendirian, dari backend, frontend, hingga deployment produksi. Platform ini otomatis mencocokkan pelanggan dengan cabang terdekat untuk stok, harga, dan biaya pengiriman yang akurat, serta punya mesin diskon dan voucher yang fleksibel, pelacakan inventori yang bisa diaudit, dashboard admin berbasis role untuk manajemen pesanan, dan integrasi dengan Midtrans untuk pembayaran, RajaOngkir untuk tarif pengiriman, dan OpenCage untuk geocoding.",
      en: "GrocerGo is a full-stack, location-aware grocery e-commerce platform I designed and built solo, from backend to frontend to production deployment. It automatically matches customers to their nearest branch for accurate stock, pricing, and delivery cost, and includes a flexible discount and voucher engine, auditable inventory tracking, a role-based admin dashboard for order management, and integrations with Midtrans for payments, RajaOngkir for shipping rates, and OpenCage for geocoding.",
    },
    longDescription: {
      id: "GrocerGo adalah platform e-commerce grocery full-stack yang sadar lokasi, saya rancang dan bangun sendirian, dari backend, frontend, hingga deployment produksi. Platform ini otomatis mencocokkan pelanggan dengan cabang terdekat untuk stok, harga, dan biaya pengiriman yang akurat, serta punya mesin diskon dan voucher yang fleksibel, pelacakan inventori yang bisa diaudit, dashboard admin berbasis role untuk manajemen pesanan, dan integrasi dengan Midtrans untuk pembayaran, RajaOngkir untuk tarif pengiriman, dan OpenCage untuk geocoding.",
      en: "GrocerGo is a full-stack, location-aware grocery e-commerce platform I designed and built solo, from backend to frontend to production deployment. It automatically matches customers to their nearest branch for accurate stock, pricing, and delivery cost, and includes a flexible discount and voucher engine, auditable inventory tracking, a role-based admin dashboard for order management, and integrations with Midtrans for payments, RajaOngkir for shipping rates, and OpenCage for geocoding.",
    },
    problemStatement: {
      id: "Penjual grocery dengan banyak cabang tidak bisa jalan pakai template e-commerce satu gudang — pelanggan yang order online tetap butuh stok, harga, dan biaya pengiriman yang benar sesuai cabang fisik mana pun yang benar-benar melayani mereka.",
      en: "A multi-branch grocery seller can't run on a single-warehouse e-commerce template — customers ordering online still need correct stock, pricing, and delivery cost for whichever physical branch actually serves them.",
    },
    challenges: {
      id: "Tantangan utamanya adalah pencocokan cabang berbasis lokasi yang reliable — menentukan cabang mana yang memenuhi pesanan dari lokasi pelanggan (via geocoding OpenCage) dan menjaga stok/harga tetap konsisten per cabang secara real-time — di atas menyambungkan Midtrans (pembayaran), RajaOngkir (tarif pengiriman), dan OpenCage (geocoding) ke dalam satu alur checkout.",
      en: "The core challenge was reliable location-aware branch matching — resolving which branch fulfills an order from the customer's location (via OpenCage geocoding) and keeping stock/pricing consistent per branch in real time — on top of wiring Midtrans (payments), RajaOngkir (shipping rates), and OpenCage (geocoding) into a single checkout flow.",
    },
    images: [images["15.webp"]],
    link: "https://grocergoo.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/online-grocery",
    technologies: ["Next.js", "Golang", "MySQL", "Midtrans"],
  },
  {
    id: 12,
    title: "Eventura — Event Management Platform",
    description: {
      id: "Platform ticketing event full-stack (monorepo Next.js + Go + MySQL): organizer membuat dan mempromosikan event, attendee mencari dan membeli tiket. Mencakup pencarian/filter/pagination, pembayaran via Midtrans Snap, voucher berkuota per event, review & rating pasca-event, sistem referral/poin/kupon, serta dashboard organizer dengan grafik revenue.",
      en: "A full-stack event ticketing platform (Next.js + Go + MySQL monorepo): organizers create and promote events, attendees browse, search, and buy tickets. Includes search/filter/pagination, Midtrans Snap payments, quota-limited per-event vouchers, post-event reviews & ratings, a referral/points/coupon system, and an organizer dashboard with revenue charts.",
    },
    longDescription: {
      id: "Platform ticketing event full-stack (monorepo Next.js + Go + MySQL): organizer membuat dan mempromosikan event, attendee mencari dan membeli tiket. Mencakup pencarian/filter/pagination, pembayaran via Midtrans Snap, voucher berkuota per event, review & rating pasca-event, sistem referral/poin/kupon, serta dashboard organizer dengan grafik revenue. Setiap write multi-baris (registrasi + bonus referral, checkout, cancel, webhook Midtrans, expiry sweep) berjalan dalam satu database transaction dengan row locking (SELECT ... FOR UPDATE) agar seat count, pemakaian voucher/kupon, dan ledger poin tidak drift saat diakses bersamaan.",
      en: "A full-stack event ticketing platform (Next.js + Go + MySQL monorepo): organizers create and promote events, attendees browse, search, and buy tickets. Includes search/filter/pagination, Midtrans Snap payments, quota-limited per-event vouchers, post-event reviews & ratings, a referral/points/coupon system, and an organizer dashboard with revenue charts. Every multi-row write (registration + referral bonus, checkout, cancel, Midtrans webhook, expiry sweep) runs inside a single DB transaction with row locking (SELECT ... FOR UPDATE) so seat counts, voucher/coupon usage, and point ledgers never drift under concurrent requests.",
    },
    problemStatement: {
      id: "Event organizer butuh satu platform untuk membuat dan mempromosikan event, mengelola tiket berbayar maupun gratis, serta memantau penjualan — sementara attendee butuh alur cari, filter, dan checkout tiket yang cepat dan bisa dipercaya, lengkap dengan diskon, poin, dan bukti pembayaran yang jelas.",
      en: "Event organizers needed a single platform to create and promote events, manage both paid and free tickets, and track sales — while attendees needed a fast, trustworthy search-filter-checkout flow, complete with discounts, points, and clear proof of payment.",
    },
    challenges: {
      id: "Tantangan utamanya adalah menjaga konsistensi data di bawah akses bersamaan: kursi/kuota tiket, kuota voucher, dan saldo poin semuanya bisa berubah lewat beberapa jalur berbeda (checkout, cancel, webhook Midtrans, sweeper expiry background) secara bersamaan, jadi semuanya perlu dibungkus dalam DB transaction dengan row locking. Ledger poin sendiri dibuat append-only (baris earn/redeem, saldo dihitung dari total) alih-alih melacak sisa saldo per batch dengan expiry FIFO — trade-off sadar demi kesederhanaan MVP. Auth JWT juga disimpan di cookie non-httpOnly supaya axios client dan Next.js proxy (verifikasi via jose) sama-sama bisa membacanya tanpa server-side proxy di tiap call API.",
      en: "The core challenge was keeping data consistent under concurrent access: ticket seat/quota counts, voucher quotas, and point balances can all change through several different paths at once (checkout, cancel, the Midtrans webhook, a background expiry sweeper), so all of it had to be wrapped in DB transactions with row locking. The point ledger itself is append-only (earn/redeem rows, balance computed from the sum) rather than tracking per-batch remaining balance with FIFO expiry — a deliberate trade-off for MVP simplicity. Auth also keeps the JWT in a non-httpOnly cookie so both the axios client and the Next.js proxy (verified via jose) can read it without a server-side proxy on every API call.",
    },
    images: [images["17.webp"]],
    link: "https://eventuraaa.vercel.app",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/eventura",
    technologies: ["Next.js", "Golang", "MySQL", "Midtrans"],
  },
  {
    id: 3,
    title: "LeadFlow",
    description: {
      id: "Pelacak pipeline sales yang dibangun sesuai Business Requirements Document (BRD) — pipeline Kanban/Table 6 tahap, akses berbasis role untuk Sales/Unit Head/Manager/Data Analyst, dan dashboard analitik read-only untuk role manajerial, lengkap dengan sign-in Google dan dukungan dark mode penuh.",
      en: "A sales pipeline tracker built to a Business Requirements Document — a 6-stage Kanban/Table pipeline, role-based access for Sales/Unit Head/Manager/Data Analyst, and read-only analytics dashboards for the managerial roles, with Google sign-in and full dark mode support.",
    },
    longDescription: {
      id: "Pelacak pipeline sales yang dibangun sesuai Business Requirements Document (BRD) — pipeline Kanban/Table 6 tahap, akses berbasis role untuk Sales/Unit Head/Manager/Data Analyst, dan dashboard analitik read-only untuk role manajerial, lengkap dengan sign-in Google dan dukungan dark mode penuh.",
      en: "A sales pipeline tracker built to a Business Requirements Document — a 6-stage Kanban/Table pipeline, role-based access for Sales/Unit Head/Manager/Data Analyst, and read-only analytics dashboards for the managerial roles, with Google sign-in and full dark mode support.",
    },
    problemStatement: {
      id: "Bisnis butuh satu pipeline sales bersama di mana tiap Sales rep cuma bisa mengelola lead miliknya sendiri, sementara Unit Head, Manager, dan Data Analyst dapat visibilitas read-only yang scope-nya beda-beda — timnya sendiri, semua tim yang mereka awasi, atau seluruh perusahaan — sesuai BRD formal, bukan sekadar konvensi.",
      en: "The business needed a shared sales pipeline where each Sales rep only ever touches their own leads, while Unit Heads, Managers, and a Data Analyst get read-only visibility scoped to their team, every team they oversee, or the whole company — enforced by a formal BRD, not left to convention.",
    },
    challenges: {
      id: "Tantangan utamanya ada di access control: tiap endpoint list harus di-scope di server (bukan cuma disembunyikan di UI) untuk 5 role dengan aturan visibilitas yang benar-benar beda — lead milik sendiri untuk Sales, satu tim untuk Unit Head, beberapa tim untuk Manager, atau seluruh tenant untuk Data Analyst — sambil tetap menjaga deal value selalu dihitung dari line item lead (bukan angka yang diedit terpisah), dan memisahkan stage pipeline dari status Active/On Hold/Won/Lost (Won/Lost butuh alasan dan hilang dari Kanban board tapi tetap terlihat & bisa diedit di Table view).",
      en: "Getting the access control right was the core challenge: every list endpoint needed server-side scoping (not just hidden UI) across five roles with genuinely different visibility rules — one Sales rep's own leads, a Unit Head's team, a Manager's several teams, or the whole tenant for a Data Analyst — while keeping deal value always derived from a lead's line items rather than a separately-edited number, and separating a lead's pipeline stage from its Active/On Hold/Won/Lost status (Won/Lost needs a reason and disappears from the Kanban board while staying visible and editable in the Table view).",
    },
    images: [images["14.png"]],
    link: "https://leadflowww.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/leadflow",
    technologies: ["React.js", "Golang", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "DuitFlow",
    description: {
      id: "DuitFlow adalah aplikasi simpel dan intuitif untuk membantu pengguna melacak pemasukan dan pengeluaran mereka dengan mudah dalam satu tempat, sehingga lebih gampang memahami kebiasaan belanja dan mengelola keuangan pribadi dengan lebih efektif.",
      en: "DuitFlow is a simple and intuitive app to help users easily track their income and expenses in one place, making it easier to understand spending habits and manage personal finances more effectively.",
    },
    longDescription: {
      id: "DuitFlow adalah aplikasi simpel dan intuitif untuk membantu pengguna melacak pemasukan dan pengeluaran mereka dengan mudah dalam satu tempat, sehingga lebih gampang memahami kebiasaan belanja dan mengelola keuangan pribadi dengan lebih efektif.",
      en: "DuitFlow is a simple and intuitive app to help users easily track their income and expenses in one place, making it easier to understand spending habits and manage personal finances more effectively.",
    },
    problemStatement: {
      id: "Banyak orang mencatat pemasukan/pengeluaran pribadi secara manual di catatan atau spreadsheet, sehingga sulit melihat pola belanja atau konsisten mencatat transaksi.",
      en: "Many people track personal income/expenses manually in notes or spreadsheets, which makes it hard to spot spending patterns or stay consistent about logging transactions.",
    },
    challenges: {
      id: "Tantangan desain utamanya adalah membuat input transaksi cukup cepat supaya orang benar-benar mau mencatat secara konsisten, sambil tetap memberikan rincian belanja per kategori yang jelas — menyeimbangkan kesederhanaan dengan struktur yang cukup agar datanya berguna.",
      en: "The main design challenge was keeping transaction entry fast enough that people would actually log consistently, while still giving a clear categorized breakdown of spending — balancing simplicity against enough structure for the data to be useful.",
    },
    images: [images["12.webp"]],
    link: "https://expense-manager-duitflow.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/expense-manager",
    technologies: ["Next.js", "Golang", "PostgreSQL", "Midtrans"],
  },
  {
    id: 5,
    title: "WA Invoice — Invoice & Pembayaran untuk UMKM",
    description: {
      id: "Membangun WA Invoice untuk menyelesaikan masalah pembukuan manual bagi UMKM Indonesia — membuat invoice profesional dalam hitungan detik, langsung dibagikan lewat WhatsApp, dan melacak pembayaran secara real-time. Sudah di-deploy ke produksi dengan model monetisasi freemium.",
      en: "Built WA Invoice to solve manual bookkeeping for Indonesian small businesses — create professional invoices in seconds, share directly via WhatsApp, and track payments in real-time. Deployed to production with a freemium monetization model.",
    },
    longDescription: {
      id: "Membangun WA Invoice untuk menyelesaikan masalah pembukuan manual bagi UMKM Indonesia — membuat invoice profesional dalam hitungan detik, langsung dibagikan lewat WhatsApp, dan melacak pembayaran secara real-time. Sudah di-deploy ke produksi dengan model monetisasi freemium.",
      en: "Built WA Invoice to solve manual bookkeeping for Indonesian small businesses — create professional invoices in seconds, share directly via WhatsApp, and track payments in real-time. Deployed to production with a freemium monetization model.",
    },
    problemStatement: {
      id: "Banyak UMKM di Indonesia masih menulis invoice secara manual atau dari template spreadsheet generik — lambat, rawan salah, dan susah dilacak begitu sudah dikirim ke pelanggan lewat WhatsApp.",
      en: "Many Indonesian small businesses (UMKM) still write invoices manually or from generic spreadsheet templates — slow, error-prone, and awkward to track once it's been sent to a customer over WhatsApp.",
    },
    challenges: {
      id: "Tantangan utamanya adalah merancang alur invoicing yang cukup cepat agar sesuai cara penjual berkomunikasi (langsung dibagikan ke WhatsApp), membangun pelacakan status pembayaran real-time, dan membatasi fitur di balik model freemium tanpa membuat tier gratisnya terasa tidak berguna.",
      en: "The main challenges were designing an invoicing flow fast enough to fit how sellers already communicate (share straight to WhatsApp), building real-time payment status tracking, and gating features behind a freemium model without making the free tier feel unusable.",
    },
    images: [images["11.webp"]],
    link: "https://wa-invoice.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/wa-invoice",
    technologies: ["Next.js", "Golang", "PostgreSQL", "Supabase"],
  },
  {
    id: 6,
    title: "Redline Gokart Web",
    description: {
      id: "Membangun website bisnis go-kart yang responsif, menampilkan paket balap, informasi fasilitas, dan form booking dengan UI/UX modern.",
      en: "Built a responsive go-kart business website featuring race packages, facility information, and booking inquiries with a modern UI/UX.",
    },
    longDescription: {
      id: "Membangun website bisnis go-kart yang responsif, menampilkan paket balap, informasi fasilitas, dan form booking dengan UI/UX modern.",
      en: "Built a responsive go-kart business website featuring race packages, facility information, and booking inquiries with a modern UI/UX.",
    },
    problemStatement: {
      id: "Bisnis go-kart ini butuh kehadiran online di mana calon pelanggan bisa melihat paket balap, info fasilitas, dan mengajukan booking, alih-alih hanya mengandalkan walk-in atau tanya-tanya manual lewat telepon/WhatsApp.",
      en: "The go-kart business needed an online presence where potential customers could see race packages, facility info, and make booking inquiries, instead of relying on walk-ins or manual phone/WhatsApp inquiries.",
    },
    challenges: {
      id: "Fokus utamanya adalah menerjemahkan struktur paket/harga bisnis ini ke dalam layout yang jelas dan responsif serta alur booking-inquiry yang tetap enak dipakai di mobile, karena kebanyakan inquiry kemungkinan dimulai dari pelanggan yang browsing lewat HP.",
      en: "The main focus was translating the business's package/pricing structure into a clear, responsive layout and booking-inquiry flow that holds up well on mobile, since most inquiries likely start from customers browsing on their phones.",
    },
    images: [images["13.webp"]],
    link: "https://redlinegokart.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/frontend-redline",
    technologies: ["React.js", "Tailwind CSS", "Javascript"],
  },
  {
    id: 7,
    title: "Split It",
    description: {
      id: "Aplikasi web bill-splitting pintar yang pakai AI vision untuk scan struk dan otomatis mengekstrak item, pajak, dan service charge — lalu membagi total per orang dan membagikan rinciannya lewat WhatsApp.",
      en: "A smart bill-splitting web app that uses AI vision to scan receipts and automatically extract items, tax, and service charge — then splits the total per person and shares the breakdown via WhatsApp.",
    },
    longDescription: {
      id: "Aplikasi web bill-splitting pintar yang pakai AI vision untuk scan struk dan otomatis mengekstrak item, pajak, dan service charge — lalu membagi total per orang dan membagikan rinciannya lewat WhatsApp.",
      en: "A smart bill-splitting web app that uses AI vision to scan receipts and automatically extract items, tax, and service charge — then splits the total per person and shares the breakdown via WhatsApp.",
    },
    problemStatement: {
      id: "Membagi bill restoran secara adil di antara teman itu ribet kalau dihitung manual, apalagi setelah ditambah pajak dan service charge — orang sering cuma nebak atau membulatkan angkanya.",
      en: "Splitting a restaurant bill fairly among friends is tedious to do by hand, especially once tax and service charge are added — people often just guess or round the numbers.",
    },
    challenges: {
      id: "Tantangan utamanya adalah membuat AI vision scan struk cukup akurat di berbagai format struk dan kualitas foto untuk mengekstrak item, pajak, dan service charge secara reliable, lalu membagi proporsi pajak/service charge itu kembali secara benar ke bagian masing-masing orang.",
      en: "The core challenge was getting AI vision receipt-scanning accurate enough across different receipt formats and photo quality to reliably extract line items, tax, and service charge, then correctly proportioning tax/service charge back across each person's share.",
    },
    images: [images["9.webp"]],
    link: "https://split-bill-snowy.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/split-bill",
    technologies: ["React.js", "GROQ AI", "Tailwind"],
  },
  {
    id: 8,
    title: "Masak Apa?",
    description: {
      id: "Masak Apa? memungkinkan kamu memasukkan bahan yang ada di rumah dan langsung menemukan resep Indonesia yang cocok — lengkap dengan persentase kecocokan, bahan yang kurang, dan instruksi memasak langkah demi langkah.",
      en: "Masak Apa? lets you input ingredients you have at home and instantly finds matching Indonesian recipes — with match percentage, missing ingredients, and step-by-step cooking instructions.",
    },
    longDescription: {
      id: "Masak Apa? memungkinkan kamu memasukkan bahan yang ada di rumah dan langsung menemukan resep Indonesia yang cocok — lengkap dengan persentase kecocokan, bahan yang kurang, dan instruksi memasak langkah demi langkah.",
      en: "Masak Apa? lets you input ingredients you have at home and instantly finds matching Indonesian recipes — with match percentage, missing ingredients, and step-by-step cooking instructions.",
    },
    problemStatement: {
      id: "Orang sering punya bahan makanan acak di rumah dan tidak tahu bisa masak apa dari situ, yang akhirnya sering berujung pada makanan terbuang atau selalu masak menu yang itu-itu saja.",
      en: "People often have a random set of ingredients at home and don't know what they can actually cook with them, which tends to lead to food waste or defaulting to the same few meals.",
    },
    challenges: {
      id: "Tantangan utamanya adalah mengurutkan resep berdasarkan seberapa cocok resep itu dengan bahan yang benar-benar dimiliki seseorang (bukan sekadar pencarian keyword biasa), sambil menampilkan bahan yang kurang dengan cukup jelas agar persentase kecocokannya terasa bisa dipercaya.",
      en: "The main challenge was ranking recipes by how well they actually fit the ingredients someone has on hand (rather than plain keyword search), while surfacing missing ingredients clearly enough that the match percentage feels trustworthy.",
    },
    images: [images["2.webp"]],
    link: "https://maumasak.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/masak-apa",
    technologies: ["React.js", "Golang", "GROQ AI", "MySQL"],
  },
  {
    id: 9,
    title: "Calorie Scanner",
    description: {
      id: "Pernah penasaran berapa kalori di sepiring nasi goreng itu? Tinggal foto, langsung ketahuan. Calorie Scanner pakai AI untuk langsung mengestimasi info nutrisi makanan apa pun — tanpa perlu catat manual, tanpa nebak-nebak.",
      en: "Ever wondered how many calories are in that plate of nasi goreng? Just snap a photo and find out. Calorie Scanner uses AI to instantly estimate the nutrition info of any food — no manual logging, no guessing.",
    },
    longDescription: {
      id: "Pernah penasaran berapa kalori di sepiring nasi goreng itu? Tinggal foto, langsung ketahuan. Calorie Scanner pakai AI untuk langsung mengestimasi info nutrisi makanan apa pun — tanpa perlu catat manual, tanpa nebak-nebak.",
      en: "Ever wondered how many calories are in that plate of nasi goreng? Just snap a photo and find out. Calorie Scanner uses AI to instantly estimate the nutrition info of any food — no manual logging, no guessing.",
    },
    problemStatement: {
      id: "Mencatat kalori tiap makanan secara manual di aplikasi food-tracking itu cukup melelahkan sampai kebanyakan orang menyerah cuma dalam hitungan hari.",
      en: "Manually logging every meal's calories in a food-tracking app is tedious enough that most people give up on it within days.",
    },
    challenges: {
      id: "Tantangan utamanya adalah membuat estimasi kalori/nutrisi berbasis AI cukup berguna hanya dari satu foto makanan, meski ada variasi besar dalam ukuran porsi, penataan, dan pencahayaan — sekaligus jujur bahwa ini estimasi, bukan pengukuran setingkat lab.",
      en: "The main challenge was getting AI-based calorie/nutrition estimates to be reasonably useful from a single food photo despite big variation in portion size, plating, and lighting — and being upfront that it's an estimate rather than a lab-grade measurement.",
    },
    images: [images["10.webp"]],
    link: "https://caloriescanner.vercel.app/",
    status: "live",
    repoLink: "https://github.com/dhavisiregar/calorie-scanner",
    technologies: ["React.js", "GROQ AI", "Tailwind"],
  },
  {
    id: 10,
    title: "Company Website",
    description: {
      id: "Helvete Records, berdiri sejak 1991, adalah label rekaman sekaligus destinasi ritel terkemuka yang berdedikasi menghadirkan pengalaman musik metal paling intens dan otentik.",
      en: "Helvete Records, established in 1991, is a premier record label and retail destination dedicated to delivering the most intense and authentic metal music experience.",
    },
    longDescription: {
      id: "Helvete Records, berdiri sejak 1991, adalah label rekaman sekaligus destinasi ritel terkemuka yang berdedikasi menghadirkan pengalaman musik metal paling intens dan otentik.",
      en: "Helvete Records, established in 1991, is a premier record label and retail destination dedicated to delivering the most intense and authentic metal music experience.",
    },
    problemStatement: {
      id: "Helvete Records butuh kehadiran web yang mencerminkan identitas brand/genre mereka untuk mempromosikan katalog dan bisnis ritelnya, alih-alih hanya mengandalkan media sosial atau visibilitas di toko fisik.",
      en: "Helvete Records needed a web presence that reflected their brand/genre identity to promote their catalog and retail business, rather than relying solely on social media or in-store visibility.",
    },
    challenges: {
      id: "Fokus utamanya adalah mendesain situs yang sesuai identitas brand metal/label rekaman, sambil tetap cepat dan mudah dinavigasi untuk menjelajahi katalog dan info toko.",
      en: "The main focus was designing a site that fit the metal/record-label brand identity while keeping it fast and easy to navigate for browsing the catalog and store info.",
    },
    images: [images["1.webp"]],
    link: "https://cc2-jcwd2804-dhavi.vercel.app/",
    status: "live",
    repoLink: null,
    technologies: ["Next.js", "Tailwind", "TypeScript"],
  },
];

export const TECH_STACK = {
  frontend: [
    { icon: RiReactjsLine, name: "React", color: "text-[#60dcfc]" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-fg" },
    { icon: IoLogoJavascript, name: "JavaScript", color: "text-[#F0DB4F]" },
    { icon: SiTypescript, name: "TypeScript", color: "text-[#3178c6]" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-[#06b6d4]" },
    { icon: SiFilament, name: "Filament", color: "text-fg" },
  ],
  backend: [
    { icon: FaGolang, name: "Go", color: "text-[#00ADD8]" },
    { icon: SiExpress, name: "Express", color: "text-fg" },
    { icon: FaNodeJs, name: "Node.js", color: "text-[#7aa736]" },
    { icon: FaPhp, name: "PHP", color: "text-[#777BB4]" },
    { icon: SiTypescript, name: "TypeScript", color: "text-[#3178c6]" },
  ],
  database: [
    { icon: TbBrandMysql, name: "MySQL", color: "text-[#00608c]" },
    { icon: SiPrisma, name: "Prisma", color: "text-fg" },
    { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-[#3a6c95]" },
  ],
};

// UI chrome strings (nav labels, buttons, form copy, aria-labels) — not
// content data, but needs the same { id, en } treatment to fully switch
// language. "Tech Stack", tech/category names, and proper nouns are
// deliberately left untranslated (common as-is loanwords in Indonesian dev
// contexts, or literal names that don't change between languages).
export const UI_TEXT = {
  skipToContent: {
    id: "Langsung ke konten utama",
    en: "Skip to main content",
  },
  nav: {
    about: { id: "Tentang Saya", en: "About Me" },
    technologies: { id: "Teknologi", en: "Technologies" },
    experience: { id: "Pengalaman", en: "Experience" },
    projects: { id: "Proyek", en: "Projects" },
    contact: { id: "Kontak Saya", en: "Contact Me" },
    scrollToAria: {
      id: (label) => `Gulir ke ${label}`,
      en: (label) => `Scroll to ${label}`,
    },
    openMenu: { id: "Buka menu", en: "Open menu" },
    closeMenu: { id: "Tutup menu", en: "Close menu" },
    visitProfileAria: {
      id: (label) => `Kunjungi profil ${label} saya`,
      en: (label) => `Visit my ${label} profile`,
    },
    scrollToTopAria: { id: "Gulir ke atas", en: "Scroll to top" },
    languageToggleAria: { id: "Ganti bahasa", en: "Switch language" },
    themeToggleAria: {
      id: (mode) => `Ganti ke mode ${mode}`,
      en: (mode) => `Switch to ${mode} mode`,
    },
    themeDark: { id: "gelap", en: "dark" },
    themeLight: { id: "terang", en: "light" },
  },
  hero: {
    viewProjects: { id: "Lihat Proyek", en: "View Projects" },
    downloadCV: { id: "Unduh CV", en: "Download CV" },
    downloadCVAria: {
      id: "Unduh CV dalam format PDF",
      en: "Download CV as PDF",
    },
  },
  about: {
    heading: { id: "Tentang", en: "About" },
    headingHighlight: { id: "Saya", en: "Me" },
  },
  experience: {
    heading: { id: "Pengalaman", en: "Experience" },
  },
  projects: {
    heading: { id: "Karya Pilihan", en: "Selected Work" },
    viewDetailsAria: {
      id: (title) => `Lihat detail proyek ${title}`,
      en: (title) => `View details for ${title}`,
    },
    currentRoleBadge: { id: "Peran saat ini", en: "Current role" },
    statusLive: { id: "Aktif", en: "Live" },
    statusOffline: { id: "Nonaktif", en: "Offline" },
    statusNA: { id: "N/A", en: "N/A" },
  },
  modal: {
    closeAria: { id: "Tutup detail proyek", en: "Close project details" },
    screenshotAlt: { id: "tangkapan layar", en: "screenshot" },
    prevScreenshotAria: {
      id: "Screenshot sebelumnya",
      en: "Previous screenshot",
    },
    nextScreenshotAria: { id: "Screenshot berikutnya", en: "Next screenshot" },
    goToScreenshotAria: {
      id: (n) => `Ke screenshot ${n}`,
      en: (n) => `Go to screenshot ${n}`,
    },
    problem: { id: "Masalah", en: "Problem" },
    challenges: { id: "Tantangan & Keputusan", en: "Challenges & Decisions" },
    techStack: { id: "Tech Stack", en: "Tech Stack" },
    liveDemo: { id: "Demo Langsung", en: "Live Demo" },
    githubRepo: { id: "Repo GitHub", en: "GitHub Repo" },
    repoNotPublic: { id: "Repo tidak publik", en: "Repo not public" },
    noLiveDemo: {
      id: "Tool internal — tidak di-deploy publik",
      en: "Internal tool — not publicly deployed",
    },
  },
  contact: {
    heading: { id: "Hubungi", en: "Get In" },
    headingHighlight: { id: "Saya", en: "Touch" },
    infoTitle: { id: "Informasi Kontak", en: "Contact Information" },
    formTitle: { id: "Kirim pesan untuk saya", en: "Send me a message" },
    nameLabel: { id: "Nama", en: "Name" },
    namePlaceholder: { id: "Nama Anda", en: "Your name" },
    emailLabel: { id: "Email", en: "Email" },
    emailPlaceholder: { id: "Email Anda", en: "Your email" },
    messageLabel: { id: "Pesan", en: "Message" },
    messagePlaceholder: { id: "Pesan Anda", en: "Your message" },
    sending: { id: "Mengirim...", en: "Sending..." },
    send: { id: "Kirim Pesan", en: "Send Message" },
    successMsg: {
      id: "Pesan berhasil terkirim!",
      en: "Message sent successfully!",
    },
    errorMsg: {
      id: "Gagal mengirim pesan. Silakan coba lagi.",
      en: "Failed to send message. Please try again.",
    },
  },
  commandPalette: {
    openAria: { id: "Buka command palette", en: "Open command palette" },
    dialogLabel: { id: "Command palette", en: "Command palette" },
    placeholder: {
      id: "Ketik perintah atau cari...",
      en: "Type a command or search...",
    },
    empty: { id: "Tidak ada hasil.", en: "No results found." },
    groupNavigate: { id: "Navigasi", en: "Navigate" },
    groupConnect: { id: "Hubungi", en: "Connect" },
    groupSettings: { id: "Pengaturan", en: "Settings" },
    emailItem: { id: "Kirim Email", en: "Send Email" },
    toggleLanguageItem: {
      id: "Ganti Bahasa (ID/EN)",
      en: "Toggle Language (ID/EN)",
    },
    toggleThemeItem: {
      id: "Ganti Mode Gelap/Terang",
      en: "Toggle Dark/Light Mode",
    },
    partyMode: { id: "🎉 Mode Pesta", en: "🎉 Party Mode" },
    funFact: { id: "✨ Fakta Menarik", en: "✨ Fun Fact" },
    dismiss: { id: "Tutup", en: "Dismiss" },
  },
  // Landmark aria-labels for the top-level <section>s in App.jsx.
  sections: {
    about: { id: "Tentang Saya", en: "About Me" },
    technologies: { id: "Teknologi", en: "Technologies" },
    experience: { id: "Pengalaman", en: "Experience" },
    projects: { id: "Proyek", en: "Projects" },
    contact: { id: "Kontak", en: "Contact" },
  },
};
