export default function OurTeam() {
    return (
      <div className=" mx-auto px-8 py-8 bg-white">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2 text-blue-600">Our Team</h1>
  
        <p className="mb-8 text-gray-600">
          Meet the people behind our minimalist approach. Our team combines expertise in design, development, and
          strategy.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="border p-4">
              <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
              <h2 className="text-xl font-medium text-blue-300">{member.name}</h2>
              <p className="text-gray-500 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      bio: "Alex leads our creative vision with over 10 years of experience in minimalist design.",
    },
    {
      name: "Sam Rivera",
      role: "Lead Developer",
      bio: "Sam specializes in clean, efficient code that brings our minimalist designs to life.",
    },
    {
      name: "Taylor Kim",
      role: "UX Designer",
      bio: "Taylor ensures our minimalist approach translates to intuitive, user-friendly experiences.",
    },
    {
      name: "Jordan Smith",
      role: "Project Manager",
      bio: "Jordan keeps our projects running smoothly and ensures we deliver on time and on budget.",
    },
    {
      name: "Morgan Lee",
      role: "Content Strategist",
      bio: "Morgan crafts clear, concise messaging that complements our minimalist design approach.",
    },
    {
      name: "Casey Wong",
      role: "Client Relations",
      bio: "Casey is your main point of contact, ensuring your needs are met throughout the project.",
    },
  ]
  