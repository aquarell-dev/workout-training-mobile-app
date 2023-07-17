import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'
import Analytics from '../../screens/analytics'
import Home from '../../screens/home'
import Profile from '../../screens/profile'
import Workout from '../../screens/workout'

const Tab = createBottomTabNavigator()

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false, tabBarShowLabel: false }}
			>
				<Tab.Screen
					name='Home'
					component={Home}
					options={{
						tabBarIcon: ({ color }) => (
							<Ionicons name='home' size={24} color={color} />
						)
					}}
				/>
				<Tab.Screen
					name='Workout'
					component={Workout}
					options={{
						tabBarIcon: ({ color }) => (
							<Ionicons name='barbell' size={24} color={color} />
						)
					}}
				/>
				<Tab.Screen
					name='Analytics'
					component={Analytics}
					options={{
						tabBarIcon: ({ color }) => (
							<Ionicons name='stats-chart' size={24} color={color} />
						)
					}}
				/>
				<Tab.Screen
					name='Profile'
					component={Profile}
					options={{
						tabBarIcon: ({ color }) => (
							<Ionicons name='person' size={24} color={color} />
						)
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
