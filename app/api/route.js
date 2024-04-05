import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/todo.model";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });

  return NextResponse.json({ msg: "Todo Created" });
}

export async function DELETE(request) {
  const mongoid = await request.nextUrl.searchParams.get("mongoid");

  await TodoModel.findByIdAndDelete(mongoid);

  return NextResponse.json({ msg: "Todo Deleted" });
}
