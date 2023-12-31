import React, { MouseEventHandler } from 'react';
import { Button as MantineButton, Sx } from '@mantine/core';

import useStyles from './Button.styles';
import { SpacingProps } from '../shared/spacing.props';

export type Size = 'md' | 'lg' | undefined;

interface IButtonProps extends JSX.ElementChildrenAttribute, SpacingProps {
  loading?: boolean;
  size?: Size;
  variant?: 'outline' | 'gradient';
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  submit?: boolean;
  onClick?: (e: any) => void;
  onMouseEnter?: MouseEventHandler<any>;
  onMouseLeave?: MouseEventHandler<any>;
  inherit?: boolean;
  pulse?: boolean;
  sx?: Sx;
  iconPosition?: 'left' | 'right';
}

/**
 * Button component
 *
 */
export function Button({
  loading,
  children,
  submit = false,
  icon,
  size = 'md',
  fullWidth,
  disabled = false,
  inherit = false,
  onClick,
  variant = 'gradient',
  pulse,
  iconPosition = 'left',
  ...props
}: IButtonProps) {
  const { classes } = useStyles({ disabled, inherit, variant, pulse });
  const withIconProps = icon ? (iconPosition === 'left' ? { leftIcon: icon } : { rightIcon: icon }) : {};

  return (
    <MantineButton
      radius="md"
      classNames={classes}
      {...withIconProps}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      size={size}
      loading={loading}
      fullWidth={fullWidth}
      variant={variant}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
