import { NextResponse } from "next/server";

export async function POST(req) {
  // console.log(req.query);
  const { location } = await req.json();

  if (!location) {
    return NextResponse.error(new Error("Location parameter is missing"));
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}`
    );

    // Check if the response is not OK (status code is not in the 200-299 range)
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.error(new Error(errorData.error.message));
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    // Handle network or other errors
    return NextResponse.error(
      new Error("Failed to fetch weather data: " + error.message)
    );
  }
}
