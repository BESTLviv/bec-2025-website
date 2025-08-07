export interface HeaderProps {
	scrollToSection?: React.RefObject<HTMLElement | null> | ((ref: React.RefObject<HTMLElement | null>) => void);
	refs: {
		HomeRef: React.RefObject<HTMLElement | null>;
		AboutRef: React.RefObject<HTMLElement | null>;
	}
};