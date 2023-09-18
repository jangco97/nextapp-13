import getCurrentUser from '@/app/actions/getCurrentUser';
import getBoardById from '@/app/actions/getBoardById';
import React from 'react'
import BoardClient from './BoardClient';
import EmptyState from '@/components/EmptyState';
import { BoardByIdParams } from '@/app/actions/getBoardById';

const BoardPage = async({params}: {params: BoardByIdParams}) => {
    const board = await getBoardById(params)
    const currentUser = await getCurrentUser();

    if(!board) {
        return <EmptyState/>
    }
    return (
        <BoardClient board={board} currentUser={currentUser}/>
    )
}

export default BoardPage