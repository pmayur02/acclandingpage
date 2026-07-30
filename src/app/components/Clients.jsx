import Image from "next/image";

const clients = [
  {
    name: "Client 1",
    image: "/rel.png",
  },
  {
    name: "Client 2",
    image: "/hcl.png",
  },
  {
    name: "Client 3",
    image: "/ibm.png",
  },
  {
    name: "Client 4",
    image: "/crif.png",
  },
  {
    name: "Client 5",
    image: "/adp.svg",
  },
  {
    name: "Client 5",
    image: "/bayer.svg",
  }
];

const Clients = () => {
  return (
    <section id="clients" className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </p>

        <h2 className="">
          Successful Collaborations With the <span className="text-blue-600">Industry’s Best</span>
        </h2>
      </div>

      {/* Client Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={160}
              height={80}
              className="object-contain max-h-25"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;