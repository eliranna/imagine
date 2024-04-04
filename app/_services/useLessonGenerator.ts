import { useChat } from "ai/react";
import { useEffect, useState } from "react";

export interface TUseLessonGeneratorReturn {
    lesson: string | null,
    generate: (lessonSettings: TLessonSettings) => void;
    isLoading: boolean;
}

export interface TLessonSettings {
    topic: string,
    language?: string
    grade: string,
    type?: string,
    duration?: string,
    focuseOn?: string,
    additionalInfo?: string
}

export const useLessonGenerator = (): TUseLessonGeneratorReturn => {

    const [lesson, setLesson] =  useState<string | null>(null)
    const {messages, isLoading, append} = useChat()

    useEffect(() => {
        messages && messages.length > 0 && setLesson(messages[messages.length-1].content)
    }, [messages])    

    const generate = (lessonSettings: TLessonSettings) => {
        const prompt = `
            צור מערך שיעור מפורט בשפה ${lessonSettings.language ? lessonSettings.language : 'העברית'} 
            בנושא ${lessonSettings.topic}
            עבור תלמידי כיתה ${lessonSettings.grade} 
            בסגנון ${lessonSettings.type} 
            באורך ${lessonSettings.duration}.
            ${lessonSettings.focuseOn ? `התמקד במיוחד ב- ${lessonSettings.focuseOn}.` : ''}
            ${lessonSettings.additionalInfo ? `בנוסף, התחשב בדברים הבאים: ${lessonSettings.additionalInfo}.` : ''}
        `
        append({
            role: 'user',
            content: prompt
        })
    }   
    
    return {
        lesson,
        generate,
        isLoading
    }
}