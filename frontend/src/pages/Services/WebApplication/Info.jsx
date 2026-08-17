import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Grid from "@mui/material/Grid";
const Info = () => {
    const infoArray = [
        {
            icon: HubOutlinedIcon,
            text: "Custom Solutions Built For You",
        },
        {
            icon: DeviceHubOutlinedIcon,
            text: "Scalabale & Future Ready Architecture",
        },
        {
            icon: VerifiedUserOutlinedIcon,
            text: "Secure,Reliable & High Performance",
        },
        {
            icon: AnchorOutlinedIcon,
            text: "Agile Development & Transparent Process",
        },
        {
            icon: EventAvailableOutlinedIcon,
            text: "On-time Delivery Every Time",
        },
        {
            icon: SettingsOutlinedIcon,
            text: "Ongoing Support & Maintenance",
        },
    ];
    return (
        <Grid container sx={{backgroundColor:"#042F60"}}>
            {infoArray.map((item, index) => {
                 const Icon = item.icon;
                 return (
                    <Grid size={{xs:6,md:2}}>
                        <Box key={index} sx={{height:"100%",display:"flex",px:4,py:2,alignItems:"center",
                            gap:2,color:"white",flexGrow:1,justifyContent:{xs:"start",lg:"center"},
                            borderRight:{xs:"none",md:item.borderRight ? "2px solid white" : ""}}}>
                            <Box>
                                <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"2rem"}}}/>
                            </Box>

                            <Box>
                                <Typography sx={{fontSize:{xs:"0.8rem",md:"0.9rem",lg:"1rem"}}}>{item.text}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                 );
             })}
        </Grid>
    );
}

export default Info;
