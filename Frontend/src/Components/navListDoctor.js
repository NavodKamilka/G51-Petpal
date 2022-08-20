// import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';
import Appointment from '@mui/icons-material/MedicalInformation';
import Article from '@mui/icons-material/Newspaper';

const navbarList = [
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
    desc: 'My Profile',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Appointment,
    desc: 'My Appointments',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Article,
    desc: 'My Articles',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Forum,
    desc: 'Discussion',
    secondDesc: 'Message from andi',
    badge: 2,
    subList: [
      {
        desc: 'chat',
        badge: 2,
      },
      {
        desc: 'reminder',
        badge: 0,
      },
    ],
  },
  {
    icon: Person,
    desc: 'Pet Mart',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Person,
    desc: 'Product Ads',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Person,
    desc: 'Notices',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Analytics,
    desc: 'Analytics',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: FolderOpen,
    desc: 'Folder',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: BorderColor,
    desc: 'Edit',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
];

export default navbarList;
