import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export const users = [
  {
    id: 1,
    name: "Redux.js",
    deployedfrontendurl: "https://redux-one-gray.vercel.app/",
    backendurl: "https://64fdf829596493f7af7ecfd2.mockapi.io/Products",
    sourcefrontend: "https://github.com/divya20m/redux",
  },
  {
    id: 2,
    name: "D3.js",
    deployedfrontendurl: "https://black-coffer-frontend-green.vercel.app/",
    backendurl: "https://github.com/divya20m/Black-Coffer-Backend",
    sourcefrontend: "https://github.com/divya20m/BlackCoffer-Frontend",
  },
  {
    id: 3,
    name: "PassWord Reset",
    deployedfrontendurl: "https://password-reset-frontend-eosin.vercel.app/",
    backendurl: "https://github.com/divya20m/password-reset-backend",
    sourcefrontend: "https://github.com/divya20m/password--reset--frontend",
  },
  {
    id: 4,
    name: "Shopping Application",
    deployedfrontendurl: "https://todo-sable-three.vercel.app/",
    backendurl: "https://github.com/divya20m/my-dresses-backend",
    sourcefrontend: "https://github.com/divya20m/my-dresses-frontend",
  },
];


export function Project({
  handlebackend,
  handlefrontend,
  deployedhandlefrontend,
  textShadow
}) {
  return (
    <div className="projects">
      <h2 style={{textShadow:textShadow,fontSize:"2rem"}}>Projects</h2>
      <div>
        {users.map((user) => (
          <div className="projects-cards" key={user.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {user.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {user.URL}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                className="Button"
                  color="secondary"
                  onClick={() => handlebackend(user.backendurl)}
                  size="small"
                >
                  {" "}
                  Source Backend
                </Button>
                <Button
                className="Button"
                  color="secondary"
                  onClick={() => handlefrontend(user.sourcefrontend)}
                  size="small"
                >
                  Source Frontend
                </Button>
                <Button
                className="Button"
                  color="secondary"
                  onClick={() =>
                    deployedhandlefrontend(user.deployedfrontendurl)
                  }
                  size="small"
                >
                  Deployed Frontend
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
