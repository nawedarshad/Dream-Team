import AsyncStorage from '@react-native-async-storage/async-storage';

const reduxStorage = {
  setItem: async (key: string, value: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.error('Error setting item in AsyncStorage:', e);
      return false;
    }
  },

  getItem: async (key: string): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.error('Error getting item from AsyncStorage:', e);
      return null;
    }
  },

  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing item from AsyncStorage:', e);
    }
  },
};

export default reduxStorage;
