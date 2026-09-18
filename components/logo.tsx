import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="logo-frame"><Image src={`${basePath}/logo.png`} alt="" aria-hidden="true" width={1024} height={1024} priority /></span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-[15px] font-bold tracking-[-0.03em] text-ink">REVPLUS</span>
          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Multisolutions</span>
        </span>
      )}
    </span>
  );
}
