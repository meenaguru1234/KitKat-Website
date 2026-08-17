import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Forward10OutlinedIcon from '@mui/icons-material/Forward10Outlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Bannerpython = () => {
    const infoArray = [
        {
            icon: DevicesOutlinedIcon,
            number:'10+',
            text: "Years of Experience",
            isnumber:true
        },
        {
            icon: TroubleshootOutlinedIcon,
            number:'500+',
            text: "Students Trained",
            isnumber:true

        },
        {
            icon: Forward10OutlinedIcon,
            number:'200+',
            text: "Use projects Completed",
            isnumber:true

        },
        {
            icon: VerifiedUserOutlinedIcon,
            number:'95+',
            text: "Placement Rate",
            isnumber:true

        },
        {
            icon: AlarmOutlinedIcon,
            number:'Small Batch',
            text: "Size",
            isnumber:false

        },
        {
            icon: CalendarMonthIcon,
            number:'Weekend &',
            text: "Weekday Batches",
            isnumber:false

        },
           {
            icon: SupportAgentOutlinedIcon,
            number:'Online Classes',
            text: "Available",
            isnumber:false

        },
    ];

    return (
        <Grid container sx={{backgroundColor:"#042F60"}}>
            {infoArray.map((item, index) => {
                 const Icon = item.icon;
                 return (
                    <Grid size={{xs:6,md:'grow'}}>
                        <Box key={index} sx={{height:"100%",display:"flex",px:2,py:1,alignItems:"center",
                            gap:2,color:"white",flexGrow:1,justifyContent:{xs:"start",lg:"center"},borderRight:{xs:"none",md:item.borderRight ? "2px solid white" : ""}}}>
                            <Box>
                                <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"2rem"}}}/>
                            </Box>

                            <Box>
                                <Typography sx={{fontSize: item.isnumber ? {xs:"0.8rem",md:"0.9rem",lg:"1.4rem"} : {xs:"0.8rem",md:"0.9rem",lg:"0.95rem"}}}>{item.number}</Typography>

                                <Typography sx={{fontSize:{xs:"0.8rem",md:"0.9rem",lg:"0.8rem"}}}>{item.text}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                 );
             })}
        </Grid>
    );
};

export default Bannerpython;