import "./box.css";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import { useClassNames, useSetCustomCssVariable } from "../../hooks";

interface IBoxProps extends ComponentPropsWithoutRef<"div"> {
	center?: boolean;
	centerH?: boolean;
	centerV?: boolean;
}

export const Box: FunctionComponent<IBoxProps> = ({
	center,
	centerH,
	centerV,
	style,
	children,
	...rest
}) => {
	// Styling
	if (style?.margin) useSetCustomCssVariable("--box-margin", `${style.margin}`);
	if (style?.backgroundColor)
		useSetCustomCssVariable(
			"--box-background-color",
			`${style.backgroundColor}`
		);
	const classNames = useClassNames("Box", [
		{ "box-center-horizontal": center || centerH },
		{ "box-center-vertical": center || centerV },
	]);
	// Return Component
	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};
