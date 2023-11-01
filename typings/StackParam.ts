import { StackNavigationProp } from "@react-navigation/stack";
import { Level, PostType, WriteType } from "@/typings/heatLevels";

export type RootStackParamList = {
  Tabs: undefined;
  Login: undefined;
  Weather: undefined;
  Alert: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Resource: undefined;
  WeatherDetail: { level: Level };
  Signup: undefined;
  ForgotPw: undefined;
  Posts: undefined;
  PostDetail: { post_id: number; post_type: PostType };
  PostEdit: { post_id?: number; post_type: PostType; write_type: WriteType };
  PostEditTags: {
    post_id?: number;
    post_type: PostType;
    write_type: WriteType;
  };
  PostEditLocation: {
    post_id?: number;
    post_type: PostType;
    write_type: WriteType;
  };
  PostDetailMapView: { lat: number; lon: number; streetname: string };
  OtherProfile: { author: string };
  CommentWrite: undefined;
  // Add other screen types if you have more than these
};

export type RouteNames = keyof RootStackParamList;

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Tabs"
>; // 'Tabs' can be any screen in the list
