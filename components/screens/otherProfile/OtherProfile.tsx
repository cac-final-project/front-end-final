import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import {
  Contact,
  Bio,
  TopImage,
} from "@/components/layouts/otherProfile/index";
import { OtherProfile } from "@/typings/profile";
import { getAuthorProfile } from "@/api/profile";
import { RouteNames } from "@/typings/StackParam";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    author: string;
  };
};

const OtherProfileScreen: React.FC = () => {
  const route = useRoute<RouteType>();

  const {
    params: { author },
  } = route;
  console.log(author);

  const [authorProfile, setAuthorProfile] = useState<OtherProfile | null>(null);

  const handleGetAuthorProfile = async () => {
    const res = await getAuthorProfile({ author });
    console.log(res.data);
    setAuthorProfile(res.data);
  };

  useEffect(() => {
    handleGetAuthorProfile();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopImage profile_img={authorProfile?.profile_img} />
        <Contact
          nickname={authorProfile?.user.nickname}
          phone_no={authorProfile?.user.phone_no}
        />
        <Bio bio={authorProfile?.bio} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.white,
  },
});

export default OtherProfileScreen;
