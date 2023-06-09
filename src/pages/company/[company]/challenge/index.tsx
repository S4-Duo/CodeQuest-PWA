import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import styles from "./index.module.css"
import SmallTitle from "@/components/SmallTitle";
import ButtonPrimary from "@/components/button/buttonPrimary/button";
import Editor from 'react-simple-code-editor';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import Input from "@/components/input/input";
import FullWidthLine from "@/components/fullWidthLine";
import UploadInput from "@/components/input/UploadInput";
import JSONCompany from "@/storage/companies.json"
import {IChallenge} from "@/interfaces/IChallenge";
import {ICompany} from "@/interfaces/ICompany";
import Script from "next/script";

declare const GazeCloudAPI: any;

enum Progress {
    start,
    allowCamera,
    progress,
    ended,
}

export default function ChallengePage() {
    const router = useRouter()
    const {company} = router.query

    let [pageLeave, setPageLeave] = useState<number>(0)

    const [progress, setProgress] = useState<Progress>(Progress.start)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    const [currentCompany, setCurrentCompany] = useState<ICompany>()
    const [challenges, setChallenges] = useState<IChallenge[]>()
    const [initialTime, setInitialTime] = useState<string>()
    const [difficulty, setDifficulty] = useState<string>()
    const [language, setLanguage] = useState<string>()
    const [cameraAllowed, setCameraAllowed] = useState(false)
    const [timesLookedAway, setTimesLookedAway] = useState(0)
    const [lookingState, setLookingState] = useState<number>()
    const [prevLookingState, setPrevLookingState] = useState<number>()

    function startChallenge() {
        setProgress(Progress.progress)
    }

    useEffect(() => {
        window.onfocus = () => {
            if (progress == Progress.progress) {
                setPageLeave(pageLeave += 1)
            }
        }
    })

    useEffect(() => {
        if (router.isReady) {
            setCurrentCompany(JSONCompany.companies.find(item => item.guid === company) as ICompany)
            setChallenges(currentCompany?.challenge?.challenges)
            setInitialTime(currentCompany?.challenge?.time)
            setDifficulty(currentCompany?.challenge?.difficulty)
            setLanguage(currentCompany?.challenge?.language)
        }
    }, [company, currentCompany, router])


    function isLastQuestion(): boolean {
        return currentQuestion == challenges!.length - 1;
    }

    useEffect(() => {
        if (cameraAllowed){
            GazeCloudAPI.StartEyeTracking();

            GazeCloudAPI.OnResult = function (GazeData: any) {
                if (progress !== Progress.ended){
                    console.log(GazeData?.state)
                    setLookingState(GazeData?.state)
                }
            }
        }
    })

    useEffect(() => {
        if (lookingState == -1) {
            setTimesLookedAway(timesLookedAway + 1)
        }
        console.log(timesLookedAway)
    }, [lookingState])

    return (
        <div className={styles.challengePage}>
            <Script src={"https://api.gazerecorder.com/GazeCloudAPI.js"}></Script>

            {
                (progress == Progress.start) &&
                <>
                    <SmallTitle arrow={true}/>
                    {/*Here are coming all the rules before the challenge is started*/}
                    <div className={styles.rulesWrapper}>
                        <h2 className={styles.companyName}>{currentCompany?.name}</h2>
                        <FullWidthLine/>
                        <p className={styles.statsText}>Questions: {challenges?.length}</p>
                        <p className={styles.statsText}>Time: {initialTime}</p>
                        <p className={styles.statsText}>Language: {language}</p>
                        <p className={styles.statsText}>Difficulty: {difficulty}</p>
                        <FullWidthLine/>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <ButtonPrimary text={"Next"} onClick={() => setProgress(Progress.allowCamera)}/>
                    </div>


                </>
            }
            {
                (progress == Progress.allowCamera) &&
                <>
                    <SmallTitle arrow={true}/>
                    {/*Here are coming all the rules before the challenge is started*/}
                    <div className={styles.rulesWrapper}>
                        <h2 className={styles.companyName}>Before we start</h2>
                        <p className={styles.statsText}>We would like to have acces to your camera for detecting your face and eye tracking</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        {
                            cameraAllowed ? <ButtonPrimary text={"Start Challenge"} onClick={startChallenge}/>
                                : <ButtonPrimary text={"Allow camera and start calibrating"} onClick={() => {setCameraAllowed(true)}}/>
                        }
                    </div>
                </>
            }
            {
                (progress == Progress.progress) &&
                <>
                    <SmallTitle arrow={false}/>
                    <div className={styles.questionWrapper}>
                        <Editor
                            className={styles.editor}
                            value={challenges![currentQuestion].challenge}
                            highlight={code => highlight(code, languages.javascript, 'javascript')}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                            }}
                            onValueChange={() => {
                            }}/>
                        <Input placeholder={"Answer..."} type={"text"}/>
                    </div>
                    <div className={styles.buttonWrapper}>
                        {
                            isLastQuestion()
                                ?
                                <ButtonPrimary text={"Finish challenge"}
                                               onClick={() => setProgress(Progress.ended)}/>
                                :
                                <ButtonPrimary text={"Next Question"} onClick={() => {
                                    setCurrentQuestion(currentQuestion + 1)
                                }}/>
                        }
                    </div>
                </>
            }
            {
                (progress == Progress.ended) &&
                <>
                    <SmallTitle arrow={true}/>
                    <div className={styles.rulesWrapper}>
                        <h2 className={styles.companyName}>19/20 Correct</h2>
                        <FullWidthLine/>
                        <h3 className={styles.statsText}>Stats</h3>
                        <p className={styles.statsText}>Questions: 20</p>
                        <p className={styles.statsText}>Time: 10:000</p>
                        <p className={styles.statsText}>Difficulty: Medium</p>
                        <FullWidthLine/>
                        <p className={styles.statsText}>Times looked away: {timesLookedAway}</p>
                        <p className={styles.statsText}>Page leaves: {pageLeave}</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <UploadInput placeholder={"Upload Resume"}/>
                        <Input placeholder={"Write a motivation..."} type={"text"}/>
                        <ButtonPrimary text={"Send Resume"} onClick={() => {
                        }}/>
                    </div>
                </>
            }
        </div>
    )
}