import React from "react";
import Editable from "react-contenteditable";

interface TextProps {
  value: string;
  style?: any;
  onChange?: (value: string) => void;
}

export const Text: React.SFC<TextProps> = ({ value, style, onChange }) => {
  return (
    <Editable
      html={value}
      style={{ width: "100%", outline: "none", ...style }}
      onChange={onChange ? e => onChange(e.target.value) : undefined}
    />
  );
};

Text.defaultProps = {
  style: {}
};

interface ViewProps {
  style?: any;
  onClick?: () => void;
}

export const View: React.SFC<ViewProps> = ({ style, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        ...style,
        display: "flex"
      }}
    >
      {children}
    </div>
  );
};

View.defaultProps = {
  style: {}
};
