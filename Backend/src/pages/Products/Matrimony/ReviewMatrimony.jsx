import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import google from '../../../assets/Images/product/ecommerce/google.png'
import Vijay from "../../../assets/Images/Vijay.jpg"
import { CommonButton } from '../../../StyledComponents/CommonButton';
import DomainIcon from '@mui/icons-material/Domain';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';


const ReviewMatrimony = () => {
    

const reviewData = [
        {
            id: 1,
            name: "R. Senthil Kumar",
            company: "Managing Trustee, SSK Matrimony",
            review:
           "Kitkat built an excellent matrimony portal for our community. The team understood our needs perfectly and delivered on time with great support.",
            image: Vijay,
        },
         {
            id: 2,
            name: "R. Senthil Kumar",
            company: "Managing Trustee, SSK Matrimony",
            review:
           "Kitkat built an excellent matrimony portal for our community. The team understood our needs perfectly and delivered on time with great support.",
            image: Vijay,
        },
  {
            id: 3,
            name: "R. Senthil Kumar",
            company: "Managing Trustee, SSK Matrimony",
            review:
           "Kitkat built an excellent matrimony portal for our community. The team understood our needs perfectly and delivered on time with great support.",
            image: Vijay,
        },
       
        ];

        const logoArray = [
            {
                text:'Shaadi Sangam',
                logo:DomainIcon,
            },
               {
                text:'Elite Matrimony',
                logo:FilterVintageIcon,
            },
               {
                text:'NRI Jeevansathi',
                logo:LocalFireDepartmentIcon,
            },
               {
                text:'Kongu Matrimony',
                logo:ShieldMoonIcon,
            },
               {
                text:'TamilNadu Matrimony',
                logo:FilterVintageIcon,
            },
               {
                text:'and Many More...',
            
            },
        ]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:{lg:8},display:"flex",justifyContent:"center"}}>
                <Grid size={{xs:12,sm:6,lg:4.5}} sx={{display:"flex",flexDirection:"column",gap:2,px:4}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Typography sx={{fontWeight:700, color:'#071B52', fontSize:'1.5rem'}}>What Our Clients Say</Typography>
                        <Box component={"div"} sx={{width:"100px",height:"2px",backgroundColor:"#0749C4"}}></Box>
                    </Box>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop
                              style={{
                                    width: "100%",
                                    paddingBottom: "40px",
                                    zIndex:0
                                }}
                            >
                                {
                                    reviewData.map((item,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Card sx={{border:"2px solid #EBF0F3",boxShadow:"0",borderRadius:4}}>
                                                    <CardContent sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{color:"#b40c52", fontSize:'40px'}}>
                                                            ❝
                                                        </Typography>
                                                        <Typography sx={{fontSize:15, color:'#071B52',}}>{item.review}</Typography>
                                                        <Box sx={{display:"flex",alignItems:"center",gap:2,mt:1}}>
                                                            <Avatar src={item.image}/>
                                                            <Box>
                                                                <Typography sx={{color:'#00030c',fontSize:14 , fontWeight:550}}>{item.name}</Typography>
                                                                <Typography sx={{color:'#071B52', fontSize:13 }}>{item.company}</Typography>
                                                                    <span><Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                                                                      {[...Array(5)].map((_, i) => (
                                                                        <FaStar key={i} size={20} color="#FDB022" />
                                                                      ))}
                                                                    </Box></span>
                                                            </Box>
                                                            
                                                        </Box>
                                                    
                                                    </CardContent>
                                                    
                                                </Card>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                        </Swiper>
                        
                </Grid>
                <Grid size={{xs:12,sm:6,lg:3}} sx={{display:'flex',p:3,border:"1px solid #EBF0F3", height:'300px', borderRadius:'20px'}}>
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                        <Box sx={{display:"flex",alignItems:"center", mb:6}}>
                            <Box component={'img'} src={google} sx={{color:"#0749C4", height:40, width:50}}/>
                            <Typography sx={{fontWeight:800, fontSize:'22px', color:'#071B52', }}>Google Reviews</Typography>
                        </Box><br />
                        <Box sx={{display:"flex",flexDirection:"column",gap:1, mt:-10}}>
                            <Typography component={'h1'} variant='h4' sx={{fontWeight:600}}>4.9</Typography><span><Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={20} color="#FDB022" />
            ))}
          </Box></span>
                            <Box></Box>
                            <Typography component={"p"} variant='p' sx={{mb:2}}>Based on 120+ reviews</Typography>
                            <CommonButton variant='outlined' endIcon={<EastOutlinedIcon/>} sx={{border:'2px solid #f7b0ce', color:'#b40c52', fontWeight:'bold'}}>Read All Reviews</CommonButton>
                        </Box>
                        <Box></Box>
                    </Box>
                </Grid>
                <Grid size={{xs:12,sm:8,lg:4.5}} sx={{display:"flex",flexDirection:"column"}}>
         <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Typography sx={{ fontWeight: 800, color: '#071B52', fontSize: '20px' }}>
    Our Happy Clients
  </Typography>
</Box>

<Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
    mt: 4,
    justifyItems: "center",
  }}
>
  {logoArray.map((item, index) => {
    const Logo = item.logo;
    return (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          height: "90px",
          width: "100%",
          maxWidth: 155,
          border: "1px solid #EBF0F3",
          borderRadius: 3,
          px: 1.5,
          backgroundColor: "#fff",
        }}
      >
        {Logo && (
          <Logo sx={{ fontSize: "32px", color: "#b40c52", flexShrink: 0 }} />
        )}
        <Typography sx={{ color: "#071B52", fontSize: "13px", fontWeight: 600 }}>
          {item.text}
        </Typography>
      </Box>
    );
  })}
</Box>
                    <Box></Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ReviewMatrimony;