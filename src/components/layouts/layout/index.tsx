import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SafeAreaView>
			<View className='mx-4'>{children}</View>
		</SafeAreaView>
	)
}

export default Layout
