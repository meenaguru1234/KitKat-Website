import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import GroupsIcon from '@mui/icons-material/Groups';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Forward10OutlinedIcon from '@mui/icons-material/Forward10Outlined';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BannerDevOps = () => {
    const infoArray = [
        {
            icon: Diversity2OutlinedIcon,
            number:'10+',
            text: "Years of Experience",
            isnumber:true,
            color:'#0e6fdf'
        },
        {
            icon: GroupsIcon,
            number:'500+',
            text: "Students Trained",
            isnumber:true,
            color:'#dfc00e'

        },
        {
            icon: Forward10OutlinedIcon,
            number:'100+',
            text: "Live projects Completed",
            isnumber:true,
            color:'#df5e0e'    

        },
        {
            icon: VerifiedUserOutlinedIcon,
            number:'100%',
            text: "Placement Rate",
            color:'#54df0e',
            isnumber:true

        },
        {
            icon: Groups2OutlinedIcon,
            number:'Small ',
            text: "Batch Size",
            color:'#0e6fdf',
            isnumber:false

        },
        {
            icon: CalendarMonthIcon,
            number:'Weekend &',
            text: "Weekday Batches",
            isnumber:false,
            color:'#df5e0e' 

        },
           {
            icon: LaptopChromebookIcon,
            number:'Online Classes',
            text: "Available",
            color:'#0e6fdf',
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
                                <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"2.8rem"}, color:item.color}}/>
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

export default BannerDevOps;