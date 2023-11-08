import { getCurrentUser, prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const userId = currentUser?.id;

    const { title, description, imageUrl, price, unit, optionGroups } =
      await req.json();

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    const product = await prisma.products.create({
      data: {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: Number(price),
        unit: unit,
        optionGroups: {
          create: optionGroups.map((id: string) => ({
            optionGroup: {
              connect: { id },
            },
          })),
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
