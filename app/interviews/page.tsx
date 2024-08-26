import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div className="container px-3 pt-8">
        <h1 className="mb-5">Interviewing</h1>
        <a href="/" className="btn">Back</a>
        <table className="table-fixed m-5 border-collapse border-2 border-slate-400 w-full">
        <thead>
          <tr>
            <th className="">Company</th>
            <th className="">1st Interview</th>
            <th className="">2nd Interview</th>
            <th className="">3rd Interview</th>
            <th className="">Final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="header-row">Agilify</td>
            <td className="bg-green-200">Complete</td>
            <td className="bg-green-200">Technical</td>
            <td className="bg-green-200">Complete</td>
            <td className="bg-yellow-100">Awaiting Offer</td>
          </tr>
          <tr>
            <td className="header-row">Walker Healthforce</td>
            <td className="bg-yellow-100">8/26</td>
            <td className="">Not Scheduled</td>
            <td className="">Not Scheduled</td>
            <td className="">Not Scheduled</td>
          </tr>
          <tr>
            <td className="header-row">Tyler Technology</td>
            <td className="bg-green-200">Complete</td>
            <td className="bg-yellow-100">8/26</td>
            <td className="">Not Scheduled</td>
            <td className="">Not Scheduled</td>
          </tr>
          <tr>
            <td className="header-row">Augusta National</td>
            <td className="bg-green-200">Complete</td>
            <td className="">Not Scheduled</td>
            <td className="">Not Scheduled</td>
            <td className="">Not Scheduled</td>
          </tr>
          <tr>
            <td className="header-row">Booz Allen Hamilton</td>
            <td className="bg-yellow-100">8/26</td>
            <td className="">Not Scheduled</td>
            <td className="">Not Scheduled</td>
            <td className="">Not Scheduled</td>
          </tr>
        </tbody>
        </table>
      </div>
      <Footer opacity={30} />
    </>
  );
}
 
export default page;