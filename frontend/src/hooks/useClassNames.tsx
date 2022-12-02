/**
 * Returns a string of classes for a React component's "className" prop.
 * @param {string} baseClasses - Classes that are always applied to the component.
 * @param {object[]} conditionalClasses - Classes that are applied to the component based on a boolean condition being true.
 * @param {boolean} [debug] - (optional) Logs the returned value to console when true.
 *
 * @example
 * const Box = ({center, border, children}) => {
 * 	const classNames = useClassNames("Box", [
 * 		{ "box-centered": center },
 * 		{ "box-outlined": border },
 * 	]);
 * 	return (
 * 		<div className={classNames}>
 * 			{children}
 * 		</div>
 * 	);
 * };
 *
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca>
 */

export const useClassNames = (
	baseClasses: string,
	conditionalClasses: object[],
	debug?: boolean
) => {
	let classNames = baseClasses ?? "";

	// Iterate conditionalClasses object array
	conditionalClasses.forEach((arg) => {
		// Iterate object properties
		for (const [key, value] of Object.entries(arg)) {
			if (value) classNames += ` ${key}`;
		}
	});

	if (debug) console.log(classNames);
	return classNames;
};
