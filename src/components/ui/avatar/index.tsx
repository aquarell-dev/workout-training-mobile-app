import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { View } from 'react-native'

type AvatarProps = {
	size: number
}

const Avatar: FC<AvatarProps> = ({ size }) => {
	return (
		<View className='rounded-full bg-red-500 p-1.5'>
			<Ionicons name='person' size={size} />
		</View>
	)
}

export default Avatar
