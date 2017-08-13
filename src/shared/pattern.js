import glamorous from 'glamorous'

export const Section = glamorous.div(
  {
    padding: '20px 0',
  },
  ({theme}) => theme.common.borderBottom,
)
Section.displayName = 'Section'

const heading = {
  display: 'block',
  fontFamily: 'inherit',
  fontWeight: '500',
  lineHeight: '1.1',
  color: 'inherit',
}
const largerHeading = {
  marginTop: '20px',
  marginBottom: '10px',
}

const smallerHeading = {
  marginTop: '10px',
  marginBottom: '10px',
}

const textStyles = {
  faded: ({theme}) => ({color: theme.colors.faded}),
  fadedExtra: ({theme}) => ({color: theme.colors.fadedExtra}),
  superheading: [heading, largerHeading, {fontSize: 36}],
  heading: [heading, largerHeading, {fontSize: 30}],
  subheading: [heading, largerHeading, {fontSize: 24}],
  superstandard: [heading, smallerHeading, {fontSize: 18}],
  standard: [heading, smallerHeading, {fontSize: 14}],
  substandard: [heading, smallerHeading, {fontSize: 12}],
}

export const Text = glamorous.span(props => {
  return Object.keys(props).map(key => {
    if (props[key]) {
      return typeof textStyles[key] === 'function'
        ? textStyles[key](props)
        : textStyles[key]
    }
    return null
  })
})

export const Input = glamorous.input({
  display: 'block',
  width: '100%',
  height: '34px',
  padding: '6px 12px',
  fontSize: '14px',
  lineHeight: '1.42857143',
  color: '#555',
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
  transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
  ':focus': {
    borderColor: '#66afe9',
    outline: '0',
    boxShadow:
      'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
  },
})
Input.displayName = 'Input'

export const Button = glamorous.button({
  display: 'inline-block',
  padding: '6px 12px',
  marginBottom: '0',
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: '1.42857143',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundImage: 'none',
  border: '1px solid transparent',
  borderRadius: '4px',
})
Button.displayName = 'Button'

export const PrimaryButton = glamorous(Button)({
  color: '#fff',
  backgroundColor: '#337ab7',
  borderColor: '#2e6da4',
  '&:hover,&:active,&:focus': {
    color: '#fff',
    backgroundColor: '#286090',
    borderColor: '#204d74',
  },
  ':focus': {
    borderColor: '#122b40',
  },
})
PrimaryButton.displayName = 'PrimaryButton'

export const Image = glamorous.img(
  {
    border: '0',
    verticalAlign: 'middle',
  },
  ({responsive}) =>
    responsive
      ? {
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
        }
      : null,
  ({rounded}) =>
    rounded
      ? {
          borderRadius: '6px',
        }
      : null,
)
Image.displayName = 'Image'

export const Anchor = glamorous.a({
  color: '#337ab7',
  textDecoration: 'none',
  '&:active,&:hover': {
    outline: 0,
  },
  '&:hover,&:focus': {
    color: '#23527c',
    textDecoration: 'underline',
  },
  ':focus': {
    outline: '5px auto -webkit-focus-ring-color',
    outlineOffset: '-2px',
  },
})
