import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <h1>Interviewing</h1>
        <div className="overflow-x-auto">
          <table className="table-fixed m-10 border-collapse border-2 border-slate-400 sm:w-11/12">
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
                <td className="header-row">Booz Allen Hamilton</td>
                <td className="completed">Complete</td>
                <td className="completed">Completed</td>
                <td className="completed">N/A</td>
                <td className="offer">Offer Accepted!</td>
              </tr>
              <tr>
                <td className="header-row">Agilify</td>
                <td className="completed">Complete</td>
                <td className="completed">Technical</td>
                <td className="completed">Complete</td>
                <td className="scheduled">Awaiting Offer</td>
              </tr>
              <tr>
                <td className="header-row">CereCore HCA Healthcare</td>
                <td className="completed">Complete</td>
                <td className="completed">Complete</td>
                <td className="completed">N/A</td>
                <td className="scheduled" >Awaiting Offer</td>
              </tr>
              <tr>
                <td className="header-row">Xenith Solutions</td>
                <td className="completed">Complete</td>
                <td className="completed">Complete</td>
                <td>Not Scheduled</td>
                <td>Not Scheduled</td>
              </tr>
              <tr>
                <td className="header-row">OptumServe Health Services</td>
                <td className="completed">Complete</td>
                <td className="completed">Complete</td>
                <td>Not Scheduled</td>
                <td>Not Scheduled</td>
              </tr>
              <tr>
                <td className="header-row">Public Consulting Group (Kavaliro)</td>
                <td className="completed">Complete</td>
                <td>Not Scheduled</td>
                <td>Not Scheduled</td>
                <td>Not Scheduled</td>
              </tr>
              <tr>
                <td className="header-row">Procentia</td>
                <td className="completed">Complete</td>
                <td className="completed">Complete</td>
                <td>Not Scheduled</td>
                <td>Not Scheduled</td>
              </tr>
              <tr>
                <td className="header-row">Humana Military</td>
                <td className="completed">Complete</td>
                <td className="completed">Complete</td>
                <td className="completed">N/A</td>
                <td className="bg-red-300">Offer Declined</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}
 
export default page;