import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Post } from "@/components/common/profile/index";
import { profileAtom } from "@/state/atoms/profileEdit";
import { useRecoilValue } from "recoil";
import { fetchPosts } from "@/api/post";
import { IPost } from "@/typings/post";

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<IPost[]>([]);

  const handleFetchPostsApi = async () => {
    const tipRes = await fetchPosts({ page: 1, limit: 10, type: "tip" });
    const campaignRes = await fetchPosts({
      page: 1,
      limit: 10,
      type: "campaign",
    });
    const tips = tipRes.data;
    const campaigns = campaignRes.data;
    console.log(tips);
    const total = [...tips, ...campaigns];
    setActivities(total);
  };

  useEffect(() => {
    handleFetchPostsApi();
  }, []);

  const profile = useRecoilValue(profileAtom);

  return (
    <View style={styles.container}>
      <Text style={styles.activityTitle}>Activities</Text>
      {activities.map((item, idx) => {
        return <Post key={idx} item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  activityTitle: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.64,
    marginBottom: 8,
  },
  activitiesContainer: {},
});

export default Activities;
