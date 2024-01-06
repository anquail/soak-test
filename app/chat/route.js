import { NextResponse } from 'next/server';

const messages = {
  messages: [
    {
      id: '001',
      message: 'Hello World',
    },
    {
      id: '002',
      message: 'Hello Again',
    },
  ],
};

const successMsg = {
  success: true,
};

export async function GET(request) {
  const num = Math.floor(Math.random() * 16);

  let status;
  let response = { err: 'An error occurred.' };

  if (num === 0) status = 500;
  else if (num === 1) status = 400;
  else if (num > 1) {
    status = 200;
    response = messages;
  }

  return NextResponse.json(response, { status });
}

export async function POST(request) {
  const num = Math.floor(Math.random() * 12);

  let status;
  let response = { err: 'An error occurred.' };

  if (num === 0) status = 500;
  else if (num === 1) status = 400;
  else if (num > 1) {
    status = 200;
    response = successMsg;
  }

  return NextResponse.json(response, { status });
}
