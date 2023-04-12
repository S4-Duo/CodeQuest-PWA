import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#ffffff" />
                <script src={"https://api.gazerecorder.com/GazeCloudAPI.js"}></script>
            </Head>
            <body>
            <Main />
            <NextScript>
            </NextScript>
            </body>
        </Html>
    );
}
