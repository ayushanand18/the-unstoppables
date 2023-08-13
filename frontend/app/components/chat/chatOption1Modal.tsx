"use client"
import React from "react"
import { IPropsChatModal } from "../utilities/interfaces"
import { TextField } from "@mui/material"


const ChatOption1Modal  = (props: IPropsChatModal) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                Flipkart
            </div>
            <div className="flex flex-col bg-white flex-grow-1">

            </div>
            <div className="flex flex-row">
                <TextField 
                    id="multiline-flexible"
                    label="Type your message"
                    multiline
                    maxRows={4}>
                </TextField>
            </div>
        </div>
    )
}
export default ChatOption1Modal