// import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Search from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const navbarList = [
    {
        icon: Search,
        desc: 'Search',
        secondDesc: '',
        badge: 0,
        subList: [],
    },
    {
        icon: DashboardIcon ,
        desc: 'Dashboard',
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
    // must add logics to update the badges
    },
    {
        icon: AccessibilityIcon ,
        desc: 'Handle Managers',
        secondDesc: '',
        badge: 1,
        subList: [],
    },

];

export default navbarList;
