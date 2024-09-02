import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";
import PopularProducts from "./PopularProducts";
import PurchaseSummary from "./PurchaseSummary";
import SalesSummary from "./SalesSummary";

const Dashboard = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid">
      <PopularProducts></PopularProducts>
      <SalesSummary></SalesSummary>
      <PurchaseSummary></PurchaseSummary>
      <div className="row-span-3 bg-gray-500"></div>
      <div className="row-span-3 xl:row-span-2 bg-gray-500"></div>
      <div className="row-span-3 xl:row-span-2 bg-gray-500"></div>
      <div className="row-span-3 xl:row-span-2 bg-gray-500"></div>
    </div>
  );
};

export default Dashboard;
