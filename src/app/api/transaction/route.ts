// src/app/api/transaction/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the incoming request
    const tx = await request.json();
    
    // Log the transaction in the backend console
    console.log("Transaction:", tx);

    // Return a success response
    return NextResponse.json({ message: 'Transaction logged successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
