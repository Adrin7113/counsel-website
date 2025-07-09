import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, country, findUs, updates, message } = body;

    // Your Google Apps Script URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx12BFwhNBLNIZlXWF3RflE-PloGIKOzQBoIBi0BB8zVBdbbzQyy5S1AwEQrlPMFKlR/exec';

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, email, country, findUs, updates, message }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}