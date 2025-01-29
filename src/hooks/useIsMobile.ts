import { useViewportSize } from "@mantine/hooks";

export const MOBILE_BREAKPOINT = 768;

export default function useIsMobile() {
 const { width } = useViewportSize()
 return width <= MOBILE_BREAKPOINT
}
