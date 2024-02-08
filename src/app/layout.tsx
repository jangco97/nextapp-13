import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import ToastProvider from "@/components/ToastProvider";
import { NextAuthProvider } from "./provider";
import { SidebarProvider } from "@/context/sidebaropen.context";
import SidebarModal from "@/components/layout/sidebar/SidebarModal";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Providers from "@/utils/provider";
import getCurrentUser from "./actions/getCurrentUser";
import MobileBottom from "@/components/mobilebottom/MobileBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "줄건중고",
  description: "중고거래 웹 애플리케이션",
  icons: {
    icon: "/marketicon.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextAuthProvider session={session}>
            <SidebarProvider>
              <Navbar currentUser={currentUser} />
              <ToastProvider />
              <SidebarModal currentUser={currentUser} />
              {children}
              <MobileBottom currentUser={currentUser} />
            </SidebarProvider>
          </NextAuthProvider>
        </Providers>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_API}&libraries=services,clusterer&autoload=false`}
        ></Script>
      </body>
    </html>
  );
}
