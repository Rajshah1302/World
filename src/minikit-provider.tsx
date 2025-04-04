'use client'

import { ReactNode, useEffect } from 'react'
import { MiniKit } from '@worldcoin/minikit-js'
import 'dotenv/config'
 
export default function MiniKitProvider({ children }: { children: ReactNode }) {
	useEffect(() => {
		
		MiniKit.install(process.env.APP_ID) 
	}, [])

	return <>{children}</>
}
