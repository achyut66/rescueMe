"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [flashVisible, setFlashVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(true);

  const medvec = `
<div style='font-size:13px; line-height:1.5;'>
  <strong>1. Definition and Purpose:</strong><br>
  - MedEvac involves rapidly transporting injured or ill individuals from crisis areas (e.g., battlefields, disaster zones) 
    to medical facilities for life-saving care, using ground, air, or maritime methods.<br>

  <strong>2. Types of MedEvac:</strong><br>
  - Includes ground ambulances for accessible areas, air evacuation (helicopters/aircraft) for remote or urgent cases, 
    and maritime evacuation for offshore scenarios.<br>

  <strong>3. Key Components:</strong><br>
  - Involves trained personnel (paramedics, flight nurses), specialized equipment (ventilators, communication systems), 
    and coordinated triage to prioritize patients.<br>

  <strong>4. Challenges:</strong><br>
  - Faces obstacles like harsh environments, combat risks, logistical constraints, and ethical dilemmas in prioritizing patients under limited resources.<br>

  <strong>5. Technological Advancements:</strong><br>
  - Emerging tools like telemedicine, drones, and AI improve navigation, patient care, and coordination, 
    enhancing MedEvac efficiency.
</div>
`;

const rescue = `
<div style='font-size:13px; line-height:1.5;'>
  <strong>1. Search and Location:</strong><br>
  - Tracing missing or stranded trekkers/climbers through guides, porters, villagers, and sometimes drones or satellite communication.<br>
  - Coordination with Nepal Police, Nepal Army, and volunteer SAR teams.<br>

  <strong>2. Medical Assistance:</strong><br>
  - On-site first aid and stabilization at high altitudes.<br>
  - Treatment for Acute Mountain Sickness (AMS), High-Altitude Pulmonary Edema (HAPE), and High-Altitude Cerebral Edema (HACE).<br>
  - Care for injuries like fractures, frostbite, hypothermia, and trauma.<br>
  - Providing oxygen cylinders and portable medical kits.<br>

  <strong>3. Evacuation:</strong><br>
  - Helicopter rescues are common for severe cases, especially in Everest, Annapurna, and Langtang regions.<br>
  - Ground evacuations with stretchers, yaks, horses, or porters when helicopters cannot fly due to bad weather or altitude.<br>
  - Transfer to the nearest health post, regional hospital, or Kathmandu medical facilities.<br>

  <strong>4. Logistical & Technical Support:</strong><br>
  - Rope fixing and technical climbing assistance for stranded climbers.<br>
  - Setting up temporary shelters for protection against storms and cold.<br>

  <strong>5. Natural Challenges Management:</strong><br>
  - Operations during avalanches, landslides, snowstorms, and crevasse rescues.<br>
  - Emergency response during glacial lake floods or heavy rainfall.<br>
</div>
`;

  const emer = `
<div style='font-size:13px; line-height:1.5;'>
  <strong>1. Rapid Response:</strong><br>
  - Quick mobilization of rescue teams to evacuate trekkers, climbers, or locals facing immediate danger from accidents, injuries, or sudden illness.<br>

  <strong>2. Medical Stabilization:</strong><br>
  - Providing on-site first aid, oxygen support, and treatment for altitude sickness, trauma, hypothermia, and other urgent conditions.<br>

  <strong>3. Evacuation Methods:</strong><br>
  - Using helicopters, stretchers, horses, yaks, or porters depending on terrain, altitude, and urgency.<br>

  <strong>4. Coordination:</strong><br>
  - Collaborating with Nepal Army, Police, local guides, trekking agencies, and insurance providers to ensure safe and timely evacuation.<br>

  <strong>5. Safety Protocols:</strong><br>
  - Assessing weather, terrain, and risk factors to plan the safest evacuation route and prevent secondary accidents.
</div>
`;

  const natural = `
<div style='font-size:13px; line-height:1.5;'>
  <strong>1. Disaster Assessment:</strong><br>
  - Rapid evaluation of affected areas after avalanches, landslides, floods, earthquakes, or glacial lake outburst floods (GLOFs) to prioritize rescue operations.<br>

  <strong>2. Search and Rescue:</strong><br>
  - Locating and extracting trapped or stranded individuals using trained teams, local guides, drones, and search dogs where applicable.<br>

  <strong>3. Medical Assistance:</strong><br>
  - On-site first aid, treatment for injuries, hypothermia, and other urgent medical conditions caused by disasters.<br><br>

  <strong>4. Evacuation and Shelter:</strong><br>
  - Safe transport of victims to emergency shelters or hospitals using helicopters, ground transport, or porters depending on terrain and accessibility.<br>

  <strong>5. Coordination & Recovery:</strong><br>
  - Working with Nepal Army, Police, local authorities, NGOs, and international relief agencies to organize rescue, provide relief supplies, and restore safety.
</div>
`;

  const sar = `
<div style='font-size:13px; line-height:1.5;'>
  <strong>1. Search Operations:</strong><br>
  - Locating missing or stranded climbers, trekkers, and local workers using guides, porters, villagers, and sometimes drones or satellite tracking.<br>

  <strong>2. Rescue Execution:</strong><br>
  - Deploying trained SAR teams to extract individuals from cliffs, glaciers, crevasses, and other hazardous terrains safely.<br>

  <strong>3. Medical Support:</strong><br>
  - Providing on-site first aid, stabilization, and treatment for injuries, hypothermia, frostbite, altitude sickness, and trauma.<br>

  <strong>4. Evacuation:</strong><br>
  - Transporting victims via helicopter or ground teams to nearest health posts, hospitals, or emergency facilities depending on weather and terrain.<br>

  <strong>5. Coordination & Communication:</strong><br>
  - Working with Nepal Army, Police, local guides, trekking agencies, and insurance providers to ensure timely and safe rescue operations.
</div>
`;

  
  const submenuData: {
    [key: string]: { items: string[], descriptions: string[], images?: string[], title:string[] };
  } = {
    // Services: {
    //   items: ["Helicopter Tours", "Guided Trips", "Emergency Evacuation"],
    //   title: ['Helicopter Tours','Guide To Trip','Evacuation On Emergency'],
    //   descriptions: [
    //     "Helicopter tours in Nepal offer an extraordinary way to witness the majestic Himalayas, including iconic peaks like Mount Everest, Annapurna, and Langtang. Flights typically last 30–60 minutes and provide breathtaking aerial views of snow-capped mountains, glaciers, and deep valleys, with options for private or group tours and photography packages. <br> These tours have grown in popularity among adventure and luxury travelers, boosting Nepal’s tourism sector. In 2023, Himalayan helicopter tourism contributed significantly to the industry’s revenue, attracting thousands of visitors seeking unique, once-in-a-lifetime experiences and panoramic vistas of the world’s highest peaks.",
    //     "Guiding a tour in the Nepal Himalayas lets travelers experience stunning landscapes, from snow-capped peaks to deep valleys, glacial rivers, and serene alpine meadows, while learning about local culture, traditions, and history. Guides ensure safety, point out scenic spots, highlight hidden gems along the way, and share fascinating stories about the mountains, villages, and wildlife. <br> They also handle logistics like accommodations, transportation, and trekking permits, while recommending authentic experiences, local cuisine, and cultural interactions, making each trek or sightseeing trip a memorable adventure filled with breathtaking views, rich cultural insights, and unforgettable memories.",
    //     "Guiding a tour in the Nepal Himalayas lets travelers experience stunning landscapes, from snow-capped peaks to deep valleys, glacial rivers, and serene alpine meadows, while learning about local culture, traditions, and history. Guides ensure safety, point out scenic spots, highlight hidden gems along the way, and share fascinating stories about the mountains, villages, and wildlife. They are also trained to handle emergencies, including medical situations and evacuation procedures, ensuring travelers’ well-being throughout the journey. <br> In addition to managing logistics like accommodations, transportation, and trekking permits, guides recommend authentic experiences, local cuisine, and cultural interactions. Their expertise transforms each trek or sightseeing trip into a safe and memorable adventure, filled with breathtaking views, rich cultural insights, and unforgettable memories, even in unexpected situations.",
    //   ],
    //   images: [
    //     "/menu/heli.jpeg", 
    //     "/menu/guide1.webp", 
    //     "/menu/eva1.jpg"
    // ],
    // },
    Rescue: {
      items: ["Medical Evacuation (MedEvac)", "Mountain or Trekking Rescue", "Search and Rescue (SAR) Operations","Emergency Evacuation from Accommodation or Camps","Natural Disaster or Environmental Rescue"],
      title:['MedVec','Mountain Rescue','SAR','Emergency Evacuation','Natural Disaster'],
      descriptions: [
        medvec,
        rescue,
        sar,
        emer,
        natural,
      ],
      images: [
        "/menu/1.webp", 
        "/menu/2.webp", 
        "/menu/3.jpeg",
        "/menu/4.webp",
        "/menu/5.jpg"
    ],
    },
  };

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowEmergencyAlert(scrollTop < 100); // Hide emergency alert when scrolled more than 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { Name: "Home", Link: "/" },
    { Name: "About", Link: "/about" },
    // { Name: "Services", Link: "/services" },
    { Name: "Rescue", Link: "/rescue" },
    { Name: "Blog", Link: "/blog" },
    { Name: "Gallery", Link: "/gallery" },
    { Name: "Contact", Link: "/contact" },
  ];
  

  return (
    <header className="w-full">
      {/* Flash message */}
      {flashVisible && showEmergencyAlert && (
        <div className="bg-red-500 text-white text-center py-2 fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 ease-in-out">
          <span>Emergency Alert: Rescue flights available 24/7!</span>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 font-bold hover:text-gray-200 transition-colors duration-300"
            onClick={() => setFlashVisible(false)}
          >
            X
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav className={`flex items-center justify-between px-8 lg:px-[80px] py-6 fixed left-0 right-0 z-[9999] transition-all duration-50 ease-in-out ${
        flashVisible && showEmergencyAlert 
          ? 'top-[40px]' 
          : 'top-[-3px]'
      } ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-200/50 py-4 transform scale-[0.999] ring-1 ring-white/20' 
          : 'bg-white shadow-md py-6 transform scale-100'
      }`}>
        {/* Logo */}
        <Link href='/'>
        <div className="flex items-center cursor-pointer transition-all duration-300">
          <Image 
            src="/image/logo.png" 
            alt="Logo" 
            height={isScrolled ? 32 : 40} 
            width={isScrolled ? 160 : 200} 
            loading="eager" 
            className="transition-all duration-300"
          />
        </div>
        </Link>
        

        {/* Menu */}
        <ul className={`hidden md:flex space-x-8 font-medium text-gray-700 relative transition-all duration-300 ${
          isScrolled ? 'space-x-6' : 'space-x-8'
        }`}>
            {menus.map((menu) => (
                <li
                key={menu.Name}
                className="relative group"
                onMouseEnter={() => {
                    if (submenuData[menu.Name]) {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout);
                        setHoverTimeout(null);
                      }
                      setActiveMenu(menu.Name);
                      setActiveIndex(0);
                      setSubmenuOpen(true);
                    }
                }}
                onMouseLeave={() => {
                    if (submenuData[menu.Name]) {
                      const timeout = setTimeout(() => {
                        setSubmenuOpen(false);
                        setActiveMenu(null);
                      }, 150);
                      setHoverTimeout(timeout);
                    }
                }}
                >
                <Link href={menu.Link} className="cursor-pointer transition-all duration-300 hover:text-green-600">
                    {menu.Name}
                </Link>

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
            ))}
        </ul>


        {/* Social Icons */}
        <div className={`hidden md:flex text-gray-700 transition-all duration-300 ${
          isScrolled ? 'space-x-3' : 'space-x-4'
        }`}>
          {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
            <Icon
              key={index}
              className="hover:text-green-600 cursor-pointer transition-colors duration-300 transform hover:scale-110"
            />
          ))}
        </div>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className={`md:hidden fixed inset-x-0 z-[9999] bg-white border-t border-gray-200 shadow-2xl transition-all duration-300 ${
          flashVisible && showEmergencyAlert 
            ? (isScrolled ? 'top-[128px]' : 'top-[150px]')
            : (isScrolled ? 'top-[88px]' : 'top-[110px]')
        }`}>
          <div className="px-5 py-4 space-y-2">
            {menus.map((menu) => {
              const hasSub = Boolean(submenuData[menu.Name]);
              const isOpen = mobileActiveMenu === menu.Name;
              return (
                <div key={menu.Name} className="">
                  <div className="flex items-center justify-between">
                    <Link
                      href={menu.Link}
                      className="py-2 text-gray-800 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {menu.Name}
                    </Link>
                    {hasSub && (
                      <button
                        className={`py-2 px-3 text-sm rounded hover:opacity-90 ${
                          menu.Name === 'Rescue' ? 'text-rose-700 bg-rose-100' : 'text-blue-700 bg-blue-100'
                        }`}
                        onClick={() =>
                          setMobileActiveMenu(isOpen ? null : menu.Name)
                        }
                      >
                        {isOpen ? "Hide" : "More"}
                      </button>
                    )}
                  </div>

                  {hasSub && isOpen && (
                    <div className={`mt-2 rounded-lg border ${menu.Name === 'Rescue' ? 'border-rose-200' : 'border-blue-200'}`}>
                      <div className={`divide-y ${menu.Name === 'Rescue' ? 'divide-rose-200' : 'divide-gray-200'}`}>
                        {submenuData[menu.Name].items.map((item, index) => (
                          <button
                            key={item}
                            className={`w-full text-left px-4 py-3 text-gray-800 ${
                              activeMenu === menu.Name && activeIndex === index
                                ? "bg-gray-50"
                                : "hover:bg-gray-50"
                            }`}
                            onClick={() => {
                              setActiveMenu(menu.Name);
                              setActiveIndex(index);
                            }}
                          >
                            {item}
                          </button>
                        ))}
                      </div>

                      {/* Mobile description + image */}
                      {activeMenu === menu.Name && (
                        <div className={`p-4 ${menu.Name === 'Rescue' ? 'bg-rose-50' : 'bg-gray-50'}`}>
                          {(() => {
                            const images = submenuData[menu.Name]?.images || [];
                            const candidate = images[activeIndex] || images[0];
                            return candidate ? (
                              <div className="w-full h-40 overflow-hidden rounded-md mb-3">
                                <Image
                                  src={candidate}
                                  alt={`${menu.Name} ${submenuData[menu.Name].items[activeIndex]}`}
                                  width={800}
                                  height={320}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : null;
                          })()}
                          <h3 className={`text-lg font-semibold mb-1 ${menu.Name === 'Rescue' ? 'text-rose-900' : 'text-gray-900'}`}>
                            {submenuData[menu.Name].title?.[activeIndex] ||
                              submenuData[menu.Name].items[activeIndex]}
                          </h3>
                          <p
                            className={`${menu.Name === 'Rescue' ? 'text-rose-900/90' : 'text-gray-800/90'} leading-relaxed text-sm`}
                            dangerouslySetInnerHTML={{
                              __html:
                                submenuData[menu.Name].descriptions[activeIndex],
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mega submenu container - fixed under navbar, centered, highest z-index */}
      {submenuOpen && activeMenu && submenuData[activeMenu] && (
        <div
          className={`${
            activeMenu === 'Rescue'
              ? 'bg-rose-50 ring-rose-400/40'
              : 'bg-gray-50 ring-blue-400/40'
          } fixed left-1/2 -translate-x-1/2 w-[min(92vw,1100px)] z-[9999] rounded-md shadow-2xl ring-1 overflow-hidden transition-all duration-200 ${
            flashVisible && showEmergencyAlert 
              ? (isScrolled ? 'top-[128px]' : 'top-[138px]')
              : (isScrolled ? 'top-[88px]' : 'top-[110px]')
          }`}
          onMouseEnter={() => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout);
              setHoverTimeout(null);
            }
            setSubmenuOpen(true);
          }}
          onMouseLeave={() => {
            const timeout = setTimeout(() => {
              setSubmenuOpen(false);
              setActiveMenu(null);
            }, 150);
            setHoverTimeout(timeout);
          }}
        >
          <div className={`grid grid-cols-1 ${activeMenu === 'Rescue' ? 'md:grid-cols-[1fr_280px]' : 'md:grid-cols-[280px_1fr]'} min-h-[340px]`}>
            {activeMenu === 'Rescue' ? (
              <>
                {/* Left: Description for Rescue */}
                <div className="bg-rose-50/70 p-5 md:p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {(() => {
                      const images = submenuData[activeMenu]?.images || [];
                      const candidate = images[activeIndex] || images[0];
                      if (!candidate) return null;
                      return (
                        <div className="w-full h-44 md:h-56 overflow-hidden rounded-xl">
                          <Image
                            src={candidate}
                            alt={`${activeMenu} ${submenuData[activeMenu].items[activeIndex]}`}
                            width={700}
                            height={700}
                            quality={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                    })()}
                    <h2 className="font-sans font-bold text-2xl text-rose-900">
                      {submenuData[activeMenu].title[activeIndex]}
                    </h2>
                    <hr className="border-rose-300 border-2 font-bold w-22"/>
                    <p
                      className="text-rose-900/90 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: submenuData[activeMenu].descriptions[activeIndex],
                      }}
                    />
                  </div>
                </div>
                {/* Right: Buttons for Rescue */}
                <div className="bg-rose-300/80 backdrop-blur-sm divide-y divide-rose-200/60">
                  {submenuData[activeMenu].items.map((item, index) => (
                    <button
                      key={item}
                      className={`w-full text-left px-5 py-4 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                        activeIndex === index
                          ? 'bg-white/60 text-slate-900'
                          : 'text-slate-800/90 hover:bg-white/40 hover:text-slate-900'
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Left: Buttons for Services */}
                <div className="bg-green-300/80 backdrop-blur-sm divide-y divide-blue-200/60">
                  {submenuData[activeMenu].items.map((item, index) => (
                    <button
                      key={item}
                      className={`w-full text-left px-5 py-4 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                        activeIndex === index
                          ? 'bg-white/60 text-slate-900'
                          : 'text-slate-800/90 hover:bg-white/40 hover:text-slate-900'
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                {/* Right: Description for Services */}
                <div className="bg-gray-50/70 p-5 md:p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {(() => {
                      const images = submenuData[activeMenu]?.images || [];
                      const candidate = images[activeIndex] || images[0];
                      if (!candidate) return null;
                      return (
                        <div className="w-full h-44 md:h-56 overflow-hidden rounded-xl">
                          <Image
                            src={candidate}
                            alt={`${activeMenu} ${submenuData[activeMenu].items[activeIndex]}`}
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                    })()}
                    <h2 className="font-sans font-bold text-2xl text-slate-900">
                      {submenuData[activeMenu].title[activeIndex]}
                    </h2>
                    <hr className="border-blue-300 border-2 font-bold w-22"/>
                    <p
                      className="text-slate-800/95 text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: submenuData[activeMenu].descriptions[activeIndex],
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
