interface LotusLogoProps {
  className?: string;
  size?: number;
}

export function LotusLogo({ className = '', size = 80 }: LotusLogoProps) {
  return (
    <img
      src="/favicon.png"
      alt="Beyond Body Holistic Health lotus logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
