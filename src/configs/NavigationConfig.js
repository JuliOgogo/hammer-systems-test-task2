import {
  DashboardOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'Товары',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'Заказы',
      icon: InfoCircleOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'Клиенты',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'groups',
          path: `${APP_PREFIX_PATH}/main/clients/groups`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'Баннеры',
      icon: FundOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'Промокоды',
      icon: BulbOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offlinepoints',
      path: `${APP_PREFIX_PATH}/main/offlinepoints`,
      title: 'Оффлайн точки',
      icon: CompassOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'addresses',
          path: `${APP_PREFIX_PATH}/main/offlinepoints/addresses`,
          title: 'Адреса',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'geofences',
          path: `${APP_PREFIX_PATH}/main/offlinepoints/geofences`,
          title: 'Геозоны',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'Сотрудники',
      icon: ProfileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mailinglists',
      path: `${APP_PREFIX_PATH}/main/mailinglists`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const appsNavTree = [{
  key: 'systemic',
  path: `${APP_PREFIX_PATH}/systemic`,
  title: 'Системные',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'systemic',
      path: `${APP_PREFIX_PATH}/systemic/systemic`,
      title: 'Настройки',
      icon: RobotOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobileapp',
      path: `${APP_PREFIX_PATH}/systemic/mobileapp`,
      title: 'Мобильное приложение',
      icon: DotChartOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/systemic/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
]

export default navigationConfig;
