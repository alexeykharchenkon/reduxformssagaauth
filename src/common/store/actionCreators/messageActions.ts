import { Message } from "@common/types"
import { OPEN_MESSAGE } from "@store/actions"
import { CLOSE_MESSAGE } from "@store/actions"

export const openMessage = (message: Message) => { 
    return { type: OPEN_MESSAGE, payload: { message } }
}

export const closeMessage = () => ({type: CLOSE_MESSAGE})
