import Image from "next/image";

const Certifications = () => {
  return (
    <div className="container mx-auto sm:px-20 px-4 mb-10">
      <h2 className="mb-5">Certifications</h2>
      <div className="flex md:flex-row flex-col items-center">
        <div className="md:basis-1/4 flex justify-center mb-4 md:mb-0">
          <Image
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
            alt="Microsoft Azure Fundamentals badge"
            width={150}
            height={150}
          />
        </div>
        <div className="md:basis-3/4 p-4">
          <p className="sm:text-4xl text-2xl font-medium">
            Microsoft Azure Fundamentals
          </p>
          <p className="text-xl">AZ-900</p>
          <p className="text-xl text-secondary">Microsoft</p>
          <p className="text-lg mt-2">
            <span className="font-bold">Earned:</span> January 14, 2026
          </p>
          <p className="text-lg">
            <span className="font-bold">Certification number:</span>{" "}
            U77394-C9B835
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
