You are an expert senior frontend developer and UI/UX designer.

Generate a **complete, production-ready Next.js landing page** for a company called "TawfiqTech" that provides **AI automation services to businesses**.

Brand Identity:
- Theme: Black (#0b0b0b) + Gold (#d4af37), hover gold (#f5d76e)
- Feel: Futuristic, premium, trustworthy, high-tech
- Font: Inter (sans-serif)
- Target: Businesses looking to automate workflows, save money, and reduce redundancies
- CTA Focus: Book consultation, choose service packages (AI Assistant, AI Chatbot, AI Receptionist, Calendar Automations)

---

### Requirements:

1. **Next.js 14 App Router** structure
2. **Tailwind CSS** with custom black-and-gold theme
3. **Framer Motion** animations for cards, buttons, and floating elements
4. **Components** should be modular and reusable
5. Fully **mobile-first responsive**
6. Accessible HTML (ARIA labels for buttons, forms)

---

### **Sections / Components**

**Navbar.tsx**
- Fixed navbar, scroll-aware
- Links: Home, Services, How We Work, Pricing, Consultation

**Hero.tsx**
- Headline: "We Automate Your Business with AI"
- Subheadline: "Reducing redundancies, saving money, and boosting productivity."
- CTA Buttons: "Book a Consultation" and "See Our Packages"
- Animated AI particle or glowing network background

**Services.tsx**
- Cards for:
  - AI Assistant
  - AI Chatbot
  - AI Receptionist
  - Calendar & Scheduling Automations
- Each card: icon, description, gold hover glow

**HowItWorks.tsx**
- 3-step process:
  1. Consultation & Needs Assessment
  2. Tailored AI Workflow Design
  3. Implementation & Support
- Animated connecting lines

**Benefits.tsx**
- 4 cards highlighting:
  - Reduce Redundancies
  - Save Money
  - Increase Productivity
  - Seamless AI Integration
- Hover gold glow

**Testimonials.tsx**
- Carousel or grid with 3 client testimonials
- Each: name, company, result-focused text

**Pricing.tsx**
- 3-tier pricing cards: Starter, Growth, Enterprise
- Each card: features list, price, "Book Consultation" button
- Highlight Growth plan in gold

**ConsultationForm.tsx**
- Form fields: Name, Business Name, Email, Phone
- Dropdown: select AI package
- Submit button with gold hover glow

**FAQ.tsx** (optional)
- Accordion style with common questions and answers

**Footer.tsx**
- Company info
- Links: About, Services, Contact
- Social icons: LinkedIn, Twitter, Instagram
- Newsletter subscription form

---

### **Tailwind Config & Styles**

- `tailwind.config.ts`:
  - Black background: #0b0b0b
  - Gold accent: #d4af37, hover: #f5d76e
  - Floating animation keyframes
  - Font: Inter
  - Glow effects for buttons and cards
- `globals.css`:
  - Apply black background, white text globally
  - `.text-gold`, `.bg-gold`, `.hover:bg-gold`, `.glow-gold`, `.float` classes
  - Scrollbar customization

---

### **Output**

- Full Next.js folder structure with **all components included**
- `page.tsx` assembling all sections
- Tailwind styles pre-applied
- Buttons, cards, hover effects, and floating animations implemented
- Placeholder text, icons, and images ready to replace
- Clean, production-ready, modular React + TypeScript code

---

Focus on **AI automation services**, **consultation CTAs**, **service packages**, and **premium black-and-gold tech styling**. Do not include a workflow-building platform — this is **implementation services only**.
