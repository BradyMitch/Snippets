/**
 * @description Sets a css custom variable's value.
 * @param {string} variable - Custom variable from css file (ex: "--Card-margin").
 * @param {string} value - Value to set the custom variable to (ex: "10px").
 *
 * @example
 *
 * JSX: -----------------------------
 *
 * const Header = ({textColor}) => {
 * 	useSetCustomCssVariable("--Header-color", textColor);
 * 	return (
 * 		<h1 className="Header">
 * 			Like and Subscribe
 * 		</h1>
 * 	);
 * };
 *
 * CSS: -----------------------------
 *
 * :root {
 * 	--Header-color: black;
 * }
 * .Header {
 * 	font-size: 20px;
 * 	color: var(--Header-color);
 * }
 *
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca>
 */

export const useSetCustomCssVariable = (variable: string, value: string) => {
	document.documentElement.style.setProperty(variable, value);
};
