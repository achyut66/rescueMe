"use client";

import React,{useEffect} from "react";
import Image from "next/image";

const rescueData = [
  {
    title: "Medical Evacuation (MedEvac)",
    content: `
      <div style='font-size:16px; line-height:1.6;'>
  <span style='font-weight:bold;'>MedEvac</span> is a critical service designed to rapidly transport injured or critically ill individuals from high-risk or remote areas to medical facilities equipped for life-saving treatment. Whether in disaster zones, remote mountain regions, or accident sites, MedEvac ensures timely access to professional healthcare, significantly improving survival rates and recovery outcomes. These operations often combine ground, air, and maritime transport methods depending on the urgency and terrain.
  <br><br><span style='font-weight:bold;'>This</span> relies on highly trained personnel, including paramedics, flight nurses, and emergency doctors, equipped with advanced medical tools such as portable ventilators, monitoring devices, and emergency communication systems. Coordination between the medical team, transport operators, and local authorities is essential to prioritize patients, stabilize their condition during transit, and deliver seamless care from the incident site to the hospital.
  <br><br><span style='font-weight:bold;'>Modern</span> technology has further enhanced MedEvac capabilities. Innovations like drones, telemedicine, and AI-assisted navigation allow teams to assess situations remotely, plan optimal evacuation routes, and provide expert guidance mid-transport. Despite challenges such as extreme weather, difficult terrain, or limited resources, MedEvac operations continue to evolve, ensuring rapid and efficient emergency response in critical situations.
</div>

    `,
    image: "/menu/eva2.jpg",
  },
  {
    title: "Mountain Rescue",
    content: `
      <div style='font-size:16px; line-height:1.6;'>
      <span style='font-weight:bold;'>Mountain</span> rescue in Nepal requires quick and precise action, especially in the challenging Himalayan terrain. Rescue teams rely on local guides, porters, and community members to locate missing or stranded climbers and trekkers. Drones and satellite communication are increasingly used to help track individuals in remote areas, while coordination with Nepal Police, the Nepal Army, and volunteer SAR units ensures that efforts are well-organized and efficient.
      <br><br><span style='font-weight:bold;'>Providing</span> medical assistance on-site is a critical part of any rescue operation. Teams carry portable medical kits and oxygen supplies to treat injuries such as fractures, frostbite, and hypothermia, as well as altitude-related illnesses like Acute Mountain Sickness (AMS) and high-altitude pulmonary or cerebral edema. Stabilizing patients in these harsh conditions is essential to prevent further complications before they can be evacuated to proper medical facilities.
      <br><br><span style='font-weight:bold;'>Evacuating</span> individuals safely from high-altitude or difficult terrain requires a combination of strategies. Helicopters are often used for urgent cases, while ground transport using stretchers, yaks, or porters is employed when air evacuation is impossible. Rescue operations also include technical climbing support, rope assistance, and temporary shelters to protect survivors from storms and extreme cold. Teams must constantly adapt to natural hazards like avalanches, landslides, and glacial floods, making every mission a test of skill, planning, and endurance.
      </div>

    `,
    image: "/menu/eva1.jpg",
  },
  {
    title: "Emergency Evacuation",
    content: `
      <div style='font-size:16px; line-height:1.6;'>
  <strong>Emergency</strong> evacuations in the Himalayas require highly trained teams to reach individuals in danger as quickly as possible. Climbers, trekkers, and local residents may face accidents, sudden illnesses, or unexpected environmental hazards, and every second counts when navigating the difficult mountain terrain. Teams rely on experience, coordination, and rapid decision-making to respond effectively under challenging conditions.<br><br>
  <strong>Medical</strong> care is provided immediately upon arrival. Rescuers stabilize injured individuals, administer oxygen, and treat altitude-related illnesses, hypothermia, and trauma. Portable medical kits and first aid interventions help prevent further complications while victims are prepared for safe transport to medical facilities, which may be located far from the incident site.<br><br>
  <strong>Evacuation</strong> from remote areas requires adaptability and careful planning. Helicopters are deployed when weather and altitude allow, while ground transport with stretchers, pack animals, or porters is used when air access is impossible. Rescue operations are coordinated with local authorities, guides, and trekking agencies to ensure that the process is safe, efficient, and minimizes risk for both victims and rescuers.
</div>

    `,
    image: "/menu/eva3.jpg",
  },
  {
    title: "Natural Disaster Rescue",
    content: `
      <div style='font-size:16px; line-height:1.6;'>
  <strong>Disasters</strong> in the Himalayan region, such as avalanches, landslides, floods, earthquakes, and glacial lake outburst floods, often strike without warning. Rapid assessment of affected areas is essential to determine where people are trapped or injured, and rescue teams must quickly prioritize operations to save lives while managing the unpredictable mountain environment.<br><br>
  <strong>Rescue</strong> operations combine search and medical assistance to ensure victims receive care as soon as possible. Trained teams, local guides, and sometimes drones or search dogs are deployed to locate stranded individuals, while first aid and stabilization are provided on site to prevent further injury or complications. In disaster zones, conditions can be dangerous and change rapidly, requiring flexible and skilled response.<br><br>
  <strong>Evacuation</strong> and recovery involve safely transporting people from hazardous areas to emergency shelters or hospitals. Coordination with local authorities, NGOs, the Nepal Army, and international relief organizations is critical to provide relief supplies, organize logistics, and restore safety. These efforts ensure that both immediate and long-term needs of the affected population are addressed efficiently and effectively.
</div>

    `,
    image: "/menu/heli1.jpeg",
  },
  {
    title: "Search and Rescue (SAR)",
    content: `
      <div style='font-size:16px; line-height:1.6;'>
  <strong>Search</strong> and rescue operations in the Himalayas focus on locating missing or stranded climbers, trekkers, and local workers. Teams rely on guides, porters, villagers, and sometimes drones or satellite tracking to navigate the rugged terrain efficiently. Time is critical, and rapid response ensures that individuals are found before conditions worsen or injuries become more severe.<br><br>
  <strong>Rescue</strong> efforts involve extracting people safely from cliffs, glaciers, crevasses, and other hazardous areas. Trained SAR personnel use specialized equipment and techniques to overcome difficult terrain, ensuring both the safety of the victims and the rescue team. Coordination with local guides and volunteers enhances efficiency and reduces risk during operations.<br><br>
  <strong>Support</strong> continues even after initial extraction, with medical stabilization provided on-site for injuries, hypothermia, frostbite, and altitude-related conditions. Victims are then transported via helicopter or ground teams to nearby health posts, hospitals, or emergency facilities. Communication and collaboration with local authorities, the Nepal Army, police, and trekking agencies are essential to ensure timely and safe completion of rescue operations.
</div>

    `,
    image: "/menu/heli.jpeg",
  },
];

export default function RescuePage() {
  useEffect(() => {
    document.title = "BaseCamp Trip | Rescue";
  }, []);
  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-80 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-clip-text">
          Our Rescue Operations
        </h2>

        <div className="space-y-20">
          {rescueData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Conditionally render Image and Content for zig-zag */}
              {index % 2 === 0 ? (
                <>
                  {/* Image Left */}
                  <div className="w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-lg w-full h-80 object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Right */}
                  <div
                    className="text-gray-900"
                    dangerouslySetInnerHTML={{
                      __html: `<h3 class="text-2xl font-bold mb-4">${item.title}</h3>` + item.content,
                    }}
                  />
                </>
              ) : (
                <>
                  {/* Content Left */}
                  <div
                    className="text-gray-900"
                    dangerouslySetInnerHTML={{
                      __html: `<h3 class="text-2xl font-bold mb-4">${item.title}</h3>` + item.content,
                    }}
                  />

                  {/* Image Right */}
                  <div className="w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-lg w-full h-80 object-cover"
                      loading="lazy"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}