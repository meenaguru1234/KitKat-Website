import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function (
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
 {
  stage:'1', 
  module:"	Digital Marketing Fundamentals" ,
  topiccovered:"Overview, Digital Channels, Buyer Persona, Marketing Funnel, SWOT Analysis" ,
  outcome:"Understand digital marketing ecosystem and strategy" ,


 },
  {
  stage:'2', 
  module:"	SEO Course (Search Engine Optimisation)" ,
  topiccovered:"Keyword Research, On-page SEO, Off-page SEO, Technical SEO, Link Building, SEO Tools" ,
  outcome:"Rank websites and drive organic traffic" ,


 },
  {
  stage:'3', 
  module:"	Social Media Marketing Course" ,
  topiccovered:"Social Media Strategy, Content Planning, Community Management, Paid Social Ads" ,
  outcome:"Build brand presence and engage target audience" ,


 },
 {
  stage:'4', 
  module:"Performance Marketing Course & Google Ads Course" ,
  topiccovered:"Google Ads (Search, Display, Shopping), Bidding Strategies, Conversion Tracking, Retargeting, Performance Marketing" ,
  outcome:"Run profitable ad campaigns and generate leads" ,


 },

 {
  stage:'5', 
  module:"	Content Marketing Course" ,
  topiccovered:"Blog Writing, Storytelling, Content Calendar, Content Distribution, Copywriting" ,
  outcome:"Create valuable content that attracts and converts" ,


 },
 {
  stage:'6', 
  module:"	Email Marketing & Marketing Automation" ,
  topiccovered:"List Building, Email Campaigns, Automation Workflows, Segmentation, A/B Testing" ,
  outcome:"Build relationships and improve customer retention" ,


 },
  {
  stage:'7', 
  module:"		Web Analytics & Reporting" ,
  topiccovered:"Google Analytics 4, Goals, Events, Conversion Tracking, Dashboards & Reports" ,
  outcome:"Measure performance and make data-driven decisions" ,


 },
  {
  stage:'8', 
  module:"	Capstone Project (Live Campaign)" ,
  topiccovered:"Plan, Execute and Analyse a Complete Digital Marketing Campaign" ,
  outcome:"Gain real-world experience and build your portfolio" ,


 },
];

export default function DigitalSyllabusTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor:'#071B52', color:'white'}}>
            <TableCell sx={{color:'white', textAlign:'center', fontSize:'1rem', fontWeight:550}}>Stage</TableCell>
            <TableCell sx={{color:'white', textAlign:'center', fontSize:'1rem', fontWeight:550}}>Module</TableCell>
            <TableCell sx={{color:'white', textAlign:'center', fontSize:'1rem', fontWeight:550}}>Topic Covered</TableCell>
            <TableCell sx={{color:'white', textAlign:'center', fontSize:'1rem', fontWeight:550}}>Outcome</TableCell>
             </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow  key={index} >
              <TableCell sx={{bgcolor:'#071B52', color:'white', textAlign:'center', fontWeight:550, fontSize:'1rem'}}>{row.stage}</TableCell>              
              <TableCell sx={{color:'#071B52', fontSize:'1rem', fontWeight:550}}>{row.module}</TableCell>
              <TableCell sx={{color:'#071B52', fontSize:'1rem', fontWeight:550}}>{row.topiccovered}</TableCell>
              <TableCell sx={{color:'#071B52', fontSize:'1rem', fontWeight:550}}>{row.outcome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
