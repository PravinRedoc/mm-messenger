import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import SessionProvider from "@/components/SessionProvider"
import { getServerSession } from "next-auth";
import {authOptions} from '../pages/api/auth/[...nextauth]'
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
        {session ? (<div className="flex">
        {/* Side bar */}
        <div className="bg-[#202123] max-w-sm h-screen overflow-y-auto md:min-w-64">
        <SideBar />
        </div>

        {/* Client Provider Notification */}
        <ClientProvider />

        <div className="bg-[#343541] flex-1 ">    
          {children}</div>
          </div>) : (<Login />)}
        </SessionProvider>
        </body>
    </html>
  )
}
