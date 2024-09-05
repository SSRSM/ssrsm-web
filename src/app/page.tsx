import Link from "next/link";

import GraduateCapIcon from "@/components/icons/graduate-cap";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full h-dvh -mt-navbar flex flex-col items-center justify-center text-center bg-hero bg-cover bg-center">
      <div className="relative flex flex-col gap-y-6 items-center justify-center [&>*]:z-20">
        <div className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] z-10 blur-xl bg-gradient-to-b from-secondary/50 from-30% via-background via-70% to-secondary/50"></div>

        <GraduateCapIcon className="w-32 -mb-6 text-primary" />

        <div className="flex flex-col gap-y-1 items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Сојуз на Средношколци</h1>
          <p className="text-sm sm:text-base max-w-[30ch] text-balance font-semibold">
            Официјална веб страна на Сојузот на Средношколци на Македонија.
          </p>
        </div>

        <div className="flex flex-row gap-x-3">
          <Button asChild>
            <Link href="/sign-in">
              Приклучи се
            </Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href="/about">
              Дознај повеќе
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
