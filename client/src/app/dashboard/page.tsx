import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";
import PopularProducts from "./CardPopularProducts";
import PurchaseSummary from "./CardPurchaseSummary";
import SalesSummary from "./CardSalesSummary";
import CardExpenseSummary from "./CardExpenseSummary";
import StatCard from "./StatCard";

const Dashboard = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid">
      <PopularProducts></PopularProducts>
      <SalesSummary></SalesSummary>
      <PurchaseSummary></PurchaseSummary>
      <CardExpenseSummary></CardExpenseSummary>
      <StatCard 
      title="Customer & Expenses"
      primaryIcon={<Package className="text-blue-600 w-6 h-6"></Package>}
      dataRange="22-29 October 2023"
      details={[
        {
          title: "Customer Growth",
          amount: "175.00",
          changePercentage: 131,
          IconComponent: TrendingUp,
        },
        {
          title: "Expenses",
          amount: "10.00",
          changePercentage: -56,
          IconComponent: TrendingDown,
        },
      ]}
      ></StatCard>
      
      <div className="row-span-3 xl:row-span-2 bg-gray-500"></div>
    </div>
  );
};

export default Dashboard;
