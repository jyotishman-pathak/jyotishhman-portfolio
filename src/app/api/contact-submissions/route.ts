// app/api/contact-submissions/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";



export async function GET() {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}