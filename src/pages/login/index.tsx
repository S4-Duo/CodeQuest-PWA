import Head from 'next/head'
import styles from './login.module.css'
import Input from '@/components/input/input'
import LoginButton from "@/components/loginButton/loginButton";
import SocialLogin from "@/components/socialLogin/socialLogin";


export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.logo}>Code Quest</h1>
            <Input type={"Text"} placeholder={"Enter email"}/>
            <Input type={"Password"} placeholder={"Password"}/>
            <LoginButton />

            <div className={styles.separator}>Or continue with</div>

            <div>
                <SocialLogin image={"Facebook"} />
            </div>
        </div>
    )
}
    