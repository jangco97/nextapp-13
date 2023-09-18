import { BOARDS_PER_PAGE } from "@/constants";
import prisma from "@/helpers/prismadb"

export interface BoardParams {
    category?: string;
    page?: number;
    skip?: number;
}

export default async function getBoards(params: BoardParams) {
    console.log(params)
    try{
        const {category, skip} = params;

        let query: any = {};

        if(category){
            query.category = category;
        }
        const totalItems = await prisma.board.count({
            where: query
        })
        const boards = await prisma.board.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            },
            skip: skip? Number(skip) : 0,
            take: BOARDS_PER_PAGE,
            include: {
                user: true
            }
        })
        console.log(boards, totalItems)
        return {
            data: boards,
            totalItems
        }
    }catch(error: any){
        throw new Error(error)
    }
}