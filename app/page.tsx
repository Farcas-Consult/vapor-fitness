import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-slate-900 text-white hover:bg-slate-800">OVERLAND FITNESS</Badge>
          <h1 className="text-6xl font-bold text-slate-900 mb-4">Coming Soon</h1>
          <p className="text-xl text-slate-600 mb-8">
            Transform your body. Elevate your performance. Join the Vapor Fitness community when we launch.
          </p>
        </div>

      </div>
    </div>
  );
}
