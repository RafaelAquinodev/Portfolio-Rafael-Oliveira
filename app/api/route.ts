// import { NextResponse } from "next/server";

// const prisma = new ();

// interface RequestBody {
//   name: string;
//   email: string;
//   message: string;
// }

// interface ErrorResponse {
//   error: string;
// }

// export async function POST(req: Request): Promise<NextResponse> {
//   try {
//     const data: RequestBody = await req.json();

//     const contact = await prisma.contact.create({
//       data: {
//         name: data.name,
//         email: data.email,
//         message: data.message,
//       },
//     });

//     return NextResponse.json(contact, { status: 201 });
//   } catch (error) {
//     console.error("Erro ao salvar contato:", error);
//     return NextResponse.json(
//       { error: "Erro ao salvar contato" } as ErrorResponse,
//       {
//         status: 500,
//       }
//     );
//   }
// }
