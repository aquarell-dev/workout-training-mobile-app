import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Layout from '../../layouts/layout'
import Notifications from '../../ui/notifications'

// #b0eb5f acttive
// #151718 - bg

const Home: FC = () => {
	return (
		<Layout>
			<View className='flex-row justify-between items-center'>
				<Text className='font-medium text-xl'>Hey, there</Text>
				<Notifications seen={false} />
			</View>
		</Layout>
	)
}

export default Home
