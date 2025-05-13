"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { type WritingStyle, writingStyleOptions } from "@/lib/types"

interface StyleSelectorProps {
  selectedStyle: WritingStyle
  onStyleChange: (style: WritingStyle) => void
  disabled?: boolean
}

export default function StyleSelector({ selectedStyle, onStyleChange, disabled = false }: StyleSelectorProps) {
  return (
    <div className="space-y-3">
      <Label>Select Writing Style</Label>
      <RadioGroup
        value={selectedStyle}
        onValueChange={(value) => onStyleChange(value as WritingStyle)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
        disabled={disabled}
      >
        {writingStyleOptions.map((style) => (
          <div key={style.value} className="flex items-center space-x-2">
            <RadioGroupItem value={style.value} id={`style-${style.value}`} disabled={disabled} />
            <Label
              htmlFor={`style-${style.value}`}
              className="font-normal cursor-pointer"
              onClick={() => !disabled && onStyleChange(style.value as WritingStyle)}
            >
              {style.label}
              <span className="block text-xs text-muted-foreground">{style.description}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
