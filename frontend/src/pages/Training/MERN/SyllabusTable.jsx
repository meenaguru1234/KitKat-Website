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
  module:"Front-end Developer" ,
  topiccovered:"HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript (ES6+), DOM, BOM, jQuery, Responsive Web Design" ,
  outcome:"Build responsive and interactive web pages" ,


 },
  {
  stage:'2', 
  module:"React.js Development" ,
  topiccovered:"Components, Props, State, Hooks, React Router, Context API, Redux, Axios" ,
  outcome:"Build modern single-page applications with React" ,


 },
  {
  stage:'3', 
  module:"Back-End Development" ,
  topiccovered:"Node.js, Express.js, RESTful APIs, Middleware, Authentication (JWT)" ,
  outcome:"Build secure and scalable server-side applications" ,


 },
 {
  stage:'4', 
  module:"Database (MongoDB)" ,
  topiccovered:"MongoDB Basics, Collections, CRUD Operations, Aggregation, Mongoose ODM" ,
  outcome:"Store and manage data efficiently in MongoDB" ,


 },

 {
  stage:'5', 
  module:"Full Stack Integration" ,
  topiccovered:"Connecting Frontend with Backend, API Integration, Environment Variables" ,
  outcome:"Integrate UI with APIs seamlessly" ,


 },
 {
  stage:'6', 
  module:"Projects & Deployment" ,
  topiccovered:"3–5 Real-time Projects, Git, GitHub, Deployment on Render/Netlify" ,
  outcome:"Deploy full-stack applications on the cloud" ,


 },
];

export default function SyllabusTable() {
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
