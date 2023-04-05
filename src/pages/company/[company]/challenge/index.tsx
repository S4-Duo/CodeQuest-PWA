import {useRouter} from "next/router";
import {useState} from "react";
import styles from "./index.module.css"
import SmallTitle from "@/components/SmallTitle";
import ButtonPrimary from "@/components/button/buttonPrimary/button";
import Editor from 'react-simple-code-editor';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import Input from "@/components/input/input";
import treeAdapter from "parse5/lib/tree-adapters/default";
import FullWidthLine from "@/components/fullWidthLine"; //Example style, you can use another\


enum Progress {
    start,
    progress,
    ended,
}

export default function ChallengePage() {
    const router = useRouter()
    const {company} = router.query

    const [progress, setProgress] = useState<Progress>(Progress.start)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const questions = [
        {
            question: "const data = 10",
            answer: "10"
        },
        {
            question: "const data = (1000 / 50) ",
            answer: "20"
        },
        {
            question: "const data = 10",
            answer: "10"
        },
        {
            question: "Last question",
            answer: "20"
        },
    ]

    function isLastQuestion(): boolean {
        if (currentQuestion == questions.length - 1) {
            return true
        }
        return false
    }

    return (
        <div className={styles.challengePage}>
            {
                (progress == Progress.start) ? <>
                    <SmallTitle/>
                    {/*Here are coming all the rules before the challenge is started*/}
                    <div className={styles.rulesWrapper}>
                        <h2 className={styles.companyName}>{company}</h2>
                        <FullWidthLine/>
                        <p className={styles.statsText}>Questions: 20</p>
                        <p className={styles.statsText}>Time: 10:000</p>
                        <p className={styles.statsText}>Language: Javascript (JS)</p>
                        <p className={styles.statsText}>Difficulty: Medium</p>
                        <FullWidthLine/>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <ButtonPrimary text={"Start Challenge"} onClick={() => {
                            setProgress(Progress.progress)
                        }}/>
                    </div>


                </> : <></>
            }

            {
                (progress == Progress.progress) ? <>
                    <SmallTitle/>
                    <div className={styles.questionWrapper}>
                        <Editor
                            className={styles.editor}
                            value={questions[currentQuestion].question}
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
                            isLastQuestion() ? <ButtonPrimary text={"Finish challenge"} onClick={() => {
                                setProgress(Progress.ended)
                            }}/> : <ButtonPrimary text={"Next Question"} onClick={() => {
                                setCurrentQuestion(currentQuestion + 1)
                            }}/>
                        }
                    </div>
                </> : <></>
            }

            {
                (progress == Progress.ended) ? <>
                    <SmallTitle/>
                    {/*Here are coming all the rules before the challenge is started*/}
                    <div className={styles.rulesWrapper}>
                        <h2 className={styles.companyName}>19/20 Correct</h2>
                        <FullWidthLine/>
                        <h3 className={styles.statsText}>Stats</h3>
                        <p className={styles.statsText}>Questions: 20</p>
                        <p className={styles.statsText}>Time: 10:000</p>
                        <p className={styles.statsText}>Language: Javascript (JS)</p>
                        <p className={styles.statsText}>Difficulty: Medium</p>
                        <FullWidthLine/>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <ButtonPrimary text={"Send Resume"} onClick={() => {
                            console.log("Send resume")
                        }}/>
                    </div>
                </> : <></>
            }


        </div>
    )
}