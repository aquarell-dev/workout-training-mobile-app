import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'

const Notifications: FC<{ seen: boolean }> = ({ seen }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} className='relative'>
			<Ionicons name='notifications' size={30} color='black' />
			{!seen && (
				<View className='w-1.5 h-1.5 bg-red-500 rounded-full absolute top-0 right-0' />
			)}
		</TouchableOpacity>
	)
}

export default Notifications
