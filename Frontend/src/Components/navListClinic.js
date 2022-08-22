// import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
//import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import BorderColor from '@mui/icons-material/BorderColor';
import Payment from '@mui/icons-material/Payment';
import Search from '@mui/icons-material/Search';

const navbarListClinic = [
  {
    icon: Search,
    desc: 'Search',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  // {
  //   icon: DashboardOutlined,
  //   desc: 'Dashboard',
  //   secondDesc: '',
  //   badge: 0,
  //   subList: [],
  // },
  {
    icon: Person,
    desc: 'Clinc Profile',
    secondDesc: '',
    badge: 0,
    subList: [],
    href :'ClinicProfile'
  },
  // {
  //   icon: Forum,
  //   desc: 'Discussion',
  //   secondDesc: 'Message from andi',
  //   badge: 2,
  //   subList: [
  //     {
  //       desc: 'chat',
  //       badge: 2,
  //     },
  //     {
  //       desc: 'reminder',
  //       badge: 0,
  //     },
  //   ],
  // },
  {
    icon: Analytics,
    desc: 'Appointments',
    secondDesc: '',
    badge: 0,
    subList: [],
    href :'AppointmentMain'
  },
  // {
  //   icon: FolderOpen,
  //   desc: 'Folder',
  //   secondDesc: '',
  //   badge: 0,
  //   subList: [],
  // },
  {
    icon: BorderColor,
    desc: 'Notices',
    secondDesc: '',
    badge: 0,
    subList: [],
    href :'ViewNoticeMain'
  },

  {
    icon: Payment,
    desc: 'Payment',
    secondDesc: '',
    badge: 0,
    subList: [],
    href :'PaymentMain'
  },

  
];

export default navbarListClinic;
