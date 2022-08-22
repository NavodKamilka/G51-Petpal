// import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Search from '@mui/icons-material/Search';

import Product from '@mui/icons-material/ProductionQuantityLimitsRounded';
import Pet from '@mui/icons-material/PetsRounded';
import Payment from '@mui/icons-material/PaidRounded';
const navListShop = [
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
    href:'ShopProfileFinal'
  },
  {
    icon: Product,
    desc: 'Products',
    secondDesc: '',
    badge: 0,
    href:'FoodTableFinal',
    subList: [
      // {
      //   desc: 'chat',
      //   badge: 2,
      // },
      // {
      //   desc: 'reminder',
      //   badge: 0,
      // },
    ],
  },
  {
    icon: Pet,
    desc: 'Pets',
    secondDesc: '',
    badge: 0,
    href:'PetsFinal',
    subList: [],
  },
  {
    icon: Payment,
    desc: 'Payment',
    secondDesc: '',
    badge: 0,
    href:'PaymentFinal',
    subList: [],
  },
  // {
  //   icon: BorderColor,
  //   desc: 'Edit',
  //   secondDesc: '',
  //   badge: 0,
  //   subList: [],
  // },
];

export default navListShop;
