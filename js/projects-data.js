/**
 * ==============================================================================
 * PROJECTS DATA & COMPONENT RENDER ENGINE
 * Single Source of Truth for Project Cards, Modals, and Screenshot Galleries
 * ==============================================================================
 */

const projectsData = [
    {
        id: "zarf",
        modalId: "zarfModal",
        title: "Zarf — Expense Suite",
        modalTitle: "Zarf — Enterprise B2B SaaS Expense Platform",
        category: "flutter fullstack production",
        categoryBadge: "Flutter Production + MERN",
        roleBadge: "Architect & Lead Full Stack Engineer",
        proof: {
            type: "image",
            isWeb: true,
            label: "Enterprise B2B Expense SaaS",
            previewAlt: "Zarf expense dashboard preview",
            previewAvif: "documents/screenshots/zarf/Admin_dashboard_preview.avif",
            previewWebp: "documents/screenshots/zarf/Admin_dashboard_preview.webp",
            previewJpeg: "documents/screenshots/zarf/Admin_dashboard_preview.jpeg",
            width: 800,
            height: 430
        },
        cardDescription: "Problem: B2B expense tracking is slow and lacks GCC/UAE compliance (VAT, TRN). Solution: A three-tier ecosystem with a Flutter mobile client (receipt scanning), React dashboard (admin audit & analytics), and Express API (hardened, llama AI receipt OCR).",
        cardImpact: "Impact: Instant AI receipt parsing under 2s, Stateful Shell tab caching (0ms lag), and regional TRN/VAT compliance checks.",
        metrics: [
            "AI OCR < 2s",
            "UAE TRN/VAT Check",
            "Stateful Tab Cache"
        ],
        tags: [
            "Flutter",
            "React",
            "Node.js",
            "MongoDB",
            "Riverpod",
            "Groq llama",
            "FCM"
        ],
        overview: "A multi-tier enterprise expense ecosystem built for businesses across the UAE and GCC. Features a native Flutter mobile client for receipt scanning, a responsive React admin dashboard for financial audits, and a hardened Node.js/Express backend with automated VAT compliance and AI-driven receipt OCR.",
        highlights: [
            "<strong>Flutter Mobile Architecture:</strong> Stateful shell navigation with zero-lag tab caching, multi-currency conversion, and offline receipt queueing.",
            "<strong>AI Receipt OCR:</strong> Sub-2s extraction of vendor, total, line items, and TRN numbers powered by Groq llama vision models.",
            "<strong>GCC/UAE Compliance Engine:</strong> Automated 5% standard VAT computation, TRN tax number validation, and audit-ready CSV/PDF export pipelines.",
            "<strong>React Admin Web Portal:</strong> Real-time role-based access control (RBAC), multi-level approval hierarchies, and spend analytics dashboards.",
            "<strong>Secure Backend Services:</strong> JWT session authentication, rate-limiting, and encrypted cloud storage for receipt attachments."
        ],
        links: {
            github: "https://github.com/r6rizwan/Zarf",
            demo: "https://zarf-cyan.vercel.app/"
        },
        galleryId: "zarf",
        screenshots: [
            { avif: "documents/screenshots/zarf/mobile_01.avif", webp: "documents/screenshots/zarf/mobile_01.webp", alt: "Zarf Mobile Screens" },
            { avif: "documents/screenshots/zarf/mobile_02.avif", webp: "documents/screenshots/zarf/mobile_02.webp", alt: "Zarf Mobile Screens" },
            { avif: "documents/screenshots/zarf/Admin_dashboard.avif", webp: "documents/screenshots/zarf/Admin_dashboard.webp", alt: "Zarf Admin Dashboard" },
            { avif: "documents/screenshots/zarf/Expenses.avif", webp: "documents/screenshots/zarf/Expenses.webp", alt: "Zarf Expenses View" },
            { avif: "documents/screenshots/zarf/Employees.avif", webp: "documents/screenshots/zarf/Employees.webp", alt: "Zarf Employees View" },
            { avif: "documents/screenshots/zarf/VAT_settings.avif", webp: "documents/screenshots/zarf/VAT_settings.webp", alt: "Zarf VAT Settings" }
        ]
    },
    {
        id: "raha",
        modalId: "rahaModal",
        title: "Raha — Expat Food & Services",
        modalTitle: "Raha — Expat Food & Services App",
        category: "flutter fullstack production",
        categoryBadge: "Flutter Production + Node.js + AI",
        roleBadge: "Lead Mobile Architect",
        proof: {
            type: "image",
            isWeb: false,
            label: "GCC expat food & services app",
            previewAlt: "Raha bilingual mobile app preview",
            previewAvif: "documents/screenshots/raha/raha_Home_EN_AR_preview.avif",
            previewWebp: "documents/screenshots/raha/raha_Home_EN_AR_preview.webp",
            previewJpeg: "documents/screenshots/raha/raha_Home_EN_AR_preview.jpeg",
            width: 800,
            height: 533
        },
        cardDescription: "Problem: GCC expats face friction with un-localized food & services apps. Solution: An AI-assisted, bilingual (Arabic/English) Flutter application with dynamic RTL switching, voice ordering, and Google Gemini integration.",
        cardImpact: "Impact: Instant AR/EN locale switching, sub-second AI meal recommendations, and native-feeling Android/iOS service workflows.",
        metrics: [
            "Bilingual RTL",
            "Gemini AI Assistant",
            "Dual Engine"
        ],
        tags: [
            "Flutter",
            "Dart",
            "Node.js",
            "Express",
            "MongoDB",
            "Riverpod",
            "Google Gemini AI",
            "JWT",
            "RTL"
        ],
        overview: "A production-grade cross-platform mobile application designed for expatriate communities across the GCC. Bridges language and localization barriers with seamless bilingual (Arabic/English) interfaces, bidirectional RTL layout mirroring, and conversational AI food discovery.",
        highlights: [
            "<strong>Bilingual & RTL Architecture:</strong> Complete Arabic and English localization with real-time UI mirroring and zero text clipping.",
            "<strong>Conversational AI Assistant:</strong> Integrated Google Gemini AI for contextual meal suggestions, dietary filters, and voice prompt handling.",
            "<strong>State Management:</strong> Clean Riverpod state architecture ensuring immediate UI updates and resilient offline caching.",
            "<strong>Multi-Service Booking:</strong> Unified workflow for food delivery, home maintenance scheduling, and maid service dispatch.",
            "<strong>Backend Microservices:</strong> High-throughput Express API with JWT auth, MongoDB indexing, and background keep-warm automation."
        ],
        links: {
            github: "https://github.com/r6rizwan/Raha"
        },
        galleryId: "raha",
        screenshots: [
            { avif: "documents/screenshots/raha/raha_login_EN_AR.avif", webp: "documents/screenshots/raha/raha_login_EN_AR.webp", alt: "Raha Login Screens" },
            { avif: "documents/screenshots/raha/raha_Home_EN_AR.avif", webp: "documents/screenshots/raha/raha_Home_EN_AR.webp", alt: "Raha Home Screens" },
            { avif: "documents/screenshots/raha/raha_food_services.avif", webp: "documents/screenshots/raha/raha_food_services.webp", alt: "Raha Food and Services Screens" },
            { avif: "documents/screenshots/raha/raha_bookings_EN_AR.avif", webp: "documents/screenshots/raha/raha_bookings_EN_AR.webp", alt: "Raha Bookings Screens" },
            { avif: "documents/screenshots/raha/raha_settings_EN_AR.avif", webp: "documents/screenshots/raha/raha_settings_EN_AR.webp", alt: "Raha Settings Screens" }
        ]
    },
    {
        id: "ironvault",
        modalId: "vaultModal",
        title: "IronVault",
        modalTitle: "IronVault",
        category: "flutter production",
        categoryBadge: "Flutter Security",
        roleBadge: "Lead Flutter Engineer",
        proof: {
            type: "image",
            isWeb: false,
            label: "Offline-first secure vault",
            previewAlt: "IronVault secure mobile dashboard preview",
            previewAvif: "documents/screenshots/ironvault/ironvault_dashboard_preview.avif",
            previewWebp: "documents/screenshots/ironvault/ironvault_dashboard_preview.webp",
            previewJpeg: "documents/screenshots/ironvault/ironvault_dashboard_preview.jpeg",
            width: 800,
            height: 533
        },
        cardDescription: "Problem: Password managers require cloud sync, raising privacy concerns. Solution: A 100% offline-first password and credential vault with AES-256 GCM encryption, Argon2id key derivation, and biometric authentication.",
        cardImpact: "Impact: 0 network requests, military-grade client encryption, and seamless local SQLite storage with biometric auth.",
        metrics: [
            "100% Offline",
            "AES-256 GCM",
            "Argon2id KDF"
        ],
        tags: [
            "Flutter",
            "Dart",
            "Riverpod",
            "SQLite (sqflite)",
            "Cryptography (AES-GCM)",
            "Local Auth",
            "Biometrics"
        ],
        overview: "A zero-knowledge, offline-first mobile password manager engineered with defense-in-depth cryptography. Designed for privacy-conscious users requiring secure credential storage with zero external network connectivity.",
        highlights: [
            "<strong>Zero-Knowledge Cryptography:</strong> Client-side AES-256 GCM authenticated encryption with unique per-record initialization vectors.",
            "<strong>Key Derivation Function:</strong> Argon2id memory-hard master key derivation preventing brute-force and dictionary attacks.",
            "<strong>Biometric Integration:</strong> Fingerprint and Face Unlock support with secure hardware keychain fallback.",
            "<strong>Local SQLite Storage:</strong> Encrypted SQLite database layer via sqflite with automated encrypted backup/restore exports.",
            "<strong>Zero-Network Guarantee:</strong> Built with zero internet permissions in the Android/iOS manifest, ensuring total air-gapped data sovereignty."
        ],
        links: {
            github: "https://github.com/r6rizwan/IronVault"
        },
        galleryId: "ironvault",
        screenshots: [
            { avif: "documents/screenshots/ironvault/ironvault_login.avif", webp: "documents/screenshots/ironvault/ironvault_login.webp", alt: "IronVault Welcome Screen" },
            { avif: "documents/screenshots/ironvault/ironvault_dashboard.avif", webp: "documents/screenshots/ironvault/ironvault_dashboard.webp", alt: "IronVault Vault Dashboard" },
            { avif: "documents/screenshots/ironvault/ironvault_password_list.avif", webp: "documents/screenshots/ironvault/ironvault_password_list.webp", alt: "IronVault Password List" },
            { avif: "documents/screenshots/ironvault/ironvault_password_health.avif", webp: "documents/screenshots/ironvault/ironvault_password_health.webp", alt: "IronVault Password Health Analytics" },
            { avif: "documents/screenshots/ironvault/ironvault_add_edit_item.avif", webp: "documents/screenshots/ironvault/ironvault_add_edit_item.webp", alt: "IronVault Add or Edit item" },
            { avif: "documents/screenshots/ironvault/ironvault_settings.avif", webp: "documents/screenshots/ironvault/ironvault_settings.webp", alt: "IronVault Settings" }
        ]
    },
    {
        id: "mpd",
        modalId: "mpdModal",
        title: "MPD - CA Service App",
        modalTitle: "MPD",
        category: "flutter production",
        categoryBadge: "Flutter Production",
        roleBadge: "Flutter Developer",
        proof: {
            type: "icon",
            iconClass: "fa-solid fa-briefcase",
            label: "Flutter service workflow"
        },
        cardDescription: "Production mobile app built for a Chartered Accountancy firm, turning daily client-CA requests, document submissions, service status tracking, and advisor coordination into a structured mobile workflow.",
        cardImpact: "Delivered 3 release cycles with reliable push notifications and Firebase integration.",
        metrics: [
            "Production App",
            "3 Release Cycles",
            "Push Notifications"
        ],
        tags: [
            "Flutter",
            "Dart",
            "REST API",
            "Firebase",
            "Provider",
            "Push Notifications"
        ],
        overview: "A production mobile service portal built for a Chartered Accountancy firm. Replaces unstructured phone calls and message chains with an organized ticketing, document tracking, and tax advisory coordination mobile app.",
        highlights: [
            "<strong>Daily Service Management:</strong> Structured client request workflows for GST filing, audit requests, and company registrations.",
            "<strong>Push Notification Hub:</strong> Automated alerts for document deadlines, status transitions, and pending client approvals.",
            "<strong>Document Upload Pipeline:</strong> Secure mobile document scanning and transmission with PDF preview capabilities.",
            "<strong>Provider State Architecture:</strong> Reactive UI synchronization ensuring snappy navigation across service catalogs.",
            "<strong>Production Release Management:</strong> Delivered 3 successful production updates on the Google Play Store."
        ],
        links: {},
        galleryId: null,
        screenshots: []
    },
    {
        id: "tickit",
        modalId: "tickitModal",
        title: "TickIt - Ticket Management",
        modalTitle: "TickIt",
        category: "flutter production",
        categoryBadge: "Flutter Production",
        roleBadge: "Lead Flutter Developer",
        proof: {
            type: "icon",
            iconClass: "fa-solid fa-ticket",
            label: "Role-based ticket flows"
        },
        cardDescription: "Production-ready ticket management mobile application developed at Softinfo Technologies. Designed to handle role-based ticket lifecycle operations for multi-team field service support.",
        cardImpact: "Built with Flutter and Riverpod, delivering real-time status updates, push notifications, and production-tested operational screens.",
        metrics: [
            "Live on Play Store",
            "Role-Based Access",
            "REST & FCM"
        ],
        tags: [
            "Flutter",
            "Dart",
            "Riverpod",
            "REST API",
            "Firebase",
            "FCM",
            "Clean Architecture"
        ],
        overview: "A production ticket management and customer support mobile app published on Google Play. Empowers field engineers and support teams with real-time issue assignment, resolution workflows, and client sign-off tracking.",
        highlights: [
            "<strong>Role-Based Access Control:</strong> Distinct user flows and permission scopes for Customers, Support Agents, Field Technicians, and Admins.",
            "<strong>Real-Time Ticket Lifecycle:</strong> Instant status transitions from Open -> Assigned -> In-Progress -> Resolved with automated timestamps.",
            "<strong>Push Alert Notification:</strong> Integrated Firebase Cloud Messaging (FCM) for critical SLA breach warnings and ticket assignments.",
            "<strong>Clean Architecture & Riverpod:</strong> Decoupled repository layer with dependency injection for robust enterprise testing and maintainability.",
            "<strong>Production Play Store Deployment:</strong> Shipped to live enterprise clients with robust error logging and telemetry."
        ],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.softinfo.tickit"
        },
        galleryId: null,
        screenshots: []
    },
    {
        id: "wizapp",
        modalId: "wizappModal",
        title: "WizApp - Inventory System",
        modalTitle: "WizApp",
        category: "flutter production",
        categoryBadge: "Flutter Production",
        roleBadge: "Lead Mobile Developer",
        proof: {
            type: "icon",
            iconClass: "fa-solid fa-boxes-stacked",
            label: "Retail operations mobile app"
        },
        cardDescription: "Production retail and warehouse inventory management app built for enterprise clients. Connects warehouse floor workers with backend inventory management systems for real-time stock operations.",
        cardImpact: "Live on Google Play with camera barcode scanning, offline caching, and instant stock synchronization.",
        metrics: [
            "Live on Play Store",
            "Barcode Scanner",
            "Offline Cache"
        ],
        tags: [
            "Flutter",
            "Dart",
            "Bloc / Cubit",
            "REST API",
            "Barcode Scanner",
            "Hive Storage"
        ],
        overview: "A warehouse and retail operations mobile app published on the Google Play Store. Replaces manual paper counting with instant barcode scanning, real-time SKU lookups, and offline stock reconciliation.",
        highlights: [
            "<strong>High-Speed Barcode Scanning:</strong> Integrated camera-based 1D/2D barcode reader with vibration feedback and multi-item batch scanning.",
            "<strong>Offline Resilience with Hive:</strong> Fast local key-value caching using Hive, allowing warehouse inventory audits in zero-connectivity dead zones.",
            "<strong>Bloc State Management:</strong> Predictable state transitions handling complex stock transfer, return, and write-off mutations.",
            "<strong>Backend Inventory Sync:</strong> Optimized REST API payloads with background retry queues for dependable ERP synchronization.",
            "<strong>Enterprise Play Store Release:</strong> Actively deployed across retail branch locations for daily stock checks."
        ],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.softinfo.mobile_wizapp"
        },
        galleryId: null,
        screenshots: []
    },
    {
        id: "ecom",
        modalId: "ecomModal",
        title: "ShopSphere - E-Commerce Platform",
        modalTitle: "ShopSphere - E-Commerce Platform",
        category: "fullstack",
        categoryBadge: "Full-Stack",
        roleBadge: "Full Stack Developer",
        proof: {
            type: "icon",
            iconClass: "fa-solid fa-cart-shopping",
            label: "MERN commerce workflow"
        },
        cardDescription: "Full-stack e-commerce web application with product catalog management, shopping cart, customer checkout, user authentication, and an administrative order dashboard.",
        cardImpact: "Built with React, Node.js, Express, and MongoDB, demonstrating end-to-end full-stack capabilities.",
        metrics: [
            "Full-Stack MERN",
            "JWT Auth",
            "Admin Dashboard"
        ],
        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux",
            "Bootstrap 5"
        ],
        overview: "A comprehensive MERN stack e-commerce web platform featuring dynamic product filtering, cart management, secure checkout workflows, and an administrative control panel.",
        highlights: [
            "<strong>Complete Commerce Lifecycle:</strong> Dynamic product discovery, category filtering, persistent shopping cart, and mock payment gateway integration.",
            "<strong>Administrative CMS Dashboard:</strong> Dedicated admin views for managing product inventory, updating prices, and tracking customer orders.",
            "<strong>JWT Authentication:</strong> Secure token-based session handling with bcrypt password hashing and protected API route middlewares.",
            "<strong>Redux State Store:</strong> Centralized client-side state handling for shopping cart items, active user profiles, and checkout steps.",
            "<strong>Responsive Storefront:</strong> Fully responsive interface optimized for mobile, tablet, and desktop browser viewports."
        ],
        links: {
            github: "https://github.com/r6rizwan/ShopSphere-Ecommerce-Website"
        },
        galleryId: null,
        screenshots: []
    },
    {
        id: "crimeReporting",
        modalId: "crimeReportingModal",
        title: "CivilEye - Crime Reporting Portal",
        modalTitle: "CivilEye - Crime Reporting Portal",
        category: "fullstack",
        categoryBadge: "MERN + AI",
        roleBadge: "Full Stack Developer & AI Lead",
        proof: {
            type: "icon",
            iconClass: "fa-solid fa-user-shield",
            label: "MERN + AI triage"
        },
        cardDescription: "Citizen safety and crime incident reporting web platform featuring anonymous submission flows, automated emergency service routing, and AI-assisted triage.",
        cardImpact: "Combines React and Node.js with Gemini AI integration to categorize and prioritize incident reports.",
        metrics: [
            "MERN Stack",
            "Gemini AI Triage",
            "Anonymous Flow"
        ],
        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Google Gemini AI",
            "REST API"
        ],
        overview: "A civic safety and emergency reporting web application. Allows citizens to submit verified or anonymous incident reports with multimedia evidence, while empowering law enforcement with automated AI triage and severity classification.",
        highlights: [
            "<strong>AI Incident Triage:</strong> Integrated Google Gemini AI to analyze report descriptions, auto-classify crime categories, and score emergency severity.",
            "<strong>Anonymous Reporting:</strong> Privacy-preserving citizen reporting flow with optional media uploads and location coordinate tagging.",
            "<strong>Law Enforcement Dashboard:</strong> Filterable incident feeds, map markers, status updates (Under Investigation, Resolved), and officer dispatch logs.",
            "<strong>RESTful API Architecture:</strong> Structured Express.js backend with MongoDB schemas for incidents, users, and audit records.",
            "<strong>Evidence Media Pipeline:</strong> Cloud-backed evidence upload handling for incident photos and documents."
        ],
        links: {
            github: "https://github.com/r6rizwan/CivilEye"
        },
        galleryId: null,
        screenshots: []
    }
];

/**
 * Screenshot Gallery Map derived directly from projectsData (Single Source of Truth)
 */
const screenshotGalleryMap = projectsData.reduce((acc, proj) => {
    if (proj.galleryId && proj.screenshots && proj.screenshots.length > 0) {
        acc[proj.galleryId] = proj.screenshots;
    }
    return acc;
}, {});

/**
 * Render Project Cards into #projectGrid
 */
function renderProjectCards(containerId = 'projectGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const cardsHtml = projectsData.map(project => {
        let proofHtml = '';
        if (project.proof.type === 'image') {
            const webClass = project.proof.isWeb ? ' project-proof--web' : '';
            proofHtml = `
                <div class="project-proof project-proof--image${webClass}">
                    <picture>
                        <source srcset="${project.proof.previewAvif}" type="image/avif">
                        <source srcset="${project.proof.previewWebp}" type="image/webp">
                        <img src="${project.proof.previewJpeg}"
                            alt="${project.proof.previewAlt}"
                            width="${project.proof.width}"
                            height="${project.proof.height}"
                            loading="lazy"
                            decoding="async">
                    </picture>
                    <span>${project.proof.label}</span>
                </div>`;
        } else {
            proofHtml = `
                <div class="project-proof project-proof--icon">
                    <i class="${project.proof.iconClass}" aria-hidden="true"></i>
                    <span>${project.proof.label}</span>
                </div>`;
        }

        const metricsHtml = project.metrics.map(m => `<span>${m}</span>`).join('');
        const tagsHtml = project.tags.map(t => `<span>${t}</span>`).join('');

        return `
            <div class="col-6 col-md-6 col-lg-4 project-item reveal" data-category="${project.category}">
                <button type="button" class="portfolio-card project-card-custom" data-bs-toggle="modal"
                    data-bs-target="#${project.modalId}">
                    ${proofHtml}
                    <div class="project-content">
                        <div class="project-top">
                            <span class="badge-cat">${project.categoryBadge}</span>
                            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                        </div>
                        <h3>${project.title}</h3>
                        <p>${project.cardDescription}</p>
                        <p class="project-impact">${project.cardImpact}</p>
                        <div class="project-metrics">
                            ${metricsHtml}
                        </div>
                        <div class="project-tags-container">
                            ${tagsHtml}
                        </div>
                    </div>
                </button>
            </div>`;
    }).join('\n');

    container.innerHTML = cardsHtml;
}

/**
 * Render Project Modals into #projectModalsContainer
 */
function renderProjectModals(containerId = 'projectModalsContainer') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const modalsHtml = projectsData.map(project => {
        const highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join('');
        const tagsHtml = project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

        let galleryBtnHtml = '';
        if (project.galleryId && project.screenshots.length > 0) {
            galleryBtnHtml = `
                <div class="mt-4 mb-2">
                    <button type="button" class="btn btn-primary-custom btn-sm project-screenshots-btn"
                        data-gallery="${project.galleryId}">
                        <i class="fa-solid fa-images me-2" aria-hidden="true"></i>View Project Screenshots (${project.screenshots.length})
                    </button>
                </div>`;
        }

        let linksHtml = '';
        if (project.links.github) {
            linksHtml += `
                <a href="${project.links.github}" target="_blank" rel="noopener"
                    class="btn btn-primary-custom btn-sm px-4">
                    View on GitHub
                </a>`;
        }
        if (project.links.demo) {
            linksHtml += `
                <a href="${project.links.demo}" target="_blank" rel="noopener"
                    class="btn btn-outline-custom btn-sm px-4">
                    Live Demo
                </a>`;
        }
        if (project.links.playStore) {
            linksHtml += `
                <a href="${project.links.playStore}" target="_blank" rel="noopener"
                    class="btn btn-primary-custom btn-sm px-4">
                    View on Play Store
                </a>`;
        }

        return `
            <div class="modal fade" id="${project.modalId}" tabindex="-1" aria-labelledby="${project.modalId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl-custom">
                    <div class="modal-content border-0 shadow-lg">
                        <div class="modal-header border-0 pb-0 justify-content-between align-items-center gap-3">
                            <div>
                                <h2 class="fw-800 text-primary mb-1 modal-title" id="${project.modalId}Label">${project.modalTitle}</h2>
                                <div class="d-flex flex-wrap gap-2 pt-1">
                                    <span class="badge-role">${project.roleBadge}</span>
                                    <span class="badge-cat">${project.categoryBadge}</span>
                                </div>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body pt-3">
                            <div class="row gy-4">
                                <div class="col-lg-7">
                                    <div class="mb-4">
                                        <p class="section-eyebrow text-primary fw-bold text-uppercase mb-2">Project Overview</p>
                                        <p class="text-secondary">${project.overview}</p>
                                    </div>
                                    <div class="mb-3">
                                        <p class="section-eyebrow text-primary fw-bold text-uppercase mb-2">Technical Architecture & Highlights</p>
                                        <ul class="modal-list">
                                            ${highlightsHtml}
                                        </ul>
                                    </div>
                                    ${galleryBtnHtml}
                                </div>

                                <div class="col-lg-5">
                                    <div class="modal-sidebar p-3 rounded">
                                        <p class="section-eyebrow text-primary fw-bold text-uppercase mb-2">Tech Stack</p>
                                        <div class="d-flex flex-wrap gap-2 mb-4">
                                            ${tagsHtml}
                                        </div>
                                        <p class="section-eyebrow text-primary fw-bold text-uppercase mb-2">Key Metrics</p>
                                        <ul class="modal-list">
                                            ${project.metrics.map(m => `<li>${m}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer border-0">
                            ${linksHtml}
                            <button type="button" class="btn btn-outline-custom btn-sm px-4"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join('\n');

    container.innerHTML = modalsHtml;
}
