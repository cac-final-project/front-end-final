# folder structure:

my-app/
├── assets/
│ ├── fonts/
│ ├── images/
│ │ ├── icons/
│ │ ├── logos/
│ │ └── others/
│ └── videos/
├── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ └── ...
│ ├── layouts/
│ └── screens/
│ ├── HomeScreen.tsx
│ ├── ProfileScreen.tsx
│ └── ...
├── constants/
│ ├── Colors.ts
│ ├── Routes.ts
│ └── ...
├── navigation/
│ ├── MainTabNavigator.tsx
│ ├── RootStackNavigator.tsx
│ └── ...
├── state/
│ ├── context/
│ │ ├── AuthContext.tsx
│ │ └── ThemeContext.tsx
│ ├── hooks/
│ │ ├── useAuth.ts
│ │ └── useTheme.ts
│ └── reducers/
│ ├── authReducer.ts
│ └── themeReducer.ts
├── services/
│ ├── api.ts
│ └── storage.ts
├── typings/
│ ├── common.d.ts
│ ├── navigation.d.ts
│ └── ...
├── utils/
│ ├── dateUtils.ts
│ ├── storageUtils.ts
│ └── ...
├── App.tsx
├── package.json
└── tsconfig.json
