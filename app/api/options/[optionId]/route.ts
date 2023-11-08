import { getCurrentUser, prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { optionId: string } },
) {
  try {
    const currentUser = await getCurrentUser();
    const userId = currentUser?.id;

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    const product = await prisma.options.delete({
      where: {
        id: params.optionId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
