import { getCurrentUser, prisma } from "@/libs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const userId = currentUser?.id;
    const { name, optionGroupId } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    const product = await prisma.options.create({
      data: {
        name: name,
        optionGroups: {
          create: [
            {
              optionGroup: {
                connect: {
                  id: optionGroupId,
                },
              },
            },
          ],
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[OPTIONS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
