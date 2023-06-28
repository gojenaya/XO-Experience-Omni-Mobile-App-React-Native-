import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { icons, images, COLORS, SIZES } from '../constants';  
import { Header, UserPostCard, TopNav } from '../components';

const Home = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen />
        </SafeAreaView>
    );
};

export default Home;