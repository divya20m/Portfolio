import Button from "@mui/material/Button";
import login from './Image/login.png';
import d3 from './Image/d3.js.png';
import todo from './Image/todo.png';
import dresses from './Image/dresses.png';

export const users = [
  {
    id: 1,
    name: "Todo",
    deployedfrontendurl: "https://crud-frontend-red.vercel.app/AllLists",
    backendurl: "",
    sourcefrontend: "https://github.com/divya20m/todo",
    image:todo,
    description:"A simple Todo webpage using React.js."
  },
  {
    id: 2,
    name: "D3.js",
    deployedfrontendurl: "https://black-coffer-frontend-green.vercel.app/",
    backendurl: "https://github.com/divya20m/Black-Coffer-Backend",
    sourcefrontend: "https://github.com/divya20m/BlackCoffer-Frontend",
    image:d3,
    description:"A simple Project using d3.js."
  },
  {
    id: 3,
    name: "Shopping Application",
    deployedfrontendurl: "https://my-dresses-frontend-ptfn.vercel.app/",
    backendurl: "https://github.com/divya20m/my-dresses-backend",
    sourcefrontend: "https://github.com/divya20m/my-dresses-frontend",
    image:dresses,
    description:"An E-Commerce Application using React.js Node.js and MonogoDB." 
  },
  {
    id: 4,
    name: "PassWord Reset",
    deployedfrontendurl: "https://password-reset-frontend-eosin.vercel.app/",
    backendurl: "https://github.com/divya20m/password-reset-backend",
    sourcefrontend: "https://github.com/divya20m/password--reset--frontend",
    image:login,
    description:"Authentication and Authorisation."
  },
];


export function Project({
  handlebackend,
  handlefrontend,
  deployedhandlefrontend,
}) {
  return (
   
    <div className="project-sec" >
      <div className="heading">
  <h1 className="heading-title">My Projects</h1>
</div>
    <div className="card-arrangements">
    {users.map((users) => (
    <div className="cards">
    <div className='card-contents'>
      <img className='card-image' src={users.image} alt={users.name} />
      <h2>{users.name}</h2>
      <p className='card-description'>{users.description}</p>
      <div className='card-info'>
      <Button
                className="Button"
                  color="secondary"
                  onClick={() => handlebackend(users.backendurl)}
                  size="small"
                >
                  {" "}
                  Source Backend
                </Button>
                <Button
                className="Button"
                  color="secondary"
                  onClick={() => handlefrontend(users.sourcefrontend)}
                  size="small"
                >
                  Source Frontend
                </Button>
                <Button
                className="Button"
                  color="secondary"
                  onClick={() =>
                    deployedhandlefrontend(users.deployedfrontendurl)
                  }
                  size="small"
                >
                  Deployed Frontend
                </Button>
        </div>
      </div>
      <hr />
    </div>
     ))}
    </div>
     </div>
  );
}
