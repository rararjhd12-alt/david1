
import React from 'react';
import { 
  ShoppingBag, 
  ChevronDown, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckSquare, 
  Flame,
  Heart,
  Users,
  CircleDollarSign,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Facebook,
  Instagram,
  Youtube,
  BookOpen
} from 'lucide-react';

// --- Custom SVGs for platforms not in basic Lucide ---
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// --- Constants ---

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScZ_eVISerCUNG_fhV1zmMZRmTl3jedWn42_ey_S_wdP69MOw/viewform?usp=header";
const LOGO_URL = "https://i.postimg.cc/FsTHHCvG/1cba87bb-a409-459f-a19b-06a8351bac9d.png";
const BG_IMAGE = "https://i.postimg.cc/Pxrc6yL0/df8f256e-edfd-4df6-b600-d92617dbdc5a.png";

// --- Sub-components ---

const Navbar: React.FC = () => (
  <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-black/60 to-transparent">
    <div className="flex items-center">
      <img 
        src={LOGO_URL} 
        alt="Kingdom Family School Logo" 
        className="h-12"
      />
    </div>
    <div className="hidden md:flex items-center space-x-8 text-white text-sm font-light">
      <a href="#" className="hover:text-gray-300">Products</a>
      <a href="#" className="hover:text-gray-300">Services</a>
      <a href="#" className="hover:text-gray-300">About</a>
      <a href="#" className="hover:text-gray-300">Community</a>
      <a href="#" className="hover:text-gray-300">Login</a>
      <ShoppingBag className="w-5 h-5 cursor-pointer" />
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={BG_IMAGE} 
        alt="Kingdom Family School Background" 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    {/* Content Overlay */}
    <div className="relative z-10 container mx-auto px-4 pt-20 flex flex-col items-start lg:items-start text-left lg:ml-20">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
          KINGDOM <br />
          <span className="text-red-600">FAMILY</span> <br />
          SCHOOL
        </h1>
        
        <div className="mt-8 bg-white inline-block px-8 py-4 rounded-xl shadow-xl">
          <p className="text-red-700 text-2xl md:text-2xl font-bold italic text-center leading-tight">
            A 6-month foundational training <br />
            Once a week – Saturday <br />
            9:30 – 11:30 PM Burundi/Rwanda time
          </p>
        </div>

        <div className="mt-12 max-w-2xl">
          <div className="text-white text-lg md:text-xl font-light italic leading-relaxed space-y-4 drop-shadow-lg">
            <p>
              English: <br />
              Through skillful and godly wisdom a house, a life, a home and a family is built…
            </p>
            <p>
              Local language: <br />
              UBWENGE BUVA KU MANA DATA UKO BWUBAKA URUGO RURIMWO UMUTIMA W’UBWAMI
            </p>
          </div>
          <p className="text-white text-2xl font-semibold mt-4 drop-shadow-lg">Proverbs 24–34</p>
        </div>
      </div>

      {/* Floating secondary logo in hero */}
      <div className="absolute top-0 right-0 m-8 hidden lg:block h-20 w-auto opacity-80">
        <img 
          src={LOGO_URL} 
          alt="Kingdom Family School Logo Small" 
          className="h-full object-contain"
        />
      </div>

      {/* Enrollment Button Bottom Right */}
      <div className="absolute bottom-12 right-12 md:right-24 flex flex-col items-center gap-4">
        <a 
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-4 border-white text-white text-3xl font-black px-10 py-3 rounded-2xl hover:bg-white/10 transition-colors uppercase text-center inline-block backdrop-blur-sm"
        >
          Enroll Now
        </a>
        <ChevronDown className="text-white w-10 h-10 animate-bounce" />
      </div>
    </div>
  </section>
);

const Introduction: React.FC = () => (
  <section className="bg-black text-white py-24 px-4 text-center">
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold italic uppercase tracking-wide">BUILDING KINGDOM FAMILIES BY GOD’S DESIGN</h2>
      
      <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-gray-300">
        <p>
          Over the years, generation after generation, family has been the greatest test of human leadership. Culture has taught us to build families on ethnicity, tribe, clan, religion, social expectations, emotional attraction, and family pressure.
        </p>
        <p>
          While these may influence family life, society has missed a greater truth:
        </p>
        <div className="inline-block text-left mx-auto space-y-1">
          <p>— Family is not built on feelings, but on revelation over emotion.</p>
          <p>— Responsibility over convenience.</p>
          <p>— Purpose over preference — calling over culture.</p>
          <p>— Covenant over comfort.</p>
          <p>— Legacy over the moment.</p>
          <p>— Truth over tradition.</p>
        </div>
        <p>
          Many families suffer today not because people desire broken homes, but because they were never grounded in foundational Kingdom truths before forming families. As a result, many grew up in broken homes with few healthy role models.
        </p>
        <p className="font-semibold italic text-white">
          Kingdom Family School exists to close this gap.
        </p>
        <p>
          It is a foundational class that establishes right doctrine, reveals God’s blueprint for family, sharpens emotional intelligence, imparts basic financial wisdom, and unveils the spiritual relationship between Christ and the Church — while offering practical Kingdom principles for everyday family life.
        </p>
        <p className="font-bold text-white text-xl">
          This is where spiritual truth meets everyday family life.
        </p>
      </div>
    </div>
  </section>
);

const DetailsSection: React.FC = () => (
  <section className="bg-white py-20 px-4 text-center border-b border-gray-100">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-black text-red-700 uppercase italic mb-10 tracking-wide serif">Details:</h2>
      
      <div className="space-y-4 mb-16 inline-flex flex-col items-start text-left mx-auto">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="font-semibold">🗓 Starts: Saturday, February 14th, 2026</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-gray-400" />
          <span className="font-semibold">🧭 Schedule: Once a week — 2 hours</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-gray-400" />
          <span className="font-semibold">⏰ Time: 9:30 PM – 11:30 PM (Burundi / Rwanda Time)</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-red-700" />
          <span className="font-semibold">📍 Format: Live online sessions (Google Meet)</span>
        </div>
      </div>

      <h2 className="text-4xl font-black text-red-700 uppercase italic mb-8 serif">Cost / Fee:</h2>
      
      <div className="space-y-4 mb-20">
        <p className="text-3xl font-bold text-red-700 underline decoration-2 underline-offset-4">$0 (Free of charge)</p>
        <p className="text-xl font-medium text-gray-600">Giving: Generosity</p>
      </div>

      <div className="space-y-6 text-left max-w-2xl mx-auto text-gray-800">
        <div className="flex items-start gap-4">
          <CheckSquare className="w-6 h-6 text-green-600 shrink-0 mt-1" />
          <p className="font-semibold">✅ Are you a faith-filled believer longing to build a different kind of family—one that reflects God’s Kingdom and not just culture?</p>
        </div>
        <div className="flex items-start gap-4">
          <CheckSquare className="w-6 h-6 text-green-600 shrink-0 mt-1" />
          <p className="font-semibold">✅ Do you feel called to break patterns of broken homes and generational cycles, but lack the tools, language, and Kingdom foundations to do it?</p>
        </div>
        <div className="flex items-start gap-4">
          <CheckSquare className="w-6 h-6 text-green-600 shrink-0 mt-1" />
          <p className="font-semibold">✅ Have you been praying for a healthy, legacy-building family, yet feel under-prepared, unsure where to start, or in need of deeper grounding?</p>
        </div>
      </div>

      <div className="mt-12 space-y-6 text-center text-lg italic text-gray-700">
        <p>If yes, Kingdom Family School is for you.</p>
        <p className="max-w-2xl mx-auto not-italic text-base">
          This foundational class will ground your spirit, soul, finances, and body in God’s blueprint for family, and reveal the covenant picture of Christ and the Church for everyday family life.
        </p>
        <p className="font-semibold not-italic">It is time to build our families on revelation, responsibility, and covenant, so we don’t just have a home — we establish a Kingdom legacy.</p>
        <p className="font-semibold not-italic">Kingdom Family School is waiting — free of charge.</p>
        
        <a 
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-red-700 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-red-800 transition-colors inline-block shadow-lg"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </section>
);

const CourseOutline: React.FC = () => {
  const modules = [
    {
      id: "A",
      icon: <Flame className="w-8 h-8 text-orange-600" />,
      title: "MODULE A: BIBLICAL FOUNDATIONS OF MARRIAGE & FAMILY",
      subtitle: "Kingdom Blueprint from Genesis to Revelation",
      points: [
        "The Bible — The Book that Reveals Marriage (from Genesis to Revelation)",
        "Untold Revelations of Kingdom Patterns Governing the Family",
        "Why God Created Adam First — Christ & the Church Mystery Revealed",
        "The Mysteries of the Rib",
        "Understanding the Purpose and Power of the Garden of Eden before choosing a partner"
      ]
    },
    {
      id: "B",
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      title: "MODULE B: SPIRITUAL FOUNDATIONS",
      subtitle: "Spirit Healing & Kingdom Revelation (ICOKORWA MU MPWEMU NGO URUGO RUKOMERE)",
      points: [
        "Why do many families fail?",
        "The covenant secret of a strong family",
        "Healing emotional wounds",
        "Spiritual roots of broken homes",
        "Transforming mindsets for a better future"
      ]
    },
    {
      id: "C",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "MODULE C: SOUL HEALING & SELF-MASTERY",
      subtitle: "Soul Transformation Course (Gukira umutima, ubwenge n’ukwimenya)",
      points: [
        "Deep self-discovery",
        "Strengths & weaknesses awareness",
        "Youth, courtship & marriage preparation",
        "Healthy communication in relationships",
        "Proverbs 31 Woman & Kingdom Woman",
        "Proverbs 31 Man & Kingdom Man"
      ]
    },
    {
      id: "D",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "MODULE D: KINGDOM PARENTING",
      subtitle: "Raising a Godly Generation",
      points: [
        "Training children with wisdom",
        "Discipline with love",
        "Nurturing character",
        "Building strong family values"
      ]
    },
    {
      id: "E",
      icon: <CircleDollarSign className="w-8 h-8 text-emerald-500" />,
      title: "MODULE E: FAMILY, FINANCES & FUTURE",
      subtitle: "Family & Financial Mastery",
      points: [
        "Family economics & wealth management",
        "Vision, planning & legacy",
        "Kingdom financial principles",
        "Reconciliation, separation & restoration guidance"
      ]
    },
    {
      id: "F",
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
      title: "MODULE F: PHYSICAL & INTIMACY EDUCATION",
      subtitle: "Biblical & Practical Marriage Intimacy",
      points: [
        "Spiritual meaning of sexuality",
        "Healthy marital intimacy",
        "Roles of husband and wife",
        "Building trust and connection"
      ]
    }
  ];

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black serif uppercase tracking-tight mb-4 text-gray-900">
            TABLE OF CONTENT / IVYIRWA BWITE
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-red-600" />
            <p className="text-2xl text-gray-600 italic font-medium">Kingdom Family Class</p>
            <Sparkles className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-lg md:text-xl font-bold text-red-700 max-w-2xl mx-auto">
            A Life-Changing Journey into Spiritual, Emotional, and Family Wholeness
          </p>
        </div>

        <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100 mb-16 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-black text-red-800 mb-2">🌟 BASIC FAMILY MASTERING COURSE</h3>
          <p className="text-red-700 italic font-medium">Building strong, healed, and Christ-centered families.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-start text-left">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-red-50 transition-colors">
                {mod.icon}
              </div>
              <h4 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">
                {mod.title}
              </h4>
              <p className="text-red-700 font-semibold italic text-sm mb-6 leading-snug">
                {mod.subtitle}
              </p>
              <ul className="space-y-3 mt-auto">
                {mod.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Program Details Info Box */}
        <div className="bg-gray-900 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calendar className="w-48 h-48 rotate-12" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left">
              <h3 className="text-3xl font-black serif mb-6 tracking-tight uppercase">PROGRAM DETAILS</h3>
              <p className="text-gray-400 mb-8 max-sm italic">Join us for this transformative 6-month journey into the heart of Kingdom family dynamics.</p>
              <a 
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all inline-block text-lg shadow-lg active:scale-95"
              >
                Enroll for Free
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl"><Calendar className="w-6 h-6 text-red-400" /></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Duration</p>
                  <p className="text-lg font-bold">6 Months</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl"><Clock className="w-6 h-6 text-red-400" /></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Sessions</p>
                  <p className="text-lg font-bold">2h per week</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl"><Users className="w-6 h-6 text-red-400" /></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Day</p>
                  <p className="text-lg font-bold">Saturday</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl"><MapPin className="w-6 h-6 text-red-400" /></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Time & Mode</p>
                  <p className="text-lg font-bold">21:00 (BI) — Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventGallery: React.FC = () => {
  const images = [
    {
      src: "https://i.postimg.cc/Kj8C2G8k/e7c2bad7-0755-44f8-bc40-67976347243c.jpg",
      alt: "Family Gala Night Celebration"
    },
    {
      src: "https://i.postimg.cc/ZK1sfFpy/865119eb-ed9b-461b-91cf-9e2f2b6cde0a.jpg",
      alt: "Graduation Day Celebration"
    }
  ];

  return (
    <section className="bg-white py-24 px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 serif uppercase tracking-tight text-gray-900 leading-tight">
          Discover Our Family Gala Night and <br className="hidden md:block" /> Graduation Celebrations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {images.map((img, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: <Facebook className="w-8 h-8" />,
      link: "https://www.facebook.com/profile.php?id=100005909508654",
      color: "#1877F2"
    },
    {
      name: "TikTok",
      icon: <TikTokIcon />,
      link: "https://www.tiktok.com/@joshuangabo",
      color: "#000000"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-8 h-8" />,
      link: "https://youtube.com/@joshuangabo",
      color: "#FF0000"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      link: "https://www.instagram.com/ni_joshuangabo",
      color: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
    },
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      link: "https://wa.me/256751500995",
      color: "#25D366"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-8 border-t border-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black serif text-gray-900 mb-4 tracking-tight">Stay Connected With Us</h2>
        <p className="text-lg text-gray-500 mb-12 italic font-medium">Follow us or contact us directly anytime</p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.name}
              className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 active:scale-95 overflow-hidden"
              style={{ background: platform.color }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {platform.icon}
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="relative antialiased">
      <Navbar />
      <Hero />
      <Introduction />
      <DetailsSection />
      <CourseOutline />
      <EventGallery />
      <Footer />
    </div>
  );
};

export default App;
