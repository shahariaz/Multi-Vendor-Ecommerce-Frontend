import { FaUsers } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import Chart from "react-apexcharts";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
export default function AdminDashboard() {
  const state = {
    series: [
      {
        name: "Orders",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [44, 25, 57, 56, 61, 48, 63, 78, 66],
      },
      {
        name: "Sellers",
        data: [24, 55, 57, 36, 61, 98, 63, 40, 66],
      },
    ],
    options: {
      color: "primary",
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 3,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[rgb(250,232,232)] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$3435</h2>
            <span className="text-md font-medium">Total Sell</span>
          </div>
          <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-xl bg-blue-500">
            <HiCurrencyDollar className="shadow-md text-white" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[rgb(250,232,232)] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-xl bg-blue-500">
            <MdOutlineProductionQuantityLimits className="shadow-md text-white" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[rgb(250,232,232)] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">20</h2>
            <span className="text-md font-medium">Seller</span>
          </div>
          <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-xl bg-blue-500">
            <FaUsers className="shadow-md text-white" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[rgb(250,232,232)] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$34353</h2>
            <span className="text-md font-medium">Oders</span>
          </div>
          <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-xl bg-blue-500">
            <FaShoppingCart className="shadow-md text-white" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#6a5fdf] p-4  rounded-md ">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full  lg:w-5/12 lg:pl-4 lg:mt-o">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent Seller Message
              </h2>
              <Link className="font-semibold text-sm                            text-[#d0d2d6]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-[1] border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                    <img
                      className="w-full rounded-full  h-full"
                      src="http://localhost:5173/images/admin.jpg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 day ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      How are you
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                    <img
                      className="w-full rounded-full  h-full"
                      src="http://localhost:5173/images/admin.jpg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Jaber</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        3 day ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      Why is a am facing this issue?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                    <img
                      className="w-full rounded-full  h-full"
                      src="http://localhost:5173/images/admin.jpg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Hasan</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        4 day ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      Is Product Ready
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#6a5fdf] p-4 rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-[#d0d2d6]">View All</Link>
        </div>
        <div className="relative overflow-x-auto ">
          <table className=" w-full text-sm text-[#d0d2d6] text-left">
            <thead className="uppercase border-b border-slate-700 text-[#d0d2d6]  ">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Payment Status</th>
                <th className="px-4 py-3">Order Status</th>
                <th className="px-4 py-3">Active</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    #3433
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    $456
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>

                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <Link>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
