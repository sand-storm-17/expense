import MonthlyDetails from "./monthlyDetails";
import OverallOwed from "./overallOwed";
import SpendAnalysisGraph from "./spendAnalysisGraph";

export default function Insights() {
  return (
    <div className="flex flex-col grow justify-around">
      <div className="flex justify-around">
        <MonthlyDetails />
        <OverallOwed />
      </div>
      <div className="flex-grow">
        <SpendAnalysisGraph/>
      </div>
    </div>
  );
}
