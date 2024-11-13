
import { FaHome, FaCog, FaStar, FaBook, FaPhone, FaInfoCircle, FaFileAlt, FaQuestionCircle, FaNewspaper, FaChartBar, FaBuilding, FaDollarSign, FaExchangeAlt } from 'react-icons/fa';
import ROUTES from "../routes";

// Định nghĩa menuHeader
export const menuHeader = [
    {
        path: ROUTES.HOME,
        name: 'Home',
        icon: FaHome,
        description: 'Return to the homepage'
    },
    {
        path: ROUTES.SOLUTIONS,
        name: 'Solutions',
        icon: FaCog,
        description: 'Explore our solutions for data analysis',
        subMenu: [
            {
                path: ROUTES.COMPANY_REPORT,
                name: 'Company Report',
                icon: FaBuilding,
                description: 'Detailed reports on companies'
            },
            {
                path: ROUTES.OWNERSHIP_STRUCTURE,
                name: 'Ownership Structure',
                icon: FaStar,
                description: 'Understanding ownership distribution'
            },
            {
                path: ROUTES.FINANCIAL_ASSESSMENT,
                name: 'Financial Assessment',
                icon: FaDollarSign,
                description: 'Comprehensive financial evaluations'
            },
            {
                path: ROUTES.IMPORT_EXPORT_ANALYTICS,
                name: 'Import & Export Analytics',
                icon: FaExchangeAlt,
                description: 'Insights into import and export trends'
            },
        ]
    },
    {
        path: ROUTES.FEATURES,
        name: 'Features',
        icon: FaStar,
        description: 'Discover our platform features'
    },
    {
        path: ROUTES.RESOURCES,
        name: 'Resources',
        icon: FaBook,
        description: 'Access various resources for better understanding',
        subMenu: [
            {
                path: ROUTES.ABOUT_US,
                name: 'About us',
                icon: FaInfoCircle,
                description: 'Learn more about us'
            },
            {
                path: ROUTES.DOCUMENTS,
                name: 'Documents',
                icon: FaFileAlt,
                description: 'Find important documents and reports'
            },
            {
                path: ROUTES.FAQ,
                name: 'FAQ',
                icon: FaQuestionCircle,
                description: 'Frequently asked questions'
            },
            {
                path: ROUTES.ARTICLE_NEWS,
                name: 'Article & News',
                icon: FaNewspaper,
                description: 'Latest articles and news updates'
            },
        ]
    },
    {
        path: ROUTES.CONTACT,
        name: 'Contact us',
        icon: FaPhone,
        description: 'Get in touch with us'
    },
];