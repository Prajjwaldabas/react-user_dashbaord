
import './App.css';
import Dashboard from './Components/Dashboard';
import userImage from './Assets/avatar/user.png'
import clientImage from './Assets/avatar/clients.jpeg'


const clientLabels =[
  { label: 'Avatar', key: 'avatar' },
  { label: 'Name', key: 'name' },
  { label: 'Total Projects', key: 'totalProjects' },
  { label: 'Completed Projects', key: 'completedProjects' },
  { label: 'Current Project', key: 'currentProject' },
  { label: 'Due Date', key: 'dueDate' },
  {label:'Action',key :'action'}
]

const userLabels =[
  { label: 'Avatar', key: 'avatar' },
  { label: 'Name', key: 'name' },
  { label: 'Email Id', key: 'email' },
  { label: 'Job Title', key: 'jobTitle' },
  { label: 'Monthly Leave', key: 'monthlyLeave' },
   {label:'Action',key :'action'}
]

const clients = [
  {
    avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
    avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
    avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
    avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    
    dueDate: '2023-08-30',
   
  },
  {
   
    avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
      
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
     
      avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
    
      avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
    
      avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
     
      avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  {
     
    avatar: clientImage,
    name: 'John Doe',
    totalProjects: 10,
    completedProjects: 5,
    currentProject: 'Project X',
    dueDate: '2023-08-30',
   
  },
  // Add more data objects for additional rows...
];

const users = [
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   
  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
  {
    avatar: userImage,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    jobTitle:'Front End Developer',
    monthlyLeave: '1',
   

  },
]





function App() {
  return (
    <div className="App flex jcc aic fd-col">
<Dashboard labels={clientLabels} data={clients} name={"Clients"}/>
<Dashboard labels={userLabels} data= {users} name={"Users"}/>
    </div>
  );
}

export default App;
