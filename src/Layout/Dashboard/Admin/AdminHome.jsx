import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaProductHunt, FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red' ];


const AdminHome = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data : stats={} } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })

    const { data : chartData= [] } = useQuery({
        queryKey: ["order-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })
    // custom bar chart shape
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
      
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // PI chart custom shape
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return {
            name: data.category,
            value: data.quantity
        }
    })

    return (
        <div>
            <p className="text-3xl font-medium my-10">Hi, WellCome {user?.displayName ? user.displayName : 'Back'} !</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-4 bg-base-100">
                {/* Revenue */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md w-full py-6">
                    <FaWallet className="text-4xl mb-2" />
                    <h2 className="text-2xl font-bold">${stats.revenue}</h2>
                    <p className="text-lg">Revenue</p>
                </div>
                {/* Customers */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-300 text-white rounded-lg shadow-md w-full py-6">
                    <FaUsers className="text-4xl mb-2" />
                    <h2 className="text-2xl font-bold">{stats.totalUser}</h2>
                    <p className="text-lg">Customers</p>
                </div>
                {/* Products */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-pink-300 text-white rounded-lg shadow-md w-full py-6">
                    <FaProductHunt className="text-4xl mb-2" />
                    <h2 className="text-2xl font-bold">{stats.totalMenu}</h2>
                    <p className="text-lg">Menu</p>
                </div>
                {/* Orders */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg shadow-md w-full py-6">
                    <FaTruck className="text-4xl mb-2" />
                    <h2 className="text-2xl font-bold">{stats.totalOrder}</h2>
                    <p className="text-lg">Orders</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                <div>
                    <BarChart
                        width={350}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={600} height={600}>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;