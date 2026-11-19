import { teamMembers } from "../utils/team_members"
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

