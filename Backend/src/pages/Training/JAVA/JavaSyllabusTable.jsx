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
  module:"Core Java Foundations" ,
  topiccovered:"Variables, Data Types, Operators, Control Flow, OOPs Concepts, Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation" ,
  outcome:"Build strong programming fundamentals in Java" ,


 },
  {
  stage:'2', 
  module:"Advanced Java Concepts" ,
  topiccovered:"Collections Framework, Generics, Exception Handling, Multithreading, File Handling, Lambda Expressions, Stream API" ,
  outcome:"Write efficient and robust Java applications" ,


 },
  {
  stage:'3', 
  module:"Database Integration (JDBC & SQL)" ,
  topiccovered:"JDBC Basics, CRUD Operations, PreparedStatement, Transactions, SQL Queries, Joins, Stored Procedures" ,
  outcome:"Connect Java applications with databases" ,


 },
 {
  stage:'4', 
  module:"Web Development (Servlets & JSP)" ,
  topiccovered:"Servlet Lifecycle, Request & Response, JSP Basics, EL & JSTL, Filters, Listeners, Session Management" ,
  outcome:"Develop dynamic web applications" ,


 },

 {
  stage:'5', 
  module:"Frameworks (Hibernate)" ,
  topiccovered:"ORM Concepts, Hibernate Configuration, CRUD Operations, HQL, Relationships, Criteria API" ,
  outcome:"Work with ORM and reduce JDBC complexity" ,


 },
 {
  stage:'6', 
  module:"Spring Framework (Spring Core)" ,
  topiccovered:"IoC Container, Dependency Injection, Bean Lifecycle, Spring MVC, Annotations, Validation" ,
  outcome:"Build scalable enterprise applications" ,


 },
 {
  stage:'7', 
  module:"Spring Boot & REST APIs" ,
  topiccovered:"Spring Boot Basics, Starters, RESTful Web Services, Path Variables, Exception Handling, Swagger" ,
  outcome:"Build modern REST APIs using Spring Boot" ,


 },
 {
  stage:'8', 
  module:"Build modern REST APIs using Spring Boot" ,
  topiccovered:"Unit Testing (JUnit), Integration Testing, Maven, Git, GitHub, Deployment on Tomcat / Cloud" ,
  outcome:"Build, test and deploy real-world applications" ,


 },
];

export default function JavaSyllabusTable() {
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
