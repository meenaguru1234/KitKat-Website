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
  module:"	Python for Data Science" ,
  topiccovered:"Python Basics, Data Types, Control Flow, Functions, OOPs, NumPy, Pandas" ,
  outcome:"Build strong programming foundation for data science" ,


 },
  {
  stage:'2', 
  module:"	Statistics & Probability" ,
  topiccovered:"	Descriptive Statistics, Probability, Distributions, Hypothesis Testing, Correlation, Regression" ,
  outcome:"Understand data behavior and draw meaningful insights" ,


 },
  {
  stage:'3', 
  module:"Data Cleaning & Exploratory Analysis" ,
  topiccovered:"Data Collection, Missing Values, Outliers, Data Wrangling, EDA with Pandas, Seaborn" ,
  outcome:"Prepare and explore data effectively" ,


 },
 {
  stage:'4', 
  module:"Data Visualization" ,
  topiccovered:"Matplotlib, Seaborn, Plotly, Charts, Dashboards, Storytelling with Data" ,
  outcome:"Create impactful visual reports and dashboards" ,


 },

 {
  stage:'5', 
  module:"	Machine Learning (ML)" ,
  topiccovered:"Supervised & Unsupervised ML, Algorithms, Model Training, Evaluation Metrics, Cross Validation" ,
  outcome:"Build and evaluate machine learning models" ,


 },
 {
  stage:'6', 
  module:"Advanced Machine Learning" ,
  topiccovered:"Ensemble Methods, Hyperparameter Tuning, PCA, Clustering, Time Series Analysis" ,
  outcome:"Apply advanced ML techniques to complex problems" ,


 },
 {
  stage:'7', 
  module:"Capstone Project & Deployment" ,
  topiccovered:"End-to-End Project, Model Deployment using Flask / Streamlit, Git, Presentation" ,
  outcome:"Deploy real-world solutions and build your portfolio" ,


 },
 
];

export default function DataScienceSyllabusTable() {
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
              <TableCell sx={{color:'#071B52', fontSize:'0.9rem', }}>{row.module}</TableCell>
              <TableCell sx={{color:'#071B52', fontSize:'0.9rem', }}>{row.topiccovered}</TableCell>
              <TableCell sx={{color:'#071B52', fontSize:'0.9rem', }}>{row.outcome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
