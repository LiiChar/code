
'use client'
import { useGetMusic } from "@/api/Music/useGetMusic";
import { IMusic, IUser } from "@/type/type";
import { MutableRefObject, ReactNode, RefObject, createContext, useContext, useEffect, useRef, useState } from "react";

interface curMus {
    url: string
    index: number
    audio: any,
    music: any
}

export interface musicContextType {
    stop: () => void,
    music: IMusic[],
    nextSound: (url: string) => void,
    prevSound: (url: string) => void,
    setAudio: (url: string) => void,
    formatDuration: () => void,
    refresh: () => void,
    formatTimer: (timer: number) => void,
    isPlaying: boolean
    audioList: string[],
    start: (url: string) => void,
    currentMusic: curMus,
    audio: any
};

const musicContextDefaultValues: musicContextType = {
    stop: () => { },
    nextSound: () => { },
    prevSound: () => { },
    refresh: () => { },
    start: () => { },
    formatDuration: () => { },
    setAudio: () => { },
    formatTimer: () => { },
    audioList: [],
    music: [],
    isPlaying: false,
    audio: '',
    currentMusic: { url: '', index: 0, audio: '', music: '' }
};

const musicContext = createContext<musicContextType>(musicContextDefaultValues);


export function useMusic() {
    return useContext(musicContext);
}

type Props = {
    children: ReactNode;
};

export function MusicProvider({ children }: Props) {
    const [music, setMusic] = useState<IMusic[]>([])
    const [currentMusic, setCurrentMusic] = useState<any>('')
    const [duration, setDuration] = useState<number>(0)
    const [audioList, setAudioList] = useState<any[]>([])
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioElement, setAudioElement] = useState<HTMLAudioElement>();
    let audio: MutableRefObject<HTMLAudioElement | undefined> = useRef(audioElement);
    const { data, refresh } = useGetMusic()

    useEffect(() => {
        setMusic(data)
    }, [data])

    useEffect(() => {
        setAudioElement(new Audio());
    }, []);

    useEffect(() => {
        if (currentMusic && audio && audio.current) {
            const aud = audio.current
            aud.src = currentMusic
            aud.crossOrigin = "anonymous"
            aud.load()
            aud.addEventListener("loadedmetadata", () => {
                setDuration(aud.duration);
            });

            aud.addEventListener("canplaythrough", function () {
                aud.play();
            })

            return () => {
                aud.removeEventListener("loadedmetadata", () => {
                    setDuration(aud.duration);
                });
                aud.removeEventListener("canplaythrough", function () {
                    aud.play();
                })
            };
        }
    }, [currentMusic]);

    const setAudio = (url: string) => {
        setCurrentMusic(url);
    }

    const formatDuration = () => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const formatTimer = (timer: number) => {
        const minutes = Math.floor(timer / 60);
        const seconds = Math.floor(timer % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const start = (url: string) => {

        if (url != currentMusic) {
            setCurrentMusic(url)
        } else {
            if (audio  && audio.current) {
                // audio.current.addEventListener("canplaythrough", function() {
                //     console.log("🚀 ~ file: MusicContext.tsx:106 ~ start ~ audio:", audio)
                audio.current.play();
                setIsPlaying(true)
                // })
            }

        }
    }

    const nextSound = (url: string) => {
        setCurrentMusic(url)
    }

    const prevSound = (url: string) => {
        setCurrentMusic(url)
    }

    const stop = () => {
        if (audio  && audio.current) {
            audio.current.load()
            audio.current.pause();
            setIsPlaying(false)
        }

    }


    const value = {
        currentMusic,
        audioList,
        music,
        refresh,
        prevSound,
        start,
        stop,
        nextSound,
        isPlaying,
        formatDuration,
        formatTimer,
        setAudio,
        audio
    };

    return (
        <>
            <musicContext.Provider value={value}>
                {children}
            </musicContext.Provider>
        </>
    );
}