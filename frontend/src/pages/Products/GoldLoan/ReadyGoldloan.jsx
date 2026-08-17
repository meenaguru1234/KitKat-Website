import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { CommonButton } from "../../../StyledComponents/CommonButton";
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { FaWhatsapp } from "react-icons/fa";



const ReadyGoldloan = () => {



  return (
    <Box sx={{ bgcolor: "#071f3b", color: "#fff", py: 2 , width:'100%', borderRadius:'0px', marginLeft:'0%', mb:-4}}>
      <Grid container alignItems="center">


        
        <Grid size={{ xs: 12, md:6}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "left",
              height: "100%",
              flexDirection:'column',
              px:5
            }}
          >
            <Typography sx={{fontSize:24, fontWeight:600}}>Ready to Digitise Your Gold Loan Business?</Typography>
            <Typography sx={{fontSize:16,fontWeight:500}}>Let Kitkat's gold loan software simplify your operations and grow your profits.</Typography>
       
          </Box>
        </Grid>


         <Grid size={{ xs: 12, md:6}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "100%",
            }}
          >

            <CommonButton startIcon={<LocalPhoneOutlinedIcon/>} sx={{border:'1px solid #FD7A25', fontSize:16, width:200, py:0, px:2, bgcolor:'#FD7A25', alignItems:'left',justifyContent:'flex-start', color:'white', borderRadius:3}}>Call Now <br /> +91 93638 39353</CommonButton>
            <CommonButton startIcon={<FaWhatsapp/>} sx={{border:'1px solid black',fontSize:16, width:200,  py:2, px:2, bgcolor:'#25fd78b1', color:'white', borderRadius:3}}>WhatsApp Chat</CommonButton>
            <CommonButton sx={{border:'1px solid black', py:2, px:2,bgcolor:'#2550fd',fontSize:16, width:200,  color:'white', borderRadius:3}}>Book Free Demo</CommonButton>
            <CommonButton sx={{border:'1px solid black', py:2, px:2,bgcolor:'#2550fd',fontSize:16,  color:'white', borderRadius:10}}><SmsOutlinedIcon/></CommonButton>


       
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default ReadyGoldloan