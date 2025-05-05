import React, { useEffect } from "react";
import AllCarsPage from "./AllCarsPage";
import AllRentalPage from "./AllRentalPage";
import SideBar from "../components/admin/SideBar";
import AllReview from "./AllReviews";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowUp, Car, DollarSign, TrendingUp, Users } from "lucide-react";

const AdminDashBoard = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) {
    return (
      <h1 className="text-center text-4xl font-bold text-yellow-400">
        Loading...
      </h1>
    );
  }

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 ml-64 bg-gray-50 min-h-screen">
        <div className="w-full overflow-hidden">
          <div className="flex flex-col mb-6 ml-5 mt-5">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-500 mt-1">Last updated: {}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Revenue Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-500 font-medium mb-1">
                    Total Revenue
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                    ₹1,245,000
                  </h2>
                  <div className="flex items-center mt-2 text-emerald-500">
                    <ArrowUp className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="font-medium text-sm">+24%</span>
                    <span className="text-gray-500 text-xs ml-1 whitespace-nowrap">
                      from last month
                    </span>
                  </div>
                </div>
                <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-amber-500" />
                </div>
              </div>
            </div>

            {/* Bookings Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-500 font-medium mb-1">
                    Total Bookings
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    842
                  </h2>
                  <div className="flex items-center mt-2 text-emerald-500">
                    <ArrowUp className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="font-medium text-sm">+18%</span>
                    <span className="text-gray-500 text-xs ml-1 whitespace-nowrap">
                      from last month
                    </span>
                  </div>
                </div>
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <Car className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Users Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-500 font-medium mb-1">
                    Total Users
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    1,253
                  </h2>
                  <div className="flex items-center mt-2 text-emerald-500">
                    <ArrowUp className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="font-medium text-sm">+12%</span>
                    <span className="text-gray-500 text-xs ml-1 whitespace-nowrap">
                      from last month
                    </span>
                  </div>
                </div>
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </div>

            {/* Conversion Rate Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-500 font-medium mb-1">
                    Conversion Rate
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    68%
                  </h2>
                  <div className="flex items-center mt-2 text-emerald-500">
                    <ArrowUp className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="font-medium text-sm">+9%</span>
                    <span className="text-gray-500 text-xs ml-1 whitespace-nowrap">
                      from last month
                    </span>
                  </div>
                </div>
                <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashBoard;
