// @ts-nocheck

import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Image,
  useWindowDimensions,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

type OwnProps = {};

export type PaymentsProps = OwnProps;

const images = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

type SliderItem = {
  key: string;
  title: string;
  image: string;
};

const data: SliderItem[] = Object.keys(images).map((key) => ({
  key,
  title: key,
  image: images[key],
  ref: React.createRef(),
}));

const { width } = Dimensions.get('window');

const Tab = React.forwardRef(({ item, onItemPress }, ref) => (
  <View ref={ref}>
    <TouchableOpacity onPress={onItemPress}>
      <Text style={[styles.tabText, { fontSize: 84 / data.length }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  </View>
));

const Indicator = ({ scrollX, measures }) => {
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const leftOffset = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: indicatorWidth,
        backgroundColor: '#fff',
        left: 0,
        bottom: -20,
        transform: [{ translateX: leftOffset }],
      }}
    />
  );
};

const Tabs = ({ data, scrollX, onItemPress }) => {
  const [measures, setMeasures] = useState([]);
  const containerRef = useRef();
  useEffect(() => {
    const m: any = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({ x, y, width, height });

          if (m.length === data.length) {
            setMeasures(m);
          }
        },
      );
    });
  }, [data]);
  return (
    <View style={styles.tabsContainer}>
      <View style={styles.tabs} ref={containerRef}>
        {data.map((item, i) => (
          <Tab
            item={item}
            key={item.key}
            ref={item.ref}
            onItemPress={() => onItemPress(i)}
          />
        ))}
      </View>
      {measures.length > 0 && (
        <Indicator scrollX={scrollX} measures={measures} />
      )}
    </View>
  );
};

const Payments: FunctionComponent<PaymentsProps> = () => {
  const { width, height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const listRef = useRef<FlatList>();
  const onItemPress = useCallback(
    (itemIndex) => {
      listRef.current?.scrollToOffset({ offset: itemIndex * width });
    },
    [width],
  );
  const renderItem = ({ item }: { item: SliderItem }) => (
    <View style={{ width, height }}>
      <Image
        source={{ uri: item.image }}
        style={{ resizeMode: 'cover', flex: 1 }}
      />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
        ]}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        ref={listRef}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        style={{ flex: 1 }}
        keyExtractor={(item: SliderItem) => item.key}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        pagingEnabled
        bounces={false}
      />
      <Tabs data={data} scrollX={scrollX} onItemPress={onItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    position: 'absolute',
    top: 80,
    width,
  },
  tabText: {
    color: '#fff',
    fontWeight: '800',
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Payments;
