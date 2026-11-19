import { teamMembers } from "../utils/team_members";

export default function OurTeam() {
  return (
    <div className="mx-auto px-8 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 text-blue-600">Our Team</h1>

      <p className="mb-8 text-gray-600">
        Meet the people behind our minimalist approach. Our team combines expertise in design, development, and
        strategy.
      </p>

      {/* ========================================================
          TODO: Lists & Responsive Grid
          1. Import 'teamMembers' from '../utils/team_members'.
          2. Use .map() to loop through 'teamMembers' and return a card for each member:
             - Assign a unique 'key' to the outermost element (e.g., key={member.name}).
             - Display a photo placeholder box (<div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">...).
             - Render the member's name (h2), role (p), and bio (p).
          3. Notice how the Tailwind grid works:
             - Mobile: 1 column (grid-cols-1)
             - Tablet: 2 columns (md:grid-cols-2)
             - Desktop: 3 columns (lg:grid-cols-3)
         ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render team members here using teamMembers.map(...) */}
      </div>
    </div>
  );
}

