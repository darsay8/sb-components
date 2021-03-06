import './mylabel.css';

export interface MyLabelProps {
  /**
   * Label text
   */
  label: string;
  /**
   * Size of the label
   */
  size: 'default' | 'h1' | 'h2' | 'h3';
  /**
   * Allcaps?
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Custom Label color
   */
  fontColor?: string;
  /**
   * Background color
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'default',
  color = 'primary',
  allCaps = false,
  fontColor = '',
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <div>
      <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
        {allCaps ? label.toLocaleUpperCase() : label}
      </span>
    </div>
  );
};

export default MyLabel;
