// import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';
import Appointment from '@mui/icons-material/MedicalInformation';
import Article from '@mui/icons-material/Newspaper';
import PetsIcon from '@mui/icons-material/Pets';
import CartIcon from '@mui/icons-material/AddShoppingCart';
import NoticeIcon from '@mui/icons-material/FeaturedVideo';

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
    icon: PetsIcon,
    desc: 'Pet Mart',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: CartIcon,
    desc: 'Product Mart',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: NoticeIcon,
    desc: 'Notices',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  
];

export default navbarList;
