import Intro from "../components/Intro";
// rrd imports
import { useLoaderData } from "react-router-dom";
// helper function
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import { fetchData } from "../helper";

// loader function

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName,budgets };
}

// actions 
export async function dashboardAction({request}){
const data= await request.formData()
const formData=Object.fromEntries(data)

try {
  

  localStorage.setItem("userName",JSON.stringify(formData.userName))
  return toast.success(`Welcome ${formData.userName}`)
} catch (error) {
  throw new Error("There is a problem create your accounts")
  
}
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
    {
      userName?(
        <div className="dashboard">
          <h1> Welcome Back <span className="accent">{userName}</span></h1>
          <div className="grid-sm">

<div className="grid-lg">
  <div className="flex-lg">
    <AddBudgetForm/>
  </div>
</div>
          </div>
        </div>
      ):(<Intro/>)
    }
    </div>
  );
};

export default Dashboard;
