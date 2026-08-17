import { Route, Routes } from 'react-router-dom'
import './App.css'
import Box from '@mui/material/Box';
import HomeIndex from './pages/Home/HomeIndex';
import Footer from './components/Footer';
import NavbarIndex from './components/Navbar/NavbarIndex';
import Index from './pages/Services/WebsiteDesignAndDevelopment/Index';
import AboutIndex from './pages/About/AboutIndex';
import WebAppIndex from './pages/Services/WebApplication/WebAppIndex';
import CustomIndex from './pages/Services/CustomizeApplication/customIndex';
import WebhostingIndex from './pages/Services/WebHosting/WebhostingIndex';
import MobAppIndex from './pages/Services/MobileApplication/MobAppIndex';
import BulksmsIndex from './pages/Services/Bulk_sms/BulksmsIndex';
import DigiMarketIndex from './pages/Services/DigitalMarketing/DigiMarketIndex';
import DataAnalysIndex from './pages/Services/DataAnalysyst/DataAnalysIndex';
import SeoIndex from './pages/Services/SEO/SeoIndex';
import SocialMediaIndex from './pages/Services/SocialMedia/SocialMediaIndex';
import TrainingFooter from './components/TrainingFooter';
import UiUxIndex from './pages/Training/UIUX/UiUxIndex';
import MernIndex from './pages/Training/MERN/MernIndex';
import MobappIndex from './pages/Training/MobileApp/MobappIndex';
import PythonIndex from './pages/Training/Python/PythonIndex'
import JavaIndex from './pages/Training/JAVA/JavaIndex'
import DatascienceIndex from './pages/Training/DataScience/DatascienceIndex';
import AiIndex from './pages/Training/AI/AiIndex';
import DevOpsIndex from './pages/Training/DevOps/DevOpsIndex';
import DMIndex from './pages/Training/DigitalMarketing/DMIndex';
import ProductIndex from './pages/Products/All_Product/ProductIndex';
import ServiceIndex from './pages/Services/All_Services/ServiceIndex';
import TrainingIndex from './pages/Training/All_Training/TrainingIndex';
import EcomIndex from './pages/Products/ECommerce/EcomIndex';
import CrmIndex from './pages/Products/CRM/CrmIndex';
import ErpIndex from './pages/Products/ERP/ErpIndex';
import HrmIndex from './pages/Products/BioometricHRM/HrmIndex';
import SchoolERPIndex from './pages/Products/SchoolERP/SchoolERPIndex';
import GoldloanIndex from './pages/Products/GoldLoan/GoldloanIndex';
import MatriIndex from './pages/Products/Matrimony/matriIndex';
import MedicalbillIndex from './pages/Products/MedicalBill/MedicalbillIndex';
import MiniBankIndex from './pages/Products/MiniBanking/MiniBankIndex';
import BlogIndex from './pages/Blog/BlogIndex';
import ContactIndex from './pages/Contact/ContactIndex';

function App() {

  return (
    <>
    <NavbarIndex />
    <Box sx={{width:"100%"}}>
      <Routes>
        <Route path="/" element={<HomeIndex/>}/>
        {/* service pages */}
        
        <Route path='/services/web-design' element={<Index/>}/>
        <Route path='/services/web-app' element={<WebAppIndex/>}/>
        <Route path='/services/custom-app' element={<CustomIndex/>}/>
        <Route path='/services/domain-hosting' element={<WebhostingIndex/>} />
        <Route path='/services/mobile-app' element={<MobAppIndex/>} />
        <Route path='/services/bulk-sms' element={<BulksmsIndex/>} />
        <Route path='/services/digital-marketing' element={<DigiMarketIndex/>} />
        <Route path='/services/data-analyst' element={<DataAnalysIndex/>} />
        <Route path='/services/seo' element={<SeoIndex/>} />
        <Route path='/services/youtube-instagram-ads' element={<SocialMediaIndex/>} />
        <Route path='/services/all-services' element={<ServiceIndex/>} />


        {/* Training Page */}

        <Route path='/training/all-training' element={<TrainingIndex/>} />
        <Route path='/training/ui-ux' element={<UiUxIndex/>}/>
        <Route path='/training/full-stack' element={<MernIndex/>} />
        <Route path='/training/mobile-app' element={<MobappIndex/>} />  
        <Route path='/training/python' element={<PythonIndex/>} />
        <Route path='/training/java' element={<JavaIndex/>} />
        <Route path='/training/data-science' element={<DatascienceIndex/>} />
        <Route path='/training/artificial-intelligence' element={<AiIndex/>} />
        <Route path='/training/devops' element={<DevOpsIndex/> } />
        <Route path='/training/digital-marketing' element={<DMIndex/>} />


        {/* Product page */}

        <Route path='/products/all-products' element={<ProductIndex/>} />
        <Route path='/products/ecommerce' element={<EcomIndex/>} />
        <Route path='/products/crm' element = {<CrmIndex/>} />
        <Route path='/products/erp' element={<ErpIndex/>} />
        <Route path='/products/hrm' element={<HrmIndex/>} />
        <Route path='/products/school-erp' element={<SchoolERPIndex/>} />
        <Route path='/products/gold-loan' element={<GoldloanIndex/>} />
        <Route path='/products/matrimonial' element={<MatriIndex/>} />
        <Route path='/products/medical-billing' element={<MedicalbillIndex/>} />
        <Route path='/products/mini-banking' element={<MiniBankIndex/>} />


        <Route path='/blog' element={<BlogIndex/>} />



        <Route path='/aboutus' element={<AboutIndex/>}/>
        <Route path='/contactus' element={<ContactIndex/>}/>
        

        <Route path='/footer' element={<Footer/>}/>
        <Route path='/trainingfooter' element={<TrainingFooter/>}/>

      </Routes>
    </Box>
    {/* <Footer/> */}
    </>
  )
}

export default App
