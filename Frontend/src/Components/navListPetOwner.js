// import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Search from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import BookOnlineIcon from '@mui/icons-material/BookOnline';


const navListPetOwner = [
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
    // path: '/MyProfile',
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
    icon: ProductionQuantityLimitsIcon,
    desc: 'Pet Products',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: PetsIcon,
    desc: 'Pet Mart',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: FeaturedVideoIcon,
    desc: 'Notice',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: BookOnlineIcon,
    desc: 'Appointment',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  
];

export default navListPetOwner;
