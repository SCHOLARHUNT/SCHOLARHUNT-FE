import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { TailwindIndicator } from "@/components/site/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });



interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <TooltipProvider
          disableHoverableContent
          delayDuration={500}
          skipDelayDuration={0}
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <AntdRegistry>{children}</AntdRegistry>
            </div>
          </div>
          <TailwindIndicator />
        </TooltipProvider>
      </body>
    </html>
  );
}
