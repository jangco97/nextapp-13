import prisma from '@/helpers/prismadb'
export interface BoardByIdParams {
    boardId?: string
  }
export default async function getBoardById(params: BoardByIdParams) {
    try{
        const {boardId} = params
        const board = await prisma.board.findUnique({
            where: {
                id: boardId
            },
            include: {
                user: true,
            }
        })
        if(!board) return null

        return board
    }catch(error: any){
        throw new Error(error)
    }
}