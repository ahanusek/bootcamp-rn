import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  findNodeHandle,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Animated,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ScreenTitle } from '@/components';

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

const data: SliderItem[] = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef(),
}));

const Tab = React.forwardRef(
  ({ item, onItemPress }: { item: SliderItem }, ref) => (
    <View ref={ref}>
      <TouchableOpacity onPress={onItemPress}>
        <Text
          style={{
            color: '#fff',
            fontSize: 84 / data.length,
            fontWeight: '800',
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  ),
);

const Indicator = ({ measures, scrollX }) => {
  const { width } = useWindowDimensions();
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const leftOffset = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measures) => measures.x),
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: indicatorWidth,
        backgroundColor: '#fff',
        bottom: -20,
        left: 0,
        transform: [{ translateX: leftOffset }],
      }}
    />
  );
};

const Tabs = ({ data, scrollX, onItemPress }) => {
  const { width } = useWindowDimensions();
  const [measures, setMeasures] = useState([]);
  const containerRef = useRef();
  useEffect(() => {
    const m: any = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          console.warn({ x, y, width, height });
          m.push({ x, y, width, height });
          if (m.length === data.length) {
            setMeasures(m);
          }
        },
      );
    });
  }, []);
  console.warn('meas', measures);
  return (
    <View style={{ position: 'absolute', top: 100, width }}>
      <View
        style={{
          justifyContent: 'space-evenly',
          flex: 1,
          flexDirection: 'row',
        }}
        ref={containerRef}>
        {data.map((item, i) => (
          <Tab
            key={item.key}
            item={item}
            ref={item.ref}
            onItemPress={() => onItemPress(i)}
          />
        ))}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

const Payments: FunctionComponent<PaymentsProps> = () => {
  const { width, height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const listRef = useRef<FlatList>();
  const onItemPress = useCallback((itemIndex) => {
    listRef.current.scrollToOffset({ offset: itemIndex * width });
  });
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        ref={listRef}
        style={{ flex: 1 }}
        keyExtractor={(item: SliderItem) => item.key}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        bounces={false}
        renderItem={({ item }: { item: SliderItem }) => (
          <View style={{ width, height }}>
            <Image
              source={{ uri: item.image }}
              style={{ flex: 1, resizeMode: 'cover' }}
            />
            <View
              style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
              ]}
            />
          </View>
        )}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
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
});

export default Payments;
