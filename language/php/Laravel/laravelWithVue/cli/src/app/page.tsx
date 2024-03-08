
import { Aside } from "@/components/layout/aside/component";
import { Music } from "./Music/page";
import { UploadMusic } from "@/components/ui/UploadMusic/component";
import { Wrapper } from "@/components/layout/Wrapper/component";

export default function Home() {
  return (
    <main >
      <Wrapper>
        <div className="flex w-full h-full">
          <Music />
          <UploadMusic />
        </div>
      </Wrapper>
    </main>
  )
}
