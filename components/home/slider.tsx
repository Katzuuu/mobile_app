import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";

const Slider = () => {
  const [sliderList, setSliderList] = useState<any>([]);

  const getSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setSliderList((prev: any) => [...prev, doc.data()]);
    });
  };

  useEffect(() => {
    getSliderList();
  }, []);
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        #Special for you
      </Text>
      <FlatList
        style={{
          paddingLeft: 20,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sliderList}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            key={index}
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              marginRight: 20,
            }}
          />
        )}
      />
    </View>
  );
};

export default Slider;
