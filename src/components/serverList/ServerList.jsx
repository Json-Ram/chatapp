import "./serverList.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';


export default function ServerList() {
  return (
    <>
      <h4>Servers</h4>
      <Stack spacing={2} marginTop={2} sx={{backgroundColor: "#23272a"}} >
        <Link href="https://github.com/">
          <div className="server">
            <Avatar alt="Github" src="/assets/servers/s_1.png" sx={{ width: 56, height: 56, backgroundColor: "#23272a" }}>Git</Avatar>
            <h4 className="serverName">Git Hub</h4>
          </div>
        </Link>
        <Link href="https://www.lighthouselabs.ca/en">
          <div className="server">
            <Avatar alt="Lighhouse Labs" src="/assets/servers/s_2.png" sx={{ width: 56, height: 56, backgroundColor: "#23272a" }}/>
            <h4 className="serverName">Lighthouse Labs</h4>
          </div>
        </Link>
        <Link href="https://web.compass.lighthouselabs.ca">
          <div className="server">
            <Avatar alt="Compass" src="/assets/servers/s_3.png" sx={{ width: 56, height: 56, backgroundColor: "#23272a" }}/>
            <h4 className="serverName">Compass</h4>
          </div>
        </Link>
        <Link href="https://skribbl.io/">
          <div className="server">
            <Avatar alt="Scribble" src="/assets/servers/s_4.png" sx={{ width: 56, height: 56, backgroundColor: "#23272a" }} />
            <h4 className="serverName">Skribbl.io</h4>
          </div>
        </Link>
        <Link href="https://code.visualstudio.com/">
          <div className="server">
            <Avatar alt="VS Code" src="/assets/servers/s_5.png" sx={{ width: 56, height: 56, backgroundColor: "#23272a" }}/>
            <h4 className="serverName">VS Code</h4>
          </div>
        </Link>
        <Link href="https://developer.mozilla.org/en-US/">
          <div className="server">
            <Avatar alt="MDN" src="/assets/servers/s_6.png" sx={{ width: 56, height: 56, backgroundColor: "#23272a" }}/>
            <h4 className="serverName">MDN</h4>
          </div>
        </Link>
      </Stack>
    </>
  )
}
