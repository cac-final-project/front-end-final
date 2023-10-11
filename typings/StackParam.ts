import { StackNavigationProp } from "@react-navigation/stack";
import { level, post_type, write_type } from "@/typings/heatLevels";

type RootStackParamList = {
  Tabs: undefined;
  Login: undefined;
  Weather: undefined;
  Alert: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Resource: undefined;
  WeatherDetail: { level: level };
  Signup: undefined;
  ForgotPw: undefined;
  Posts: undefined;
  PostDetailTip: undefined;
  PostDetailCampaign: undefined;
  PostEdit: { post_id: number; post_type: post_type; write_type: write_type };
  // Add other screen types if you have more than these
};

export type RouteNames = keyof RootStackParamList;

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Tabs"
>; // 'Tabs' can be any screen in the list
