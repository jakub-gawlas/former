export interface Value {
  columns: Column[];
  rows: Row[];
}

export interface Column {
  title: string;
}

export interface Row {
  cells: Cell[];
}

export interface Cell {
  value: string;
}
