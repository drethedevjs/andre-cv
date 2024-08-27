import Image
 from "next/image";
const Education = () => {
  return (
    <div className="container mx-auto sm:px-20 px-4 mb-10">
      <h2 className="mb-5">Education</h2>
      <div className="flex md:flex-row flex-col">
        <div className="md:basis-1/2 md:visible md:size-full size-0 flex justify-center">
          <Image src="/ksu-logo.svg" alt="KSU logo" width={490} height={341} />
        </div>
        <div className="md:basis-1/2 p-4">
          <p className="sm:text-4xl text-2xl font-medium">Kentucky State University</p>
          <p className="text-xl">Bachelor of Arts in Mathematics</p>
          <p className="text-xl">May 2007 - Dec 2011</p>
        </div>
      </div>
    </div>
  );
}
 
export default Education;