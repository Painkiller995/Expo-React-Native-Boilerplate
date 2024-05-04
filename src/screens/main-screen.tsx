import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

const MainScreen = () => {
  // Load Styles ----------------------------
  const { colorScheme } = useColorScheme();

  // ----------------------------
  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Text>Hello World</Text>
    </View>
  );
};
export default MainScreen;
