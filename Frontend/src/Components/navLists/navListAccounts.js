// import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Search from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const navbarList = [
    {
        icon: Search,
        desc: 'Search',
        secondDesc: '',
        badge: 0,
        subList: [],
    },
    {
        icon: ManageAccountsIcon ,
        desc: 'Manage Accounts',
        secondDesc: '',
        badge: 1,
        subList: [],
    },
    {
        icon: GroupAddIcon,
        desc: 'Requests',
        secondDesc: 'Message from andi',
        badge: 2,
        subList: [],
    // must addlogics to update the badges
    },

];

export default navbarList;
