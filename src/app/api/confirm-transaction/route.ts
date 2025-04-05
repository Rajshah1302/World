import { NextRequest, NextResponse } from 'next/server'
import { MiniAppSendTransactionSuccessPayload } from '@worldcoin/minikit-js'

interface IRequestPayload {
	payload: MiniAppSendTransactionSuccessPayload
}

export async function POST(req: NextRequest) {
	const { payload } = (await req.json()) as IRequestPayload

	const response = await fetch(
		`https://developer.worldcoin.org/api/v2/minikit/transaction/${payload.transaction_id}?app_id=${process.env.APP_ID}&type=transaction`,
		{
			method: 'GET',
		}
	)
	const transaction = await response.json()
    console.log('Transaction:', transaction)
	return NextResponse.json(transaction)
}
