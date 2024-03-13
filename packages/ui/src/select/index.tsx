export interface SelectType {
  selected?: string
  options?: string[]
  onChange?: (value: string) => void
}

export const Select = ({ selected, options, onChange }: SelectType) => (
  <select value={selected} onChange={(e) => onChange?.(e.target.value)}>
    {options?.map((o) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
)
