const Education = () => {
  return (
    <div className="container mx-auto px-20 mb-10">
      <h2 className="mb-5">Education</h2>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <img src="/ksu-logo.svg" alt="KSU logo" />
        </div>
        <div className="basis-1/2">
          <p className="text-4xl font-medium">Kentucky State University</p>
          <p className="text-xl">Bachelor of Arts in Mathematics</p>
          <p className="text-xl">May 2007 - Dec 2011</p>
        </div>
      </div>
    </div>
  );
}
 
export default Education;