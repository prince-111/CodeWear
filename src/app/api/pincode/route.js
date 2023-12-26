import { NextResponse } from "next/server";

export async function GET(){
   return NextResponse.json(
    [1221001, 1221002, 1221003]
 );
}