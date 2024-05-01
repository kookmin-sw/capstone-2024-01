import { style } from '@vanilla-extract/css';
import { globals } from '@/app/globals.css';

export const modalContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 40px',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 435,
  marginBottom: 24,
  '@media': {
    '(max-width: 768px)': {
      width: '100%',
    },
  },
});

export const titleWrapper = style({
  width: '100%',
  textAlign: 'center',
  borderRadius: 16,
  border: `4px solid ${globals.color.blue_main}`,
  padding: 12,
  fontSize: 20,
  fontWeight: 600,
  color: globals.color.black,
  position: 'relative',
  top: -5,
});

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  marginBottom: 72,
});

export const inputWrapper = style({
  width: 240,
  '@media': {
    '(max-width: 768px)': {
      width: '100%',
    },
  },
});

export const buttonContainer = style({
  display: 'flex',
  width: 160,
});

export const buttonText = style({
  fontSize: 18,
  lineHeight: 0.5,
});
