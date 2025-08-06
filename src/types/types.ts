export interface HeaderProps {
	scrollToSection?: React.RefObject<HTMLElement | null> | ((ref: React.RefObject<HTMLElement | null>) => void);
	HomeRef: React.RefObject<HTMLElement | null>;
};