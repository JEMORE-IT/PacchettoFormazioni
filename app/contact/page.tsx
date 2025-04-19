export default function About() {
  
    return (
      <div className="min-h-screen  px-12 pw-6 mx-auto bg-white mb-10">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 text-blue-600">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-3 text-blue-300">Our Office</h2>
            <div className="space-y-2 text-gray-600">
              <p>123 Minimalist Street</p>
              <p>Simple City, 10001</p>
              <p>Italy</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-3 text-blue-300">Contact Information</h2>
            <div className="space-y-2 text-gray-600">
              <p>Email: contact@example.com</p>
              <p>Phone: +39 02 1234 5678</p>
              <p>Fax: +39 02 1234 5679</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-3 text-blue-300">Opening Hours</h2>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 - 18:00</p>
              <p>Saturday: 10:00 - 14:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3 text-blue-300">Department Contacts</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-medium">Customer Support</h3>
              <p>support@example.com</p>
              <p>+39 02 1234 5680</p>
            </div>

            <div>
              <h3 className="font-medium">Sales Department</h3>
              <p>sales@example.com</p>
              <p>+39 02 1234 5681</p>
            </div>

            <div>
              <h3 className="font-medium">Press Inquiries</h3>
              <p>press@example.com</p>
              <p>+39 02 1234 5682</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium  text-blue-300">Find Us</h2>
        <div className=" rounded-lg overflow-hidden shadow-lg mt-4 h-96 w-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.4876067729174!2d10.922029375691816!3d44.64838848750062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fef13dd158f3d%3A0x51258ed00ccc5826!2sVia%20Ganaceto%2C%2044%2C%2041121%20Modena%20MO!5e0!3m2!1sit!2sit!4v1743785002031!5m2!1sit!2sit"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </div>

    );
  }
  