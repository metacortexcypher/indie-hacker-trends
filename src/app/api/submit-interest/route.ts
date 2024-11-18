import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join('src', 'data', 'newsletter-subscribers.json');

export async function POST(request: Request) {
  try {
    const { email, twitter } = await request.json();

    // Read the existing data from the file
    let data: { email: string; twitter: string }[] = [];
    try {
      const fileData = await fs.readFile(dataFilePath, 'utf-8');
      data = JSON.parse(fileData);
    } catch {
      // If the file doesn't exist, create a new array
      data = [];
    }

    // Add the new data to the array
    data.push({ email, twitter });

    // Write the updated data back to the file
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error saving form data:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to submit form' },
      { status: 500 }
    );
  }
}