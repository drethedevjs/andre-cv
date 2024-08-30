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
              <th>Company</th>
              <th>1st Interview</th>
              <th>2nd Interview</th>
              <th>3rd Interview</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="header-row">Agilify</td>
              <td className="completed">Complete</td>
              <td className="completed">Technical</td>
              <td className="completed">Complete</td>
              <td className="scheduled">Awaiting Offer</td>
            </tr>
            <tr>
              <td className="header-row">Humana Military</td>
              <td className="completed">Complete</td>
              <td className="completed">Technical</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
            </tr>
            <tr>
              <td className="header-row">Booz Allen Hamilton</td>
              <td className="completed">Complete</td>
              <td className="scheduled">9/5</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
            </tr>
            <tr>
              <td className="header-row">CereCore HCA Healthcare</td>
              <td className="completed">Complete</td>
              <td className="scheduled">9/6</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
            </tr>
            <tr>
              <td className="header-row">The Rawlings Group</td>
              <td className="scheduled">9/3</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
            </tr>
            <tr>
              <td className="header-row">Tyler Technology</td>
              <td className="completed">Complete</td>
              <td className="completed">Complete</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
            </tr>
            <tr>
              <td className="header-row">Kavaliro</td>
              <td className="completed">Complete</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
              <td>Not Scheduled</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer opacity={30} />
    </>
  );
}
 
export default page;