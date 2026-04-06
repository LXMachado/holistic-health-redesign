interface LotusLogoProps {
  className?: string;
  size?: number;
}

export function LotusLogo({ className = '', size = 80 }: LotusLogoProps) {
  return (
    <img
      src="/favicon.svg"
      alt="Beyond Body Holistic Health lotus logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
