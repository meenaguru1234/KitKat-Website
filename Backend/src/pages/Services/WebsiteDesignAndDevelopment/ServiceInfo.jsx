import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Forward10OutlinedIcon from '@mui/icons-material/Forward10Outlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Grid from "@mui/material/Grid";

const ServiceInfo = () => {
    const infoArray = [
        {
            icon: DevicesOutlinedIcon,
            text: "Responsive Design All Devices",
        },
        {
            icon: TroubleshootOutlinedIcon,
            text: "SEO Friendly Architecture",
        },
        {
            icon: Forward10OutlinedIcon,
            text: "Fast Loading Performance",
        },
        {
            icon: VerifiedUserOutlinedIcon,
            text: "Secure & Scalable Solutions",
        },
        {
            icon: AlarmOutlinedIcon,
            text: "On-time Delivery Every Time",
        },
        {
            icon: SupportAgentOutlinedIcon,
            text: "Ongoing Support & Maintenance",
        },
    ];

    return (
        <Grid container sx={{backgroundColor:"#042F60"}}>
            {infoArray.map((item, index) => {
                 const Icon = item.icon;
                 return (
                    <Grid size={{xs:6,md:2}}>
                        <Box key={index} sx={{height:"100%",display:"flex",px:5,py:1,alignItems:"center",gap:4,color:"white",flexGrow:1,justifyContent:{xs:"start",lg:"center"},borderRight:{xs:"none",md:item.borderRight ? "2px solid white" : ""}}}>
                            <Box>
                                <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"2.5rem"}}}/>
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
};

export default ServiceInfo;