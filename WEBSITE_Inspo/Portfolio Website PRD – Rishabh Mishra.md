# Product Requirements Document: Rishabh Mishra, Data Analyst Portfolio

**Owner:** Rishabh Mishra | **Version:** 1.0 | **Status:** Draft

---

## 1. Overview

A single-page personal portfolio website that presents Rishabh as a Data Analyst (SQL, Power BI, Excel, Python). The layout and visual style follow the "Mrstudio" inspiration design: warm peach hero, orange CTAs, navy typography, floating glass-style cards. All content comes from his resume.

**Problem:** A PDF resume doesn't show dashboards or thinking. Recruiters need to see projects, KPIs and skills in under a minute.

**Solution:** A fast, responsive site that leads with the flagship project, shows dashboards visually, and makes contacting him one click.

## 2. Goals and Success Metrics

| Goal | Metric |
| --- | --- |
| Get shortlisted for Data Analyst roles/internships | Resume downloads, contact clicks |
| Showcase end-to-end skill (SQL → Python → Power BI) | Flagship project case-study views |
| Fast, professional first impression | Lighthouse ≥ 90, load under 2.5s |
| Easy to reach | Visible CTA on every screen |

## 3. Target Users

1. **Recruiters / HR** – scan quickly: role, skills, projects, contact.
2. **Hiring managers / analytics leads** – want depth: methods, KPIs, dashboards, GitHub.
3. **Freelance/referral contacts** – want a clear "work with me" path.

## 4. Scope

**In scope (v1):** Single-page site with Home, About, Skills, Projects, Certifications, Education, Contact. Resume PDF download. Contact form or mailto. Responsive design.

**Out of scope (v1):** Blog, CMS, login, dark mode (v2), multilingual.

## 5. Information Architecture

**Navbar (white rounded card, as in reference):** `Rishabh` logo (left) · Home · About · Projects · Skills · **\[Contact Us → "Contact Me"\]** (orange button, right)

Sections in order: Hero → Tools/Tech strip → About + Stats → Skills (services style) → Projects → Education & Certifications → Contact CTA → Footer.

## 6. Section Requirements

### 6.1 Hero

- **Headline:** "Hi! I'm **Rishabh Mishra**" (large, navy, bold)
- **Subtext:** "Data Analyst turning messy data into decisions that move business metrics. I build SQL → Python → Power BI pipelines, from raw data to interactive dashboards."
- **CTAs:** `View Projects` (orange filled), `Download Resume` (outlined)
- **Right side:** professional photo of Rishabh (cut-out on peach gradient) with floating cards:
  - "Power BI · DAX & Data Modeling"
  - "SQL · PostgreSQL / MySQL"
  - Tool badge circle (Power BI / Python logo) in place of the Shopify badge
- **Decor:** small coloured rings and star shapes as in the reference.
- **Below hero – strip titled "Tools I Work With":** circular white icons for SQL/PostgreSQL, MySQL, Power BI, Excel, Python, Git/GitHub (replaces the brand logo row; do not show company logos he hasn't worked with).

### 6.2 About / "Perfect Solution for Your Data" (two-column, as screenshot 3)

- **Heading:** "Data Analysis That Drives **Decisions**" (first line orange, second navy)
- **Body:** Computer Science undergraduate specializing in data analytics, with hands-on experience building end-to-end pipelines, from raw data in SQL and Python to interactive Power BI dashboards. Skilled in EDA, KPI design, customer segmentation and reporting automation.
- **Left visual:** dark navy card + pastel bar-chart card + white stat card, using real numbers only:
  - "99K+ Orders analyzed" (Olist project)
  - "100K+ Sales records analyzed"
  - "3 Dashboards built" (Sales, HR, E-commerce)
  - "5 Certifications"
- **CTA:** `Download Resume` (orange)

### 6.3 Skills ("My Awesome Skills", stacked cards as in screenshot 2)

Left: vertical stack of 3–5 cards with icon, title, and short text (active card has a peach-gradient border). Right: heading "My Awesome **Skills**" (second word orange) + short paragraph + `Hire Me` button.

| Card | Content |
| --- | --- |
| SQL | MySQL, PostgreSQL, Joins, CTEs, Window Functions, Subqueries, Indexing, Query Optimization |
| Power BI | Power Query, DAX, Star-Schema Modeling, Row-Level Security, Drill-through Reports |
| Excel | Pivot Tables, XLOOKUP, INDEX-MATCH, Power Query, Dashboards, Data Validation |
| Python | Pandas, NumPy, Matplotlib, Seaborn, SciPy |
| Analytics | EDA, Data Cleaning, KPI Analysis, RFM Segmentation, Cohort Analysis, A/B Testing Basics |

Also show a small "Tools" line: Jupyter, Git, GitHub, VS Code.

### 6.4 Projects ("Recent Project", 3 cards, as in screenshot 4)

Centered heading **"Recent Projects"**. Three rounded image cards (dashboard screenshots), hover → lift + overlay with title, tech stack, `View Case Study` and `GitHub` links.

1. **End-to-End E-Commerce Analytics Platform (Flagship)** – PostgreSQL, Python (Pandas), Power BI, DAX, Git
   - Pipeline on the Olist Brazilian E-Commerce dataset (99K+ orders, 9 relational tables): ingestion, cleaning, modeling, dashboarding
   - Star-schema warehouse in PostgreSQL; optimized SQL (CTEs, window functions) for revenue, AOV, delivery-performance KPIs
   - Python ETL notebook with documented data-quality checks
   - RFM segmentation and monthly cohort retention analysis
   - Delivery delay vs. review score analysis with logistics recommendations
   - 3-page Power BI report (Executive Summary, Customer Insights, Operations) with YoY growth, running totals, retention rate in DAX
2. **Sales Performance Analytics Dashboard** – Power BI, SQL, Excel
   - 100,000+ sales records: revenue trends, regional performance, top/bottom categories
   - KPI cards, profit analysis, forecasting; Power Query auto-refresh; DAX for growth, margin, retention
3. **HR Analytics Dashboard** – Power BI, Excel, SQL
   - Attrition, demographics, workforce trends; key drivers (tenure, department, salary band); executive-level workforce planning reports

Each project gets a detail view/modal: problem → data → approach → insights → dashboard screenshots → links.

### 6.5 Education and Certifications

- B.Tech, Computer Science Engineering, RGPV Bhopal (Aug 2024 – Present)
- Class XII CBSE (2024) 76% · Class X CBSE (2022) 81%
- ADCA, STP Computer Education (Feb 2023 – Feb 2024)
- Diploma in Web Development, STP Computer Education (Jan 2022 – Jan 2023)
- Certifications (badge chips): Data Analytics Essentials · SQL for Data Analytics · Power BI Data Visualization · Advanced Excel · Python for Data Science

### 6.6 Contact CTA ("Ready To Get Started?")

- Left: large heading **"Ready To Get Started?"**
- Right: "You know about me, let's talk about you." + `SHOOT MESSAGE` text with orange circle (fix the overlap seen in the reference; the circle must sit beside the text, not over it).
- Details: [rishabhkum34@gmail.com](mailto:rishabhkum34@gmail.com) · +91 95543 19541 · LinkedIn · GitHub
- Form (name, email, message) via Formspree/EmailJS, or `mailto:` as fallback.

### 6.7 Footer

Nav links (Home, About, Projects, Skills) + social icons + "© 2026 Rishabh Mishra".

## 7. Design System (extracted from the inspiration screenshots)

*Colours are visual estimates from the screenshots; confirm with an eyedropper in Figma.*

| Token | Value | Usage |
| --- | --- | --- |
| Primary / Orange | `#D9702F` | Buttons, highlighted heading words, accent circle |
| Navy | `#12204F` | Headings, logo, active nav |
| Deep Navy | `#0F1B2D` | Dark stat card |
| Body Grey | `#6B6F85` | Paragraph text |
| Peach BG | `#FBEDE6` → `#FFFFFF` | Hero gradient |
| Lavender | `#C9A8EA` | Gradient accent bottom-right of hero |
| Pastel accents | `#F08A7A` coral, `#B9A0F0` purple, `#9CC4F5` blue, `#BFE8C8` green | Chart bars, rings, decor |
| White | `#FFFFFF` | Cards, navbar |

**Typography**

- Headings: geometric bold sans (reference looks like Gilroy). Free equivalent: **Outfit** or **Poppins ExtraBold/Bold**.
- Body & UI: **Poppins** Regular/Medium.
- Scale: H1 64–72px, H2 44–52px, H3 24px, body 16–18px, button 16px medium.

**Components:** 12px-radius orange buttons; white cards with 24–32px radius and soft shadow; floating pill cards with icon and two-line text; small decorative rings/star; two-tone headings (orange + navy); gradient border on active skill card.

**Motion:** subtle floating on hero cards, fade-up on scroll, button hover lift. Respect `prefers-reduced-motion`.

## 8. Functional Requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| F1 | Sticky navbar with smooth scroll to sections | Must |
| F2 | Resume PDF download button | Must |
| F3 | Project cards with detail view and GitHub link | Must |
| F4 | Contact form or mailto, with success/error state | Must |
| F5 | Fully responsive (mobile, tablet, desktop); hamburger menu on mobile | Must |
| F6 | Scroll animations | Should |
| F7 | Embedded Power BI report (publish-to-web) or screenshot gallery on flagship project | Should |
| F8 | Dark mode | Could |

## 9. Non-Functional Requirements

- Lighthouse Performance, Accessibility, SEO ≥ 90
- Images in WebP, lazy-loaded; total page weight under 2 MB
- WCAG AA contrast (white text on `#D9702F` is borderline; use bold 16px+ or darken slightly to `#C4601F`)
- SEO: title "Rishabh Mishra | Data Analyst", meta description, Open Graph image
- Analytics: Google Analytics or Plausible

## 10. Suggested Tech Stack

- **Simple:** HTML, CSS (Tailwind), vanilla JS, hosted on Netlify/Vercel/GitHub Pages
- **Modern:** Next.js or React + Tailwind + Framer Motion
- Domain: `rishabhmishra.dev` or similar

## 11. Content Gaps to Fix Before Launch

1. **Resume placeholders:** "top X% of customers drive Y% of revenue", "repeat-purchase rate (Z%)", "late deliveries lower ratings by X points". Replace with real numbers from your analysis; don't publish X/Y/Z.
2. **Dashboard screenshots** for all 3 projects (export from Power BI).
3. **GitHub repo links** for each project (only the flagship has one in the resume).
4. **Professional photo** with clean background.
5. Vague claims like "cutting manual reporting effort significantly": add a number (e.g., "from 3 hrs to 10 mins") if true.
6. Do not copy the reference's fake stats ("566k", "256k projects", "7 years", "Best Design Awards"); they are lorem-ipsum placeholders.

## 12. Milestones

| Phase | Deliverable | Duration |
| --- | --- | --- |
| 1 | Content finalized, screenshots exported | 2–3 days |
| 2 | Figma/wireframe in the reference style | 2–3 days |
| 3 | Build (hero → projects → contact) | 4–5 days |
| 4 | Responsive polish, SEO, performance | 2 days |
| 5 | Deploy, custom domain, add link to resume and LinkedIn | 1 day |

## 13. Open Questions

- Hire-focused (full-time/internship) or also freelance? This changes the CTA copy ("Hire Me" vs "Let's Work Together").
- Embed a live Power BI report or static screenshots?
- Photo available, or use an illustrated avatar instead?