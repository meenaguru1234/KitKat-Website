import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HerosecImage from '../../../assets/Images/HerosecImage.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Avatar, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import tcs from "../../../assets/Images/tcs.png"
import infosys from "../../../assets/Images/infosys.png"
import wipro from "../../../assets/Images/wipro.png"
import cognizant from "../../../assets/Images/cognizant.png"
import zoho from "../../../assets/Images/zoho.png"


const PlacementJava = () => {
  
    
    const placementArray = [
  "Dedicated Placement Cell",
  "100+ Hiring Partners",
  "Mock Interviews",
  "Aptitude & Technical Training",
  "Interview Preparation",
  "Every Weekends",
  "Guidance"
];

    const companylogo = [
        {
           logo: tcs
        },
        {
            logo:infosys

        },
        {
            logo:wipro

        },
         {
            logo:cognizant

        },
         {
            logo:zoho

        }
    ]




    return (
      <Box sx={{ mt: 4, border: "1px solid #e5e5e5",  borderRadius: 3, p: 4,  bgcolor: "#fff", }}>
         <Grid container spacing={4}>
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography sx={{fontSize: "1.3rem", fontWeight: 700, color: "#001E4E", mb: 3,textAlign: "center", }}  >
              PLACEMENT ASSISTANCE THAT WORKS
            </Typography>

                <Grid container spacing={2}>
              {placementArray.map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
              <CheckCircleIcon
                sx={{ color: "#16a34a", fontSize: 22 }}
              />

              <Typography sx={{ fontSize: "0.8rem" }}>
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>

    {/* Right Side */}
    <Grid
      size={{ xs: 12, md: 5 }}
      sx={{ display: "flex", flexDirection:{xs:'column', md:'row'}, justifyContent: "center" , p:2, gap:4}}
    >
     

      {
        companylogo.map((item, index)=>{
            return(
           <Box  key={index} sx={{display: "flex", alignItems: "center", justifyContent: "center", width: 250, height: 130,}}>
                <Box component="img" src={item.logo}  alt="company logo"  
                    sx={{ width: "100%", height: "100%", objectFit: "contain", }} />
            </Box>

            )
        })
      }
    </Grid>
  </Grid>
</Box>
    );
}

export default PlacementJava;
