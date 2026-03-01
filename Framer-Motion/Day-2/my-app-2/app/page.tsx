import Content from "@/components/Content";
import MotionHooks from "@/components/MotionHooks";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Content />
      <div className="flex-1">
        <MotionHooks/>
      </div>
    </div>
  );
}
