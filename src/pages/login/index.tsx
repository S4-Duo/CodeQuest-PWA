import Head from 'next/head'
import styles from './login.module.css'
import Input from '@/components/input/input'
import LoginButton from "@/components/loginButton/loginButton";
import SocialLogin from "@/components/socialLogin/socialLogin";


export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.logo}>Code Quest</h1>
            <div className={styles.loginBottomContainer}>
                <Input type={"Text"} placeholder={"Enter email"}/>
                <Input type={"Password"} placeholder={"Password"}/>
                <LoginButton />

                <div className={styles.separator}>Or continue with</div>

                <div className={styles.socialLoginContainer}>
                    <SocialLogin image={"/social/Google.svg"} />
                    <SocialLogin image={"/social/Apple.svg"} />
                    <SocialLogin image={"/social/Facebook.svg"} />
                </div>
            </div>
        </div>
    )
}
    