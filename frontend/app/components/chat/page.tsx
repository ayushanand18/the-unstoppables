"use client"

import * as React from 'react'
import { Paper, Card, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material';

const DefaultChatComponent = (props: any) => {
    return (
        <>
            <div className="flex flex-col bg-blue-400 px-8 py-8 pt-24">
                <h2 className="font-bold text-xl text-slate-200">Hello there.</h2>
                <h2 className="font-bold text-xl text-white">How can we help you.</h2> 

                <Paper variant="outlined" className="bg-white rounded-md my-4 px-4 py-2"
                    onClick={(e) => props.setMode(true)}>
                    Send us a message
                </Paper>
            </div>

            <Card sx={{ maxWidth: 345 }} className="bg-white">
            <CardMedia
                component="img"
                alt="the flipkart community"
                height="140"
                image="/assets/something.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                The Flipkart Bot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                You can do anything you want here. I just wanted to insert some text so I did.
                Replace this now
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium">Chat Now</Button>
            </CardActions>
            </Card>
            <div className=""></div>
        </>
    )
}

const ChatComponent = () => {
    const [displayModal, setDisplayModal] = React.useState<boolean>(false)
    const [chatMode, setChatMode] = React.useState<number>(0)

    return (
        <>
            <div className="fixed rounded-full bg-[#0057ff] h-[2em] w-[2em] bottom-10 right-10 cursor-pointer z-5"
                onClick={(e) => {setDisplayModal((state) => !state)}}>
            </div>

            {displayModal && 
            <div className="fixed flex bg-white flex-col h-full w-[20em] right-10 bottom-20 rounded-lg z-20 top-10">
                {chatMode===0 && <DefaultChatComponent setMode={setChatMode} />}
                {chatMode===1 && }
            </div>}
        </>
    
    )
}

export default ChatComponent
