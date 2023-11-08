import { getCurrentUser, prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } },
) {
  try {
    const currentUser = await getCurrentUser();
    const userId = currentUser?.id;

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    const product = await prisma.products.delete({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { productId: string } },
) {
  try {
    const currentUser = await getCurrentUser();
    const userId = currentUser?.id;

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    return;

    const product = await prisma.products.delete({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
