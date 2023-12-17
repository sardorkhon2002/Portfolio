import type { AppProps } from "next/app";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import MainLayout from "@/layouts/layout";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NextNProgress />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
